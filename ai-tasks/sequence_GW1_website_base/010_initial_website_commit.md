---
title: 010_initial_website_commit

---

010_initial_website_commit

```zllang!
<Task>
    <Objective>
        Anleitung für den Benutzer, alle Änderungen der Sequenz GW1 (Website Grundstruktur, Layout, statische Seiten-Platzhalter) zu committen und zum GitHub Repository zu pushen.
    </Objective>
    <Context>
        Projekt: "GemDynamics Website"
        Folgt auf die erfolgreiche lokale Implementierung aller vorherigen Prompts in Sequenz GW1.
        Das GitHub Repository und die Vercel-Verbindung wurden in Prompt `002_vercel_github_setup.md` vorbereitet.
    </Context>
    <Instructions>
        <PLANSTEP 1 of 1: Änderungen der Website-Grundstruktur committen und pushen>
            <STEP 1 of 3/> **Lokale Änderungen überprüfen**
                * Instruiere den Benutzer: "Wir haben nun das Grundgerüst und die ersten Seiten-Layouts für die 'GemDynamics Website' erstellt. Bitte überprüfen Sie mit `git status` in Ihrem Terminal, ob alle neuen Dateien und Änderungen von Git korrekt erfasst wurden."
                * **PAUSE** und warte auf Benutzerbestätigung (z.B. "Status geprüft, alles ok").

            <STEP 2 of 3/> **Commit erstellen**
                * Instruiere den Benutzer: "Führen Sie nun bitte die folgenden Git-Befehle aus, um alle Änderungen zu committen. Der pre-commit Hook sollte ESLint und Prettier ausführen."
                * Gib die folgenden Befehle als Anleitung:
                    ```bash
                    git add .
                    git commit -m "feat: setup website base structure, layout, and initial page placeholders (GW1)"
                    ```
                * Frage nach Bestätigung: "Bitte bestätigen Sie, wenn der Commit erfolgreich war (inklusive eventueller automatischer Korrekturen durch lint-staged). Sagen Sie 'GW1 Commit erfolgreich'."
                * **PAUSE** und warte auf Bestätigung.

            <STEP 3 of 3/> **Push zum Remote Repository und Vercel Build überprüfen**
                * Instruiere den Benutzer: "Pushen Sie nun diesen Commit zu Ihrem GitHub Repository:"
                * Gib den folgenden Befehl als Anleitung:
                    ```bash
                    git push origin main
                    ```
                * Informiere: "Nach diesem Push sollte Ihr Vercel-Projekt automatisch einen neuen Build und ein Deployment starten. Überprüfen Sie bitte den Build-Status in Ihrem Vercel Dashboard. Die Seite sollte nun das neue Layout und die (noch meist leeren) Seiten anzeigen."
        </Instructions>
    <AcceptanceCriteria>
        - Benutzer hat alle Änderungen der Sequenz GW1 erfolgreich in das GitHub Repository gepusht.
        - Benutzer hat den Vercel Build-Prozess beobachtet und die grundlegende Website ist (mit Platzhaltern) deployt.
    </AcceptanceCriteria>
</Task>
```