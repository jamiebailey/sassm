const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('app.html');

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