# Disaster Safety Platform for Japan

Multilingual disaster-safety platform for international residents and students in Japan.

- Real-time earthquake and typhoon alerts from the Japan Meteorological Agency (JMA)
- English / Japanese / Chinese interface
- Nearest shelters and evacuation routes
- Offline mode: pre-cached shelters, map tiles and guides work when cell towers go down

## Data sources

- JMA Bosai JSON: https://www.jma.go.jp/bosai/quake/data/list.json
- JMA Disaster Prevention XML Atom feeds: https://www.data.jma.go.jp/developer/xml/feed/eqvol.xml
- JMA RSMC Tokyo-Typhoon Center bulletins
- Designated evacuation-site open data from local governments (imported into Postgres, with source URL and last-verified date per row)

JMA is the source of truth for Japan. USGS is only a secondary cross-check.

## Stack

Next.js + TypeScript on Vercel, PostgreSQL on Supabase, Supabase Auth. PWA with a service worker for offline caching.

## Status

In development. Day 1 tasks: repo setup, Supabase schema, seed data, school/shelter list page, verification queue skeleton, Vercel preview.
