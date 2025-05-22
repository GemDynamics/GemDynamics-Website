// preload.js
// Ein Skript, das vor dem Laden der Webseite ausgeführt wird.

// Hier können wir die Node.js API mit der Renderer-Webseite verbinden.

const { contextBridge, ipcRenderer } = require('electron')

// Exponiert geschützte Methoden, die einen sicheren Kanal zwischen 
// Renderer-Prozess und Hauptprozess ermöglichen
contextBridge.exposeInMainWorld(
  'electron', 
  {
    app: {
      getName: () => ipcRenderer.invoke('app:getName'),
      getVersion: () => ipcRenderer.invoke('app:getVersion')
    },
    // Füge später weitere APIs hinzu, wenn benötigt
  }
) 