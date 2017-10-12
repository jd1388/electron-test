const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

app.on('ready', () => {
    mainWindow= new BrowserWindow({
        height: 400,
        width: 400
    });

    mainWindow.loadURL(`http://localhost:8080/index.html`);
})
