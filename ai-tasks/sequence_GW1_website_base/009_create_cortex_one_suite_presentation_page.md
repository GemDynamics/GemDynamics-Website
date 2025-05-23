---
title: 009_create_cortex_one_suite_presentation_page

---

009_create_cortex_one_suite_presentation_page

```zllang!
<Task>
    <Objective>
        Erstelle die Seite `CortexOneSuitePage.tsx` für die Präsentation von CortexOneSuite, inklusive einer `DownloadAndLinkSection.tsx`.
    </Objective>
    <Context>
        Projekt: "GemDynamics Website"
        Codebasis: Gemäß `gemdynamics_website_codebase_structure.md (v1.2.2)`
        Design-Richtlinien: "Präsentationsseiten-Stil".
        Routing: `src/router/AppRouter.tsx` wird erweitert.
        Inhalt: Basierend auf GTO Dev's Wissen über "Konzept: CortexOneSuite".
    </Context>
    <Instructions>
        <PLANSTEP 1 of 1: CortexOneSuite Präsentationsseite erstellen>
            <STEP 1 of 3/> **Erstelle `app/cortex-one-suite-presentation/components/DownloadAndLinkSection.tsx`**
                * Eine Komponente, die Buttons oder Links anzeigt für:
                    * "CortexOneSuite App herunterladen" (Platzhalter-Button, Link zu `#`).
                    * "Zur CortexOneSuite Tool-Website" (Platzhalter-Button, Link zu `#`, falls eine separate Detailseite für das Tool existiert oder geplant ist).
                * Design im "Präsentationsseiten-Stil" oder ein auffälliger Call-to-Action-Stil.
                * Tool: `edit_file`

            <STEP 2 of 3/> **Erstelle `app/cortex-one-suite-presentation/CortexOneSuitePage.tsx`**
                * Eine Onepage-Scroller-Seite.
                * **Inhaltliche Sektionen (basierend auf "Konzept: CortexOneSuite"):**
                    * Hero: "CortexOneSuite: Ihre KI-gestützte Produktivitätszentrale für Google Workspace". Kurze Vision.
                    * Features-Übersicht: "Nahtlose GSuite Integration", "Gemini KI-Power", "CortexCoop für Team-Kollaboration", "CortexSynapse für Custom KI-Agenten", "Erweiterbares Plugin-System". Jeweils mit 1-2 prägnanten Sätzen und einem passenden Lucide Icon.
                    * Call to Action: Integration der `DownloadAndLinkSection.tsx`.
                    * Optional: Eine kleine Bildergalerie oder Mockup-Darstellung (Platzhalter für Bilder).
                * Design und Animationen im "Präsentationsseiten-Stil" (smooth scroll, slide-in/out Effekte für Sektionen, ähnlich `DynamicPersonalityPage.tsx`). Nutze `src/styles/presentation-style.css` für gemeinsame Stile.
                * Tool: `edit_file`

            <STEP 3 of 3/> **Aktualisiere `src/router/AppRouter.tsx`**
                * Füge eine Route für `/cortex-one-suite-presentation` hinzu, die `CortexOneSuitePage.tsx` rendert.
                * Tool: `edit_file`
        </Instructions>
    <AcceptanceCriteria>
        - `DownloadAndLinkSection.tsx` ist erstellt.
        - `CortexOneSuitePage.tsx` ist erstellt, enthält die skizzierten inhaltlichen Sektionen und die Download-Sektion.
        - Die Route `/cortex-one-suite-presentation` ist im `AppRouter.tsx` definiert und funktioniert.
        - Das UI folgt dem "Präsentationsseiten-Stil".
    </AcceptanceCriteria>
</Task>
```