---
title: 008_refactor_dynamic_personality_page

---

008_refactor_dynamic_personality_page

```zllang!
<Task>
    <Objective>
        Refaktoriere die bestehende `DynamicPersonalityLanding.tsx` Komponente nach `app/dynamic-personality/DynamicPersonalityPage.tsx` und integriere sie in das neue Routing und Layout. Stelle sicher, dass der "Präsentationsseiten-Stil" angewendet wird.
    </Objective>
    <Context>
        Projekt: "GemDynamics Website"
        Codebasis: Gemäß `gemdynamics_website_codebase_structure.md (v1.2.2)`
        Design-Richtlinien: "Präsentationsseiten-Stil" (basierend auf der existierenden Komponente).
        Bestehende Komponente: `src/components/DynamicPersonalityLanding.tsx`.
        Zielpfad: `app/dynamic-personality/DynamicPersonalityPage.tsx`.
        Routing: `src/router/AppRouter.tsx` wird erweitert.
    </Context>
    <Instructions>
        <PLANSTEP 1 of 1: Dynamic Personality Seite refactoren und integrieren>
            <STEP 1 of 4/> **Verschiebe und benenne die Komponente um**
                * Kopiere den Inhalt von `src/components/DynamicPersonalityLanding.tsx` in eine neue Datei `app/dynamic-personality/DynamicPersonalityPage.tsx`.
                * Passe den Komponentennamen innerhalb der neuen Datei zu `DynamicPersonalityPage` an.
                * Aktualisiere alle internen Importpfade (z.B. für Assets, Hooks, andere Komponenten), falls diese relativ waren und sich durch die Verschiebung ändern.
                * Tool: `edit_file`

            <STEP 2 of 4/> **Stelle sicher, dass der "Präsentationsseiten-Stil" angewendet wird**
                * Überprüfe, ob die Styles (Tailwind-Klassen, Framer Motion Animationen) in `DynamicPersonalityPage.tsx` weiterhin wie im Original funktionieren.
                * Erstelle die Datei `src/styles/presentation-style.css`, falls noch nicht vorhanden. Übertrage spezifische, globale Stile, die nur für diesen Präsentationsstil relevant sind (falls welche in `src/App.css` oder `src/index.css` waren, die nicht in `globals.css` passen) hierher.
                * `DynamicPersonalityPage.tsx` sollte ggf. `presentation-style.css` importieren, wenn es spezifische CSS-Klassen daraus verwendet, die nicht über Tailwind Utilities abgedeckt sind.
                * Tool: `edit_file`

            <STEP 3 of 4/> **Aktualisiere `src/router/AppRouter.tsx`**
                * Füge eine Route für `/dynamic-personality` hinzu, die `DynamicPersonalityPage.tsx` rendert.
                * Stelle sicher, dass diese Seite im `MainLayout` (mit Header/Footer) gerendert wird. Die Seite selbst ist eine Onepage-Scroller-Seite, d.h. sie füllt den Content-Bereich des `MainLayout`.
                * Tool: `edit_file`

            <STEP 4 of 4/> **Aufräumen**
                * Lösche die ursprüngliche Datei `src/components/DynamicPersonalityLanding.tsx`.
                * Entferne den Import und die Verwendung von `DynamicPersonalityLanding.tsx` aus der alten `src/App.tsx` (dies sollte bereits durch die Router-Umstellung in Prompt `003_setup_main_layout_router_and_config.md` erfolgt sein, aber hier nochmals prüfen).
                * Tool: `run_terminal_cmd` (für `rm`), `edit_file`
        </Instructions>
    <AcceptanceCriteria>
        - Der Inhalt und die Funktionalität der ursprünglichen `DynamicPersonalityLanding.tsx` sind nun unter der Route `/dynamic-personality` als `DynamicPersonalityPage.tsx` verfügbar.
        - Die Seite ist korrekt in das `MainLayout` der Website eingebettet.
        - Der "Präsentationsseiten-Stil" ist intakt und nutzt ggf. `src/styles/presentation-style.css`.
        - Die alte Komponente ist entfernt.
    </AcceptanceCriteria>
</Task>
```