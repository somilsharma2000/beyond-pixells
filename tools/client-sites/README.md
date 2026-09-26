# CLIENT SITE FACTORY (blueprint §205 landing page factory)

Generates a branded client landing site from the canonical template
(oxigen-fitness-digital repo) plus one JSON client-data file.

```bash
# from a workspace with oxigen-fitness-digital/ and the client repo/ as siblings:
python3 tools/client-sites/client_site_factory.py tools/client-sites/clients/<client>.json ../<client-repo>
```

- All 8 client sites (as of 2026-09-26) were built with this factory.
- **No invention law**: the JSON holds ONLY the club's real published data.
  Missing data (trainers, ratings) renders honest template fallbacks, never personas.
- Client JSONs are kept here as the source of record for each rebuild.
