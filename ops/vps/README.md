# VPS bootstrap — Free Stack Phase 1 (the watcher stack)

One-command bring-up of the monitoring stack from `docs/FREE_TOOLS_STACK.md`.
**Nothing here is deployed yet** — it runs the moment the founder buys the VPS.

## What runs on the VPS (~500MB RAM total)

| Service | Port | Purpose |
|---|---|---|
| Uptime Kuma | 3001 | Rich internal monitoring of all 14 properties + lead API, with alert channels (Telegram/WhatsApp bridge) |
| changedetection.io | 5000 | Watches client sites' `gym-os-connect.js` presence + lead form markup — silent-failure killer |
| Healthchecks | 8000 | Dead-man switch — alerts when a scheduled job (backups, the agent's daily reviews) *didn't* run |
| Vaultwarden | 8222 | Encrypted vault for every estate password/API key |

Upptime (public status page, 5-min checks) does **not** need the VPS — it is
already live on GitHub Actions:
https://somilsharma2000.github.io/beyond-pixells-status/

## Deploy (on a fresh ₹500/month VPS)

```bash
git clone https://github.com/somilsharma2000/beyond-pixells.git
cd beyond-pixells
cp ops/vps/.env.example ops/vps/.env   # set VPS_IP; secret is auto-generated
bash ops/vps/setup.sh                   # docker + firewall + containers
```

## After bring-up (checklist)

1. Uptime Kuma: add all 14 sites from `.upptimerc.yml` + the lead-capture API;
   set a 60s interval; add alert channel.
2. changedetection.io: watch each client site for the `gym-os-connect.js`
   script tag and the lead form's field names.
3. Healthchecks: register the agent's daily jobs, add the ping URLs to the
   Base44 workflows' last step.
4. Vaultwarden: create the admin account, then flip `SIGNUPS_ALLOWED=false`
   in the compose file and `docker compose up -d` again.
5. Put all four behind HTTPS before storing real credentials.

## Security notes (honest)

- Plain HTTP on ports 3001/5000/8000/8222 is fine for setup, NOT for real
  credentials — do the HTTPS step (Caddy is the least work) first.
- Do not expose Healthchecks' admin or Vaultwarden publicly without TLS.
