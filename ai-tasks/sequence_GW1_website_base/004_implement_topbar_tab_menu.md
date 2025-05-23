---
title: 004_implement_topbar_tab_menu

---

004_implement_topbar_tab_menu

```zllang!
<Task>
    <Objective>
        Implementiere das `TopBarTabMenu.tsx` und `TabMenuItem.tsx` basierend auf `navigationConfig.ts` und integriere es in den `Header.tsx`.
    </Objective>
    <Context>
        Projekt: "GemDynamics Website"
        Codebasis: Gemäß `gemdynamics_website_codebase_structure.md (v1.2.2)`
        Design-Richtlinien: `design-system-guidelines.md` (Haupt-Design-System).
        Abhängigkeiten: `react-router-dom` für `NavLink`. `lucide-react` für Icons (optional für Menüpunkte).
        Konfiguration: `src/config/navigationConfig.ts` enthält die Menüpunkte.
    </Context>
    <Instructions>
        <PLANSTEP 1 of 1: Tab-Menü Implementierung>
            <STEP 1 of 3/> **Erstelle `src/components/layout/TabMenuItem.tsx`**
                * Diese Komponente rendert einen einzelnen Navigationslink.
                * Nutzt `NavLink` von `react-router-dom` (prop `to={path}`).
                * Wendet aktives Styling an, wenn die Route übereinstimmt (z.B. `className={({ isActive }) => isActive ? 'active-styles' : 'inactive-styles'}`).
                * Akzeptiert `label` und `path` als Props (aus `NavItem` Typ in `navigationConfig.ts`).
                * Styling für normalen, Hover- und aktiven Zustand gemäß `design-system-guidelines.md` (z.B. Textfarbe, Glow-Effekt, dezente Unterstreichung oder Hintergrundänderung im aktiven Zustand).
                * Tool: `edit_file`

            <STEP 2 of 3/> **Erstelle `src/components/layout/TopBarTabMenu.tsx`**
                * Importiert `topBarTabNavigation` aus `src/config/navigationConfig.ts`.
                * Mappt über die Konfiguration und rendert für jeden Eintrag eine `TabMenuItem.tsx` Komponente.
                * Ordnet die Items horizontal an (z.B. in einem `nav` Element mit Flexbox, `space-x-4` oder `space-x-6`).
                * Tool: `edit_file`

            <STEP 3 of 3/> **Integriere `TopBarTabMenu` in `Header.tsx`**
                * Importiere und rendere die `TopBarTabMenu.tsx` Komponente im `Header.tsx` an der vorgesehenen Stelle (z.B. mittig oder rechts neben dem Logo-Platzhalter).
                * Stelle sicher, dass der Header Flexbox verwendet, um Logo und Menü korrekt anzuordnen (`justify-between items-center`).
                * Tool: `edit_file`
                * Pfad: `src/components/layout/Header.tsx`
        </Instructions>
    <AcceptanceCriteria>
        - `TabMenuItem.tsx` ist erstellt und stylt Links korrekt (inkl. Aktivzustand).
        - `TopBarTabMenu.tsx` rendert alle Navigationspunkte aus `navigationConfig.ts`.
        - Das Tab-Menü ist im `Header.tsx` sichtbar und funktionsfähig (Navigation zu noch nicht existierenden Seiten-Platzhaltern).
        - Das Styling entspricht dem Haupt-Design-System.
    </AcceptanceCriteria>
</Task>
```