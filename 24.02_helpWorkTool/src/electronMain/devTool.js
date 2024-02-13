const { ipcMain, webContents } = require("electron");

module.exports = function devTool(win) {
  ipcMain.on("toggle-debug", (event, arg) => {
    //디버기 툴 토글(on/off)
    win.webContents.toggleDevTools();
  });
  ipcMain.on("refresh", (event, arg) => {
    //페이지 갱신
    win.reload();
  });
};
