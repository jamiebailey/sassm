const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 500,
        height: 300,
        minWidth: 500,
        minHeight: 300,
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