---
title: 007_create_support_page

---

007_create_support_page

```zllang!
<Task>
    <Objective>
        Erstelle die Platzhalterseite `SupportComingSoonPage.tsx` für den "Support"-Tab.
    </Objective>
    <Context>
        Projekt: "GemDynamics Website"
        Codebasis: Gemäß `gemdynamics_website_codebase_structure.md (v1.2.2)`
        Design-Richtlinien: `design-system-guidelines.md` (Haupt-Design-System).
        Routing: `src/router/AppRouter.tsx` wird erweitert.
    </Context>
    <Instructions>
        <PLANSTEP 1 of 1: Support Coming Soon Seite erstellen>
            <STEP 1 of 2/> **Erstelle `app/support/SupportComingSoonPage.tsx`**
                * Eine einfache Seite, die prominent "Support - Coming Soon" oder "Hilfe & Support - Demnächst verfügbar" anzeigt.
                * Kann einen kurzen Text enthalten, dass Support-Funktionen (FAQ, Ticket-System, Live-Chat-Platzhalter) in Kürze verfügbar sein werden.
                * Design gemäß Haupt-Design-System (sauber, informativ).
                * Tool: `edit_file`

            <STEP 2 of 2/> **Aktualisiere `src/router/AppRouter.tsx`**
                * Füge eine Route für `/support` hinzu, die `SupportComingSoonPage.tsx` rendert.
                * Tool: `edit_file`
        </Instructions>
    <AcceptanceCriteria>
        - `SupportComingSoonPage.tsx` ist erstellt und zeigt eine "Coming Soon"-Nachricht.
        - Die Route `/support` ist im `AppRouter.tsx` definiert und funktioniert.
        - Das UI entspricht dem Haupt-Design-System.
    </AcceptanceCriteria>
</Task>
```