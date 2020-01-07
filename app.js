const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 720,
        height: 480,
        minWidth: 720,
        minHeight: 480,
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