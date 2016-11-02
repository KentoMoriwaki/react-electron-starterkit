const electron = require('electron');
const loadDevtool = require('electron-load-devtool');
const path = require('path')
const url = require('url')

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL(url.format({
    pathname: 'index.html',
    protocol: 'http',
    host: 'localhost:3000',
    slashes: true,
  }));

  loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS, loadDevtool.REDUX_DEVTOOLS);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
