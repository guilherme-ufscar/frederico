"""Inspeciona como o site frederico e servido hoje no servidor."""
import paramiko

HOST, USER, PASS = "86.48.20.18", "root", "CoderMaster2026"
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect(HOST, port=22, username=USER, password=PASS, timeout=20)

cmds = [
    ("Portas 80/443", "ss -tlnp | grep -E ':(80|443|8080|3000) ' || echo 'livres'"),
    ("Nginx config do frederico", "grep -rl 'frederico' /www/server/panel/vhost/nginx/ 2>/dev/null; grep -r 'frederico' /www/server/nginx/conf/ 2>/dev/null | head -5"),
    ("Vhosts nginx", "ls /www/server/panel/vhost/nginx/ 2>/dev/null | head -10"),
    ("Dominio apontado", "curl -s -o /dev/null -w '%{http_code}' http://advfredericoferreira.com/ 2>/dev/null; echo ' <- advfredericoferreira.com'"),
    ("Docker porta 80?", "docker ps --format '{{.Names}} {{.Ports}}' | grep -E ':80->|:443->' || echo 'nenhum container na 80/443'"),
    ("BT panel?", "ls /www/server/panel 2>/dev/null | head -3 && echo 'aaPanel/宝塔 detectado' || echo 'sem painel BT'"),
]
for title, cmd in cmds:
    stdin, stdout, stderr = client.exec_command(cmd)
    out = stdout.read().decode().strip()
    print(f"=== {title} ===\n{out}\n")

client.close()
