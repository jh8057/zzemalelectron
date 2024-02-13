const { app, BrowserWindow, ipcMain, webContents } = require("electron");
const path = require("path");

// const appleCount = require("./src/electronMain/appleCount");
const devTool = require("./src/electronMain/devTool");

let win;
const createWindow = () => {
  // 브라우저 창 설정
  const options = {
    // 창 크기
    width: 400,
    height: 400,

    // 전처리
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  };
  // 창을 여러개 띄울 수 있다
  win = new BrowserWindow(options);
  // const second = new BrowserWindow(options);

  win.loadFile("index.html");
  // second.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  /** src */
  // appleCount();
  devTool(win);

  // 창 띄우기
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 창 닫기
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
