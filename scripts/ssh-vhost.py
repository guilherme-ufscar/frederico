"""Inspeciona o vhost do dominio frederico e portas livres."""
import paramiko

HOST, USER, PASS = "86.48.20.18", "root", "CoderMaster2026"
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect(HOST, port=22, username=USER, password=PASS, timeout=20)

cmds = [
    ("VHOST advfredericoferreira.com", "cat /www/server/panel/vhost/nginx/advfredericoferreira.com.conf"),
    ("Portas em uso (todas)", "ss -tlnp | awk '{print $4}' | grep -oE ':[0-9]+$' | sort -u | tr '\\n' ' '"),
    ("Docker networks", "docker network ls --format '{{.Name}}' | head -10"),
]
for title, cmd in cmds:
    stdin, stdout, stderr = client.exec_command(cmd)
    print(f"=== {title} ===\n{stdout.read().decode()}\n")

client.close()
