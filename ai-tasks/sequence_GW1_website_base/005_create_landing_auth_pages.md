---
title: 005_create_landing_auth_pages

---

005_create_landing_auth_pages

```zllang!
<Task>
    <Objective>
        Erstelle die grundlegenden Seitenkomponenten für Landing (`LandingPage.tsx`), Sign-In (`LandingSignInPage.tsx`) und Sign-Up (`LandingSignUpPage.tsx`), inklusive `AuthForm.tsx` und `HeroSectionLanding.tsx`. Richte die entsprechenden Routen ein.
    </Objective>
    <Context>
        Projekt: "GemDynamics Website"
        Codebasis: Gemäß `gemdynamics_website_codebase_structure.md (v1.2.2)`
        Design-Richtlinien: `design-system-guidelines.md` (Haupt-Design-System).
        Routing: `src/router/AppRouter.tsx` wird erweitert.
        Ziel: UI-Platzhalter für Auth-Funktionen, keine Backend-Logik in diesem Schritt.
    </Context>
    <Instructions>
        <PLANSTEP 1 of 1: Landing- und Auth-Seiten UI erstellen>
            <STEP 1 of 5/> **Erstelle `app/landing/components/HeroSectionLanding.tsx`**
                * Komponente für den Hero-Bereich der `LandingPage.tsx`.
                * Enthält einen überzeugenden Haupttitel, Untertitel und einen Call-to-Action Button (z.B. "Get Started", der zu `/signup` führt).
                * Design gemäß Haupt-Design-System (episch, modern).
                * Tool: `edit_file`

            <STEP 2 of 5/> **Erstelle `app/landing/components/AuthForm.tsx`**
                * Wiederverwendbare UI-Komponente für Login- und Registrierungsformulare.
                * Props: `formType: 'signIn' | 'signUp'`, `onSubmit: (data) => void`.
                * UI-Felder (mit `InputField.tsx`): E-Mail, Passwort. Für 'signUp': Passwort bestätigen, ggf. Anzeigename.
                * Submit-Button (Label je nach `formType`).
                * Vorerst nur `console.log(data)` im `onSubmit`.
                * Design gemäß Haupt-Design-System.
                * Tool: `edit_file`

            <STEP 3 of 5/> **Erstelle `app/landing/LandingPage.tsx`**
                * Haupt-Landingpage, erreichbar unter `/`.
                * Integriert `HeroSectionLanding.tsx`.
                * Kann Platzhalter für weitere Sektionen enthalten (Features, Vorteile etc.).
                * Tool: `edit_file`

            <STEP 4 of 5/> **Erstelle `app/landing/LandingSignInPage.tsx` und `app/landing/LandingSignUpPage.tsx`**
                * `LandingSignInPage.tsx`: Rendert `AuthForm` mit `formType='signIn'`. Titel "Sign In". Link zu `/signup`.
                * `LandingSignUpPage.tsx`: Rendert `AuthForm` mit `formType='signUp'`. Titel "Sign Up". Link zu `/signin`.
                * Beide Seiten sollten zentriert und ansprechend gestaltet sein.
                * Tool: `edit_file`

            <STEP 5 of 5/> **Aktualisiere `src/router/AppRouter.tsx`**
                * Definiere Routen:
                    * `/` -> `LandingPage.tsx`
                    * `/signin` -> `LandingSignInPage.tsx`
                    * `/signup` -> `LandingSignUpPage.tsx`
                * Ersetze den vorherigen Platzhalter für `/` in `AppRouter.tsx`.
                * Tool: `edit_file`
        </Instructions>
    <AcceptanceCriteria>
        - `HeroSectionLanding.tsx` und `AuthForm.tsx` sind als UI-Komponenten erstellt.
        - `LandingPage.tsx`, `LandingSignInPage.tsx` und `LandingSignUpPage.tsx` sind erstellt.
        - Die Routen `/`, `/signin`, `/signup` sind korrekt definiert und rendern die Seiten innerhalb des `MainLayout`.
        - Das UI entspricht dem Haupt-Design-System.
    </AcceptanceCriteria>
</Task>
```