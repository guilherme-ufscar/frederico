"""Deploy do projeto Frederico Ferreira no servidor 86.48.20.18.

Passos:
1. Backup do site antigo -> /www/wwwroot/frederico_legado
2. Envio dos arquivos do projeto -> /www/wwwroot/frederico
3. docker compose up -d --build (app na porta 127.0.0.1:3000)
4. Backup do vhost nginx do domínio + proxy reverso para o container
5. nginx -t + reload
"""
import paramiko, os, sys

HOST, USER, PASS = "86.48.20.18", "root", "CoderMaster2026"
LOCAL = r"C:\Users\Chyi Jaan Li\Desktop\frederico"
REMOTE = "/www/wwwroot/frederico"

# Arquivos a enviar (código + docker; node_modules/.next build dentro do container)
FILES = [
    ".dockerignore", ".gitignore", "Dockerfile", "docker-compose.prod.yml",
    "package.json", "package-lock.json", "next.config.ts", "tsconfig.json",
    "postcss.config.mjs", "eslint.config.mjs", "README.md", "Caddyfile",
]
DIRS = ["app", "components", "lib", "public", "scripts"]

def walk(local_dir, base=""):
    for name in sorted(os.listdir(local_dir)):
        if name in ("node_modules", ".next", ".git"):
            continue
        p = os.path.join(local_dir, name)
        # SEMPRE usar "/" no path remoto (SFTP Linux) — nunca "\" do Windows
        rel = f"{base}/{name}" if base else name
        if os.path.isdir(p):
            yield from walk(p, rel)
        else:
            yield p, rel

def main():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, port=22, username=USER, password=PASS, timeout=30)
    sftp = client.open_sftp()

    def run(cmd):
        stdin, stdout, stderr = client.exec_command(cmd, timeout=600)
        out = stdout.read().decode()
        err = stderr.read().decode()
        code = stdout.channel.recv_exit_status()
        return code, out, err

    # 1. Backup do site antigo (se ainda nao foi feito)
    code, out, _ = run("ls -d /www/wwwroot/frederico_legado 2>/dev/null || echo NAO")
    if "NAO" in out:
        print("[1] Fazendo backup do site antigo...")
        code, out, err = run("mv /www/wwwroot/frederico /www/wwwroot/frederico_legado && echo OK")
        print("   ", out.strip(), err.strip()[:200])
    else:
        print("[1] Backup legado ja existe")

    # 2. Enviar arquivos
    print("[2] Enviando projeto...")
    code, out, err = run(f"mkdir -p {REMOTE} && echo OK")
    for p, rel in walk(LOCAL):
        remote_path = f"{REMOTE}/{rel}"
        remote_dir = os.path.dirname(remote_path)
        code, _, _ = run(f"mkdir -p {remote_dir}")
        sftp.put(p, remote_path)
    print(f"    enviados {sum(1 for _ in walk(LOCAL))} arquivos")

    # 3. Docker compose up
    print("[3] Subindo Docker (build + up)...")
    code, out, err = run(f"cd {REMOTE} && docker compose -f docker-compose.prod.yml up -d --build")
    print(out[-1500:])
    if err.strip():
        print("ERR:", err[-800:])

    # 4. Vhost nginx -> proxy reverso
    print("[4] Ajustando vhost nginx do dominio (com backup)...")
    code, out, _ = run("ls /www/server/panel/vhost/nginx/advfredericoferreira.com.conf.bak 2>/dev/null || echo NAO")
    if "NAO" in out:
        run("cp /www/server/panel/vhost/nginx/advfredericoferreira.com.conf /www/server/panel/vhost/nginx/advfredericoferreira.com.conf.bak")
        print("    backup do .conf criado")

    vhost = """server
{
    listen 80;
    listen 443 ssl http2 ;
    server_name advfredericoferreira.com;
    # root removido: proxy reverso para o container Next.js
    include /www/server/panel/vhost/nginx/extension/advfredericoferreira.com/*.conf;

    #SSL-START
    ssl_certificate    /www/server/panel/vhost/cert/advfredericoferreira.com/fullchain.pem;
    ssl_certificate_key    /www/server/panel/vhost/cert/advfredericoferreira.com/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_tickets on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;
    #SSL-END

    error_page 404 /404.html;
    error_page 502 /502.html;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 120s;
    }

    location ~ \\.well-known{
        allow all;
    }

    access_log  /www/wwwlogs/advfredericoferreira.com.log;
    error_log  /www/wwwlogs/advfredericoferreira.com.error.log;
}
"""
    sftp.open("/www/server/panel/vhost/nginx/advfredericoferreira.com.conf", "w").write(vhost)
    print("    vhost atualizado (proxy -> 127.0.0.1:3000)")

    # 5. Testar e recarregar nginx
    print("[5] nginx -t + reload...")
    code, out, err = run("nginx -t 2>&1")
    print("   ", out.strip() or err.strip())
    if code == 0:
        run("nginx -s reload 2>&1 || /etc/init.d/nginx reload 2>&1 || systemctl reload nginx 2>&1")
        print("    nginx recarregado")
    else:
        print("    ERRO no nginx -t — revertendo vhost...")
        run("cp /www/server/panel/vhost/nginx/advfredericoferreira.com.conf.bak /www/server/panel/vhost/nginx/advfredericoferreira.com.conf && nginx -t 2>&1")
        sys.exit(1)

    sftp.close()
    client.close()
    print("DEPLOY CONCLUIDO")

if __name__ == "__main__":
    main()
