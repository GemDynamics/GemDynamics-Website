---
title: 006_create_account_pages_structure

---

006_create_account_pages_structure

```zllang!
<Task>
    <Objective>
        Erstelle die Grundstruktur und UI-Platzhalter für den "Account"-Bereich: `AccountDashboardPage.tsx`, `AccountManagementPage.tsx` und das `AccountManagementLayout.tsx` mit den vier Unteransichten (Profil, Subscriptions, Usage, Linked Accounts).
    </Objective>
    <Context>
        Projekt: "GemDynamics Website"
        Codebasis: Gemäß `gemdynamics_website_codebase_structure.md (v1.2.2)`
        Design-Richtlinien: `design-system-guidelines.md` (Haupt-Design-System).
        Routing: `src/router/AppRouter.tsx` wird erweitert.
        Anforderungen: Account Dashboard (Übersicht), Account Management (detaillierte Einstellungen mit linkem Menü für Profil, Subscriptions, Usage, Linked Accounts).
    </Context>
    <Instructions>
        <PLANSTEP 1 of 1: Account-Bereich UI-Struktur erstellen>
            <STEP 1 of 4/> **Erstelle `app/account/components/layout/AccountManagementLayout.tsx`**
                * Layout-Komponente für `AccountManagementPage.tsx`.
                * Enthält ein linkes Navigationsmenü (vertikal) mit `NavLink`s zu:
                    * `/account/settings/profile` (Label: "Profil")
                    * `/account/settings/subscriptions` (Label: "Subscriptions")
                    * `/account/settings/usage` (Label: "Usage")
                    * `/account/settings/linked-accounts` (Label: "Linked Accounts")
                * Rechts davon ein Bereich für `<Outlet />` von React Router.
                * Design des Menüs und Layouts gemäß Haupt-Design-System.
                * Tool: `edit_file`

            <STEP 2 of 4/> **Erstelle die Unteransichts-Komponenten für Account Management (Platzhalter)**
                * `app/account/components/profile/ProfileSettingsView.tsx`: Zeigt Titel "Profile Settings" und Platzhalter für Profilbild, Namensfelder, Passwortänderungsformular.
                * `app/account/components/subscriptions/SubscriptionsView.tsx`: Zeigt Titel "Subscriptions Management" und Platzhalter für Anzeige aktueller Pläne und Upgrade/Downgrade Optionen.
                * `app/account/components/usage/UsageView.tsx`: Zeigt Titel "Usage Overview" und Platzhalter für Token-Verbrauchsanzeigen.
                * `app/account/components/linked-accounts/LinkedAccountsView.tsx`: Zeigt Titel "Linked Accounts" und Platzhalter für eine Liste verknüpfter Dienste (Gmail, GitHub) mit "Link/Unlink"-Buttons.
                * Alle Views vorerst mit statischen UI-Platzhaltern ohne Logik. Design: Haupt-Design-System.
                * Tool: `edit_file` (für jede Datei)

            <STEP 3 of 4/> **Erstelle `app/account/AccountManagementPage.tsx`**
                * Verwendet `AccountManagementLayout.tsx`. Enthält `<Outlet />` für die Unteransichten.
                * Tool: `edit_file`

            <STEP 4 of 4/> **Erstelle `app/account/AccountDashboardPage.tsx` und aktualisiere Router**
                * `AccountDashboardPage.tsx`: Zeigt Titel "Account Dashboard". Enthält Platzhalter-Sektionen (als gestylte Divs oder Karten) für: "Profilübersicht", "Aktive Subscriptions", "Token-Verbrauch (Monat)", "Neueste Support Tickets", "Benachrichtigungen".
                * Aktualisiere `src/router/AppRouter.tsx`:
                    * Route `/account/dashboard` -> `AccountDashboardPage.tsx`.
                    * Route `/account/settings` -> `AccountManagementPage.tsx` (diese Route wird die Kindrouten aus `AccountManagementLayout` rendern).
                        * Definiere Kindrouten für `AccountManagementPage`:
                            * `path: "profile"` -> `ProfileSettingsView.tsx`
                            * `path: "subscriptions"` -> `SubscriptionsView.tsx`
                            * `path: "usage"` -> `UsageView.tsx`
                            * `path: "linked-accounts"` -> `LinkedAccountsView.tsx`
                            * Eine Index-Route für `/account/settings`, die z.B. zu `profile` weiterleitet oder eine eigene Übersichtsseite für Settings zeigt.
                    * Eine Weiterleitung von `/account` zu `/account/dashboard`.
                * Tool: `edit_file`
        </Instructions>
    <AcceptanceCriteria>
        - `AccountManagementLayout.tsx` mit funktionierendem linken Menü ist erstellt.
        - Alle vier Unteransichts-Komponenten für Account Management sind als UI-Platzhalter erstellt.
        - `AccountManagementPage.tsx` und `AccountDashboardPage.tsx` sind erstellt.
        - Die Routen für den Account-Bereich sind korrekt definiert und funktionsfähig.
        - UI folgt dem Haupt-Design-System.
    </AcceptanceCriteria>
</Task>
```