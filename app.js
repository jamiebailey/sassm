const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 1200,
        height: 600,
        minWidth: 1000,
        minHeight: 600,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');

    win.removeMenu();
    win.webContents.openDevTools();

    win.on('closed', () => {
        win= null
    })

});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})