# GemDynamics - Dynamische Persönlichkeit für KI-Assistenten

Eine moderne Webseite für GemDynamics, die Technologie zur dynamischen Persönlichkeitsanpassung für KI-Assistenten.

## Technologie-Stack

- React 19
- TypeScript
- Vite
- TailwindCSS
- Lucide Icons

## Lokale Entwicklung

Um das Projekt lokal zu starten:

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

## Bereitstellung auf Vercel

Diese Anwendung ist für die Bereitstellung auf Vercel optimiert. Folge diesen Schritten, um sie zu deployen:

1. Erstelle ein Konto auf [Vercel](https://vercel.com) falls du noch keines hast
2. Installiere die Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Logge dich in der CLI ein:
   ```bash
   vercel login
   ```
4. Deploye die Anwendung:
   ```bash
   vercel
   ```

Alternativ kannst du auch direkt über das Vercel Dashboard deployen:

1. Pushe dein Projekt auf GitHub
2. Verbinde es in deinem Vercel Dashboard
3. Vercel erkennt automatisch die Vite-Konfiguration und führt den Build-Prozess durch

## Konfiguration

Die `vercel.json` Datei enthält die Konfiguration für das Deployment, einschließlich:
- URL-Rewrites für SPA-Routing
- HTTP-Header für Sicherheit
- Caching-Strategien

## Lizenz

Copyright © 2024 GemDynamics. Alle Rechte vorbehalten.
