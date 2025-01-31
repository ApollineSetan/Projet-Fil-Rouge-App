npmconst { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Crée une fenêtre de navigation.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Charge l'URL de développement de Vite.
  mainWindow.loadURL("http://localhost:5173");

  // Ouvre les outils de développement.
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
