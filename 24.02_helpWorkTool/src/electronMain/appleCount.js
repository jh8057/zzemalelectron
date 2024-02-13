const { ipcMain, webContents } = require("electron");
const path = require("path");
module.exports = function appleCount() {
  let apples = 10;

  ipcMain.on("reqCount", (e) => {
    e.reply("count", apples);
  });
  ipcMain.on("reqSteal", (e) => {
    apples--;
    e.reply("count", apples); // count 이벤트로 응답을 보낸다
  });
  ipcMain.on("reqBroadcast", (e) => {
    const contents = webContents.getAllWebContents();
    for (const c of contents) c.send("count", apples);
  });
};
