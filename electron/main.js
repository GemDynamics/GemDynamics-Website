const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

// Behalte eine globale Referenz auf das Fensterobjekt.
// Wenn du dies nicht tust, wird das Fenster automatisch geschlossen,
// sobald das Objekt dem JavaScript Garbage Collector übergeben wird.
let mainWindow

function createWindow() {
  // Erstelle das Browser-Fenster
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  // Lade die index.html der App
  mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))

  // Öffne DevTools beim Start
  // mainWindow.webContents.openDevTools()

  // Wird aufgerufen, wenn das Fenster geschlossen wird
  mainWindow.on('closed', function() {
    // Dereferenziere das Fensterobjekt, normalerweise würdest du Fenster
    // in einem Array speichern, wenn deine App mehrere Fenster unterstützt.
    // Das ist der Zeitpunkt, an dem du das zugehörige Element löschen solltest.
    mainWindow = null
  })
}

// IPC-Handler für App-APIs
ipcMain.handle('app:getName', () => {
  return app.getName()
})

ipcMain.handle('app:getVersion', () => {
  return app.getVersion()
})

// Diese Methode wird aufgerufen, wenn Electron die Initialisierung
// abgeschlossen hat und bereit ist, einen Browser zu erstellen.
// Einige APIs können nur nach dem Auftreten dieses Events genutzt werden.
app.on('ready', createWindow)

// Beende die App, wenn alle Fenster geschlossen sind.
app.on('window-all-closed', function() {
  // Unter macOS ist es üblich, dass Anwendungen und ihre Menüleiste
  // aktiv bleiben, bis der Nutzer explizit mit Cmd + Q die App beendet.
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
  // Unter macOS ist es üblich, ein neues Fenster der App zu erstellen, wenn
  // das Dock-Icon angeklickt wird und keine anderen Fenster offen sind.
  if (mainWindow === null) createWindow()
}) 