---
title: 003_setup_main_layout_router_and_config

---

003_setup_main_layout_router_and_config

```zllang!
<Task>
    <Objective>
        Grundlegendes Layout (`MainLayout.tsx`, `Header.tsx`, `Footer.tsx`) für die "GemDynamics Website" erstellen. React Router initialisieren und Basis-Konfigurationsdateien (`navigationConfig.ts`, `siteConfig.ts`) anlegen. `src/App.tsx` entsprechend anpassen.
    </Objective>
    <Context>
        Projekt: "GemDynamics Website" (Vite/React/TypeScript)
        Codebasis: Gemäß `gemdynamics_website_codebase_structure.md (v1.2.2)` und den Anpassungen aus den vorherigen Schritten dieser Sequenz.
        Design-Richtlinien: `design-system-guidelines.md` (Haupt-Design-System) für diese Layout-Komponenten.
    </Context>
    <Instructions>
        <PLANSTEP 1 of 1: Hauptlayout, Router und Konfigurationen einrichten>
            <STEP 1 of 5/> **Konfigurationsdateien erstellen**
                * Erstelle `src/config/siteConfig.ts`:
                    ```typescript
                    // src/config/siteConfig.ts
                    export const siteConfig = {
                      title: "GemDynamics - The Future of Digital Interaction",
                      description: "Official website for GemDynamics, showcasing our innovative tools and platform.",
                    };
                    ```
                * Erstelle `src/config/navigationConfig.ts` (gemäß Ihrer Vorgabe für das Tab-Menü):
                    ```typescript
                    // src/config/navigationConfig.ts
                    export type NavItem = {
                      label: string;
                      path: string;
                    };

                    export const topBarTabNavigation: NavItem[] = [
                      { label: "Account", path: "/account/dashboard" },
                      { label: "Dynamic Personality", path: "/dynamic-personality" },
                      { label: "ApexAnalytics", path: "/apex-analytics" },
                      { label: "CortexOneSuite", path: "/cortex-one-suite-presentation" },
                      { label: "Support", path: "/support" },
                    ];
                    ```
                * Tool: `edit_file`

            <STEP 2 of 5/> **Layout-Komponenten erstellen (`MainLayout.tsx`, `Header.tsx`, `Footer.tsx`)**
                * Erstelle `src/components/layout/Header.tsx`:
                    * Zeigt ein Firmenlogo-Platzhalter (z.B. Text "GemDynamics") und einen Platzhalter für `TopBarTabMenu.tsx`.
                    * Styling gemäß `design-system-guidelines.md` (z.B. Höhe, Hintergrund `bg-gray-900/80 backdrop-blur-md sticky top-0 z-50`, Padding).
                * Erstelle `src/components/layout/Footer.tsx`:
                    * Einfacher Footer mit Copyright (dynamisches Jahr) und Text "GemDynamics Inc. All rights reserved.".
                    * Styling gemäß `design-system-guidelines.md` (z.B. `bg-gray-800 text-gray-400 text-center p-4`).
                * Erstelle `src/components/layout/MainLayout.tsx`:
                    * Nimmt `children` als Prop.
                    * Rendert `Header`, dann `<main className="flex-grow">{children}</main>`, dann `Footer`.
                    * Der äußere Div sollte `flex flex-col min-h-screen` sein.
                * Tool: `edit_file`

            <STEP 3 of 5/> **Router einrichten (`src/router/AppRouter.tsx`)**
                * Erstelle `src/router/AppRouter.tsx`.
                * Verwende `react-router-dom` (`BrowserRouter` wird in `main.tsx` sein, hier `Routes`, `Route`).
                * Definiere eine Basisroute, die das `MainLayout` als umschließendes Layout verwendet für alle Kindrouten.
                * Definiere eine initiale Route für `/` (wird `LandingPage` sein, die in einem späteren Prompt erstellt wird – jetzt einen einfachen Platzhalter `<p>Home</p>` rendern).
                * Tool: `edit_file`

            <STEP 4 of 5/> **`src/App.tsx` anpassen**
                * Importiere und rendere den `AppRouter`.
                * Entferne den direkten Import von `DynamicPersonalityLanding.tsx` oder andere spezifische Seiteninhalte.
                * Tool: `edit_file`
                * Pfad: `src/App.tsx`

            <STEP 5 of 5/> **`src/main.tsx` anpassen für Router**
                * Umschließe die `<App />` Komponente mit `<BrowserRouter>` von `react-router-dom`.
                * Tool: `edit_file`
                * Pfad: `src/main.tsx`
        </Instructions>
    <AcceptanceCriteria>
        - `src/config/siteConfig.ts` und `src/config/navigationConfig.ts` sind erstellt.
        - `MainLayout.tsx`, `Header.tsx`, `Footer.tsx` sind als Basis-Komponenten erstellt und folgen dem Haupt-Design-System.
        - `AppRouter.tsx` ist erstellt und in `App.tsx` integriert; `BrowserRouter` ist in `main.tsx` eingerichtet.
        - Die Anwendung startet und zeigt Header, Footer und den Platzhalter für die initiale Route an.
    </AcceptanceCriteria>
</Task>
```