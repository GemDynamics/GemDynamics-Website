---
title: gemdynamics_website_codebase_structure.md

---

# Codebase Struktur für "GemDynamics Website" (v1.2.2)

Dies beschreibt die geplante Verzeichnis- und Dateistruktur für das "GemDynamics Website" Projekt. Dies ist eine reine Webanwendung (Vite/React/TypeScript), die auf Vercel deployed wird und den separaten "GemDynamics Auth Service" sowie potenziell einen "Coop/Corp Core Service" konsumiert.

# Codebase Struktur für "GemDynamics Website"
```zllang
gemdynamics-website/
├── app/
│   ├── account/
│   │   ├── AccountDashboardPage.tsx  # Übersicht: Profil-Kurzinfo, Subscriptions, Usage-Summary, Support-Ticket-Übersicht, Benachrichtigungen
│   │   ├── AccountManagementPage.tsx # Detaileinstellungen
│   │   └── components/
│   │       ├── layout/
│   │       │   └── AccountManagementLayout.tsx # Layout mit linkem Menü
│   │       ├── profile/
│   │       │   └── ProfileSettingsView.tsx     # Menü: {Profil} - Profilbild, Name, Benutzername, About Me, Passwort
│   │       ├── subscriptions/
│   │       │   └── SubscriptionsView.tsx       # Menü: {Subscriptions} - Aktuelles Abo, Upgrade/Downgrade Optionen, "OneSuite"
│   │       ├── usage/
│   │       │   └── UsageView.tsx               # Menü: {Usage} - Tokenvolumen, Pay-as-you-go Limits
│   │       └── linked-accounts/
│   │           └── LinkedAccountsView.tsx      # Menü: {Accounts} - Verknüpfung von Gmail, GitHub etc. für Cortex
│   ├── apex-analytics/
│   │   ├── ApexAnalyticsPage.tsx
│   │   └── components/
│   ├── cortex-one-suite-presentation/
│   │   ├── CortexOneSuitePage.tsx
│   │   └── components/
│   │       └── DownloadAndLinkSection.tsx
│   ├── dynamic-personality/
│   │   └── DynamicPersonalityPage.tsx
│   ├── landing/
│   │   ├── LandingPage.tsx
│   │   └── components/
│   │       ├── AuthForm.tsx
│   │       └── HeroSectionLanding.tsx
│   └── support/
│       └── SupportComingSoonPage.tsx
├── public/
│   ├── icons/
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   # ... (Button, Modal, InputField, Icon, Spinner, ToastNotification)
│   │   ├── layout/
│   │   │   ├── MainLayout.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── TopBarTabMenu.tsx # Für "Account", "Dynamic Personality", "ApexAnalytics", "CortexOneSuite", "Support"
│   │   │   ├── TabMenuItem.tsx
│   │   │   └── Footer.tsx
│   │   └── animations/
│   │       └── OnepageScrollSection.tsx
│   ├── config/
│   │   ├── siteConfig.ts
│   │   └── navigationConfig.ts
│   ├── contexts/
│   │   ├── ThemeContext.tsx
│   │   └── AuthContext.tsx # Für GemDynamics Auth Client SDK
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── lib/
│   │   ├── gemdynamicsAuthClient.ts # Initialisierung des GemDynamics Auth SDK
│   │   └── coopCorpApiClient.ts    # Konzeptioneller Client für den "Coop/Corp Core Service"
│   ├── router/
│   │   └── AppRouter.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── themes.css
│   │   └── presentation-style.css
│   └── types/
│       └── index.d.ts
├── .env.example # Wird VITE_GEMDYNAMICS_AUTH_URL, VITE_GEMDYNAMICS_CLIENT_ID, VITE_COOPCORP_API_URL etc. enthalten
```
... (Rest der Root-Dateien wie package.json, vite.config.ts etc. basierend auf Ihrer Bereitstellung)
---
:::spoiler Legende zur Ordnerstruktur (v1.2.2)
:::info
1.  `gemdynamics-website/app/account/AccountDashboardPage.tsx`: Zeigt eine zusammenfassende Übersicht der Kontoinformationen, aktive Subscriptions, eine Kurzübersicht des Token-Verbrauchs, eine Liste offener Support-Tickets und aktuelle Benachrichtigungen.
2.  `gemdynamics-website/app/account/components/layout/AccountManagementLayout.tsx`: Stellt das Layout für die `AccountManagementPage` bereit, inklusive des von Ihnen beschriebenen linken Menüs mit den Einträgen: {Profil}, {Subscriptions}, {Usage}, {Accounts}.
3.  `gemdynamics-website/app/account/components/profile/ProfileSettingsView.tsx`: Ermöglicht die Bearbeitung von Profilbild (Upload/Wechsel), Anzeigename, Benutzername, "About Me"-Text sowie die Verwaltung des Passworts (Anzeige als '*****', Umschalt-Button zum Anzeigen, Button zum Ändern des Passworts).
4.  `gemdynamics-website/app/account/components/subscriptions/SubscriptionsView.tsx`: Zeigt Details zur aktuellen Subscription, Optionen zum Kündigen, zum Upgrade auf einen höheren Tier oder zum Wechsel auf das "OneSuite"-Bundle (mit verschiedenen Preisstufen für Solo, Teams, Corporate). Enthält auch Optionen zum Hinzubuchen einzelner Team-Mitglieder-Slots.
5.  `gemdynamics-website/app/account/components/usage/UsageView.tsx`: Bietet eine Übersicht über Pay-as-you-go-Limits und -Kosten sowie das monatliche Tokenvolumen (Admins können hier Limits für Mitglieder zuweisen – diese *Verwaltungsfunktion* wäre eher im Coop/Corp Admin-Tool, hier primär *Anzeige* für den User).
6.  `gemdynamics-website/app/account/components/linked-accounts/LinkedAccountsView.tsx`: Ermöglicht Benutzern das Verknüpfen ihrer Konten von Gmail, GitHub und anderen Diensten, die später als Plugins in "Cortex" (CortexOneSuite) integriert werden.
7.  `gemdynamics-website/src/config/navigationConfig.ts`: Definiert die Einträge für das `TopBarTabMenu`: "Account", "Dynamic Personality", "ApexAnalytics", "CortexOneSuite", "Support".
8.  `gemdynamics-website/src/lib/coopCorpApiClient.ts`: Konzeptioneller Platzhalter für einen API-Client, der mit dem zukünftigen "Coop/Corp Core Service" kommuniziert, um z.B. Subscription-Details, Team-Infos oder Token-Verbrauchsdaten abzurufen, die nicht direkt vom reinen Auth Service kommen.
(Restliche Nummerierung und Kommentare analog zur vorherigen Version `v1.2.1`, angepasst an die obigen Änderungen.)
:::

