// Here we declare the "win" variable on client side
// Since we have nodeIntegration enabled, we can use require
// We use require("electron").remote because its designed to run on renderer process
// which is the client side. Note that we cannot use remote module unless "enableRemoteModule" is true in app options
// BrowserWindow is a class in electron module, it has a static method "getFocusedWindow"
// which gives you current focused window (or simply, the one user is on at the moment)
const win = require("electron").remote.BrowserWindow.getFocusedWindow();

// Since we removed the real titlebar, we no longer have these basic buttons there
// We have to code them manually, though not really too much work.
// Close the window using BrowserWindow#close
const closeWindow = () => win.close();
// Minimize the window using BrowserWindow#minimize
const minimizeWindow = () => win.minimize();
// Now this one checks if the window is already maxmized,
// If it is, then it restores the window to last "un-maxmized" state (BrowserWindow#restore)
// Else it will maximize the window (BrowserWindow#maximize)
const maximizeWindow = () => win.isMaximized() ? win.restore() : win.maximize();