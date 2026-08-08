"""Testa conexao SSH com o servidor e mostra o estado da pasta do projeto."""
import paramiko, sys

HOST = "86.48.20.18"
USER = "root"
PASS = "CoderMaster2026"

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
try:
    client.connect(HOST, port=22, username=USER, password=PASS, timeout=20)
    print("CONECTADO OK")
    stdin, stdout, stderr = client.exec_command("hostname && whoami && uname -a | cut -c1-60")
    print(stdout.read().decode())
    stdin, stdout, stderr = client.exec_command("ls -la /www/wwwroot/frederico 2>/dev/null || echo 'PASTA NAO EXISTE'")
    print(stdout.read().decode())
    stdin, stdout, stderr = client.exec_command("docker --version 2>/dev/null; docker compose version 2>/dev/null | head -1")
    print(stdout.read().decode())
    stdin, stdout, stderr = client.exec_command("docker ps --format '{{.Names}}' 2>/dev/null | head -20")
    print("CONTAINERS:", stdout.read().decode().replace(chr(10), ", "))
    stdin, stdout, stderr = client.exec_command("df -h / | tail -1")
    print("DISCO:", stdout.read().decode())
    client.close()
except Exception as e:
    print("ERRO:", e)
    sys.exit(1)
