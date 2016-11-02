const electron = require('electron');
const loadDevtool = require('electron-load-devtool');
const path = require('path')
const url = require('url')

const { app, ipcMain, BrowserWindow, Menu } = electron;

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL(url.format({
    pathname: 'index.html',
    protocol: 'http',
    host: 'localhost:3000',
    slashes: true,
  }));

  Promise.all([
    loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS),
    loadDevtool(loadDevtool.REDUX_DEVTOOLS),
  ]).then(() => {
    mainWindow.webContents.openDevTools();
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  ipcMain.on('update-menu', function(e, template) {
    template.forEach((menu, i) => {
      menu.submenu.forEach((submenu, i) => {
        submenu.click = (item, focusedWindow) => {
          focusedWindow.webContents.send('store-dispatch', submenu.action);
        };
      });
    });
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
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
