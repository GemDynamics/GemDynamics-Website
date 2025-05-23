---
title: 001_project_init_and_repo_setup

---

001_project_init_and_repo_setup

```zllang!
<Task>
    <Objective>
        Lokales Projekt initialisieren (falls nicht exakt wie bereitgestellt), Git-Hooks einrichten, Abhängigkeiten überprüfen/installieren und Basis-Konfigurationsdateien (ESLint, Prettier, TypeScript) sicherstellen/anpassen. Vorbereitung für den ersten Push zum bestehenden GitHub-Repository.
    </Objective>
    <Context>
        Projekt: "GemDynamics Website" (Vite/React/TypeScript)
        Codebasis: Basiert auf dem vom Benutzer bereitgestellten Git-Repo (`GemDynamics-Website-b4bd8f3a10f49d6ea5452f65de5b1e3644d9ede2`). Der Fokus liegt auf der Anpassung und Vervollständigung der Konfiguration für unsere Zwecke.
        Paketmanager: pnpm (gemäß `package-lock.json`, falls vorhanden, sonst `npm` aus `package.json` ableiten oder pnpm als Standard vorschlagen).
        Codebase-Struktur-Ziel: `gemdynamics_website_codebase_structure.md (v1.2.2)`
        Naming Conventions: `gemdynamics_website_naming_conventions.md (v1.1.0)`
    </Context>
    <Instructions>
        <PLANSTEP 1 of 1: Lokale Projektinitialisierung, Konfiguration und Git-Vorbereitung>
            <STEP 1 of 7/> **Überprüfung der Projektdateien und Abhängigkeiten**
                * Instruiere das LLM, die vorhandene `package.json` zu analysieren.
                * Stelle sicher, dass alle Kernabhängigkeiten für React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide Icons und React Router DOM (`react-router-dom`) vorhanden sind. Falls `react-router-dom` fehlt, füge es hinzu.
                * Empfehle `pnpm install`, um sicherzustellen, dass alle Abhängigkeiten gemäß Lockfile installiert sind.
                * Tool: `read_file` (für `package.json`), `run_terminal_cmd` (für Installation/Überprüfung)
                * Befehl (falls `react-router-dom` fehlt): `pnpm add react-router-dom`
                * Befehl (Abhängigkeiten installieren): `pnpm install`

            <STEP 2 of 7/> **ESLint, Prettier und TypeScript Konfigurationen überprüfen/anpassen**
                * Überprüfe die vorhandenen Konfigurationsdateien:
                    * `eslint.config.js`
                    * `.prettierrc.json` (falls nicht vorhanden, erstellen mit `tabWidth: 4`, `singleQuote: true`, `semi: true` und `prettier-plugin-tailwindcss`)
                    * `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
                * Stelle sicher, dass sie den üblichen Standards für React/TypeScript-Projekte entsprechen und Prettier-ESLint-Integration vorhanden ist. Ergänze ggf. `prettier-plugin-tailwindcss` im Prettier-Setup.
                * Tool: `read_file`, `edit_file`

            <STEP 3 of 7/> **Husky, lint-staged und commitlint einrichten (falls nicht vorhanden)**
                * Überprüfe, ob Git Hooks mit Husky, lint-staged und commitlint bereits konfiguriert sind (Suche nach `.husky/` Ordner, `lint-staged` in `package.json`, `commitlint.config.js`).
                * Falls nicht, richte sie ein:
                    * `pnpm add -D husky lint-staged commitlint @commitlint/config-conventional` (falls nicht schon in devDependencies)
                    * `pnpm exec husky init`
                    * `echo "pnpm lint-staged" > .husky/pre-commit`
                    * `echo "pnpm exec commitlint --edit $1" > .husky/commit-msg`
                    * Erstelle `lint-staged.config.js` (oder in `package.json`): `{"*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"]}`.
                    * Erstelle `commitlint.config.js`: `module.exports = {extends: ['@commitlint/config-conventional']};`.
                * Tool: `read_file` (package.json), `run_terminal_cmd`, `edit_file`

            <STEP 4 of 7/> **Globale Styles anpassen und umbenennen**
                * Benenne `src/index.css` um zu `src/styles/globals.css`.
                * Aktualisiere den Import in `src/main.tsx` von `import './index.css'` zu `import './styles/globals.css'`.
                * Stelle sicher, dass `src/styles/globals.css` die Tailwind-Basisdirektiven (`@tailwind base; @tailwind components; @tailwind utilities;`) enthält.
                * Übertrage ggf. Basis-HTML/Body-Stile aus `src/App.css` nach `src/styles/globals.css` und lösche `src/App.css`, wenn es danach leer ist oder nur noch komponenten-spezifische Stile enthielt, die besser co-located werden.
                * Tool: `edit_file` (für `src/main.tsx`, `src/styles/globals.css`, `src/App.css`), `run_terminal_cmd` (für `mv`, `rm`)

            <STEP 5 of 7/> **Verzeichnisstruktur vorbereiten (gemäß Zielstruktur)**
                * Erstelle die Hauptverzeichnisse unter `app/` und `src/` gemäß `gemdynamics_website_codebase_structure.md (v1.2.2)`, falls sie noch nicht existieren (z.B. `app/landing`, `app/account`, `app/support`, `src/router`, `src/config`, `src/contexts`, `src/hooks`, `src/lib`, `src/styles/themes.css`, `src/styles/presentation-style.css`).
                * Tool: `run_terminal_cmd` (für `mkdir -p`)

            <STEP 6 of 7/> **`.gitignore` überprüfen und anpassen**
                * Stelle sicher, dass `.gitignore` wichtige Einträge enthält (z.B. `node_modules/`, `dist/`, `.env.local`, `.DS_Store`, `*.log`, `vite.config.ts.timestamp-*`).
                * Tool: `edit_file`
                * Pfad: `./.gitignore` (falls vorhanden, sonst erstellen)

            <STEP 7 of 7/> **Erste lokale Commits für Vorbereitung**
                * Instruiere den Benutzer, alle bisherigen Vorbereitungsänderungen lokal zu committen.
                * Beispiel-Commit-Nachricht: `chore: prepare project structure and configurations for GemDynamics Website setup`
                * Hinweis: Dies ist ein lokaler Commit; der Push zum Remote erfolgt nach der Vercel-Einrichtung.
                * Tool: - (Benutzeraktion)
        </Instructions>
    <AcceptanceCriteria>
        - Notwendige Abhängigkeiten (`react-router-dom`) sind installiert.
        - ESLint, Prettier, TypeScript Konfigurationen sind überprüft und ggf. angepasst.
        - Git Hooks mit Husky sind (falls nicht vorhanden) eingerichtet.
        - `src/index.css` ist zu `src/styles/globals.css` umbenannt und korrekt importiert.
        - Die grundlegende Verzeichnisstruktur für `app/` und `src/` ist gemäß Ziel angelegt.
        - `.gitignore` ist sinnvoll konfiguriert.
        - Die Vorbereitungen sind lokal committet.
    </AcceptanceCriteria>
</Task>
```