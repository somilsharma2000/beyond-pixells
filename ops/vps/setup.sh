#!/usr/bin/env bash
# Beyond Pixells — Free Stack Phase 1 bootstrap (one command).
# Runs on a fresh Debian/Ubuntu VPS (₹500/month class, 1GB RAM is enough).
# Docs: docs/FREE_TOOLS_STACK.md (blueprint) · docs/BACKEND_MAP.md (estate)
set -euo pipefail

echo "=== Beyond Pixells Free Stack — Phase 1 bootstrap ==="

# 1. Docker + compose plugin (skips if already installed)
if ! command -v docker >/dev/null 2>&1; then
  echo "--- installing docker ---"
  curl -fsSL https://get.docker.com | sh
fi
docker compose version >/dev/null 2>&1 || { echo "FATAL: docker compose plugin missing"; exit 1; }

# 2. Secrets
ENV_FILE="ops/vps/.env"
if [ ! -f "$ENV_FILE" ]; then
  if [ -f "ops/vps/.env.example" ]; then
    cp ops/vps/.env.example "$ENV_FILE"
    # random secret for healthchecks
    HC_SECRET=$(head -c32 /dev/urandom | od -An -tx1 | tr -d ' \n')
    sed -i "s/^HEALTHCHECKS_SECRET_KEY=.*/HEALTHCHECKS_SECRET_KEY=$HC_SECRET/" "$ENV_FILE"
    echo "NOTE: VPS_IP in $ENV_FILE is a placeholder — edit it, then re-run."
    exit 1
  fi
fi

# 3. First run: make sure git is there and this script runs from repo root
cd "$(dirname "$0")/../.."

# 4. Firewall (allow ssh + the four service ports)
if command -v ufw >/dev/null 2>&1; then
  ufw allow OpenSSH >/dev/null 2>&1 || true
  for p in 3001 5000 8000 8222; do ufw allow "$p" >/dev/null 2>&1 || true; done
fi

# 5. Bring the stack up
docker compose --env-file "$ENV_FILE" -f ops/vps/docker-compose.yml up -d
docker compose --env-file "$ENV_FILE" -f ops/vps/docker-compose.yml ps

IP=$(curl -s --max-time 5 https://api.ipify.org || echo "<vps-ip>")
cat << EOF

=== Phase 1 stack is UP ===
  Uptime Kuma (internal monitor)   http://$IP:3001  — add sites + Telegram/WhatsApp alert channel
  changedetection.io               http://$IP:5000  — watch client sites' connect script + forms
  Healthchecks (dead-man switch)   http://$IP:8000  — register the agent's daily jobs here
  Vaultwarden (password vault)     http://$IP:8222  — create admin account, then set SIGNUPS_ALLOWED=false

Next: secure all four behind HTTPS (caddy or nginx + certbot) BEFORE storing
any real credentials in Vaultwarden. Public status page is already live at
https://somilsharma2000.github.io/beyond-pixells-status/ (GitHub Actions, no VPS).
EOF
