---
title: 002_vercel_github_setup

---

002_vercel_github_setup

```zzlang!
<Task>
    <Objective>
        Anleitung für den Benutzer zur Einrichtung des Vercel-Projekts und dessen Verknüpfung mit dem bestehenden GitHub-Repository für die "GemDynamics Website".
    </Objective>
    <Context>
        Projekt: "GemDynamics Website"
        GitHub-Repository existiert bereits und wurde lokal vorbereitet (Prompt 001).
        Deployment-Ziel: Vercel.
        Dies ist ein instruktionaler Prompt, der Benutzeraktionen erfordert (`<Phase7_ConditionalPausesForUserAction>`).
    </Context>
    <Instructions>
        <PLANSTEP 1 of 1: Vercel und GitHub für Deployment einrichten>
            <STEP 1 of 3/> **Vercel Projekt erstellen und mit GitHub verbinden**
                * Informiere den Benutzer: "Wir richten nun Vercel für das Deployment Ihrer 'GemDynamics Website' ein."
                * Anleitung:
                    1. "Gehen Sie zu Ihrem Vercel Dashboard."
                    2. "Erstellen Sie ein neues Projekt ('Add New...' -> 'Project')."
                    3. "Importieren Sie Ihr bestehendes GitHub-Repository für die 'GemDynamics Website'."
                    4. "Vercel sollte 'Vite' als Framework automatisch erkennen. Überprüfen Sie die Build- und Output-Einstellungen:"
                        * "Build Command: `pnpm build` (oder `vite build` falls `pnpm build` nicht direkt in `package.json` definiert ist, aber `vite build` ist Standard und in Ihrer `vercel.json` als `vite build && vite build --ssr src/entry-server.tsx` angegeben - klären ob SSR jetzt schon relevant ist oder einfaches `vite build` reicht. Fürs erste: `vite build`)"
                        * "Output Directory: `dist`"
                        * "Install Command: `pnpm install`"
                        * "Root Directory: Sollte das Stammverzeichnis Ihres Repos sein."
                * Frage nach Bestätigung: "Bitte bestätigen Sie, wenn Ihr Vercel-Projekt erstellt und mit dem korrekten GitHub-Repository verbunden ist. Sagen Sie 'Vercel Projekt erstellt'."
                * **PAUSE** und warte auf Bestätigung.

            <STEP 2 of 3/> **Umgebungsvariablen in Vercel konfigurieren**
                * Informiere den Benutzer: "Für die spätere Nutzung des GemDynamics Auth Service und anderer Dienste müssen wir Umgebungsvariablen in Vercel setzen."
                * Anleitung:
                    1. "Gehen Sie in die Einstellungen Ihres Vercel-Projekts zum Abschnitt 'Environment Variables'."
                    2. "Fügen Sie vorerst folgende Variablen hinzu (die Werte erhalten Sie später oder aus Ihrem `.env.local`):"
                        * `VITE_GEMDYNAMICS_SERVICE_URL` (Wert: Platzhalter oder leer, wird später gesetzt)
                        * `VITE_GEMDYNAMICS_CLIENT_ID` (Wert: Platzhalter oder leer, wird später gesetzt)
                        * `VITE_COOPCORP_API_URL` (Wert: Platzhalter oder leer, wird später gesetzt)
                * Frage nach Bestätigung: "Bitte bestätigen Sie, wenn Sie die Platzhalter für die Umgebungsvariablen in Vercel angelegt haben. Sagen Sie 'Vercel Env Vars bereit'."
                * **PAUSE** und warte auf Bestätigung.

            <STEP 3 of 3/> **Initialen Push zum GitHub Repository (falls noch nicht geschehen für vorbereitete Struktur)**
                * Instruiere den Benutzer: "Wenn Sie im vorherigen Schritt (`001_project_init_and_repo_setup.md`) noch keinen initialen Commit mit der Grundstruktur zum Remote-Repository gepusht haben, tun Sie dies bitte jetzt. Wenn Vercel korrekt mit GitHub verbunden ist, sollte dies automatisch einen ersten Build und ein Deployment auf Vercel auslösen."
                * Befehl als Anleitung (falls notwendig):
                    ```bash
                    # git add . (falls noch nicht alle Änderungen gestaged sind)
                    # git commit -m "chore: initial project setup for GemDynamics Website" (oder spezifischere Nachricht)
                    git push origin main
                    ```
                * Frage nach Bestätigung: "Bitte bestätigen Sie, dass der Code auf GitHub ist und Vercel einen ersten Build (ggf. erfolgreich oder mit erwarteten Fehlern aufgrund fehlender Seiten) gestartet hat. Sagen Sie 'Initial Push erfolgt und Vercel Build gestartet'."
                * **PAUSE** und warte auf Bestätigung.
        </Instructions>
    <AcceptanceCriteria>
        - Benutzer hat bestätigt, dass ein Vercel-Projekt erstellt und mit dem GitHub-Repo der "GemDynamics Website" verbunden ist.
        - Benutzer hat bestätigt, dass Platzhalter-Umgebungsvariablen in Vercel angelegt wurden.
        - Benutzer hat bestätigt, dass der initiale Code (mindestens die Projektdateien aus dem Repo-Upload und die Anpassungen aus Prompt 001) auf GitHub gepusht wurde und Vercel einen Build-Prozess gestartet hat.
    </AcceptanceCriteria>
</Task>

```