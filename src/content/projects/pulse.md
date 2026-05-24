---
id_number: 'Nº03'
year: 2024
badge: 'PROYECTO PERSONAL'
title: 'PULSE'
short_description: 'Monitor de uptime que escribe la postmortem por ti. Corre en un droplet de $5. Sí, lo sé.'
stack: ['NODE', 'SQLITE', 'HTMX']
role: 'Solo'
type: 'Proyecto personal'
---

- Binario único de Node, SQLite para el estado, htmx para la UI — sin SPA, sin build.
- Auto-postmortem lee los logs alrededor del incidente y arma un markdown.
- Deploy es `scp` y `systemctl restart`. Es 2026 y eso es feature, no bug.
