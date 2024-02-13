const { app, BrowserWindow, Menu, Tray, ipcMain } = require("electron");
const path = require("path");

let imgPath =
  process.env.NODE_ENV === "development"
    ? "assets/icons.png"
    : path.join(process.resourcesPath, "icons.png");
let tray;

//트레이 아이콘
function initTrayIconMenu() {
  tray = new Tray(imgPath);
  const myMenu = Menu.buildFromTemplate([
    {
      label: "1번",
      type: "normal",
      checked: true,
      click: () => {
        console.log("1번클릭!");
        initTrayIconMenu();
      },
    }, //checked는 기본선택입니다.
    {
      label: "2번",
      type: "normal",
      click: () => {
        console.log("2번클릭!");
      },
    },
    {
      label: "3번",
      type: "normal",
      click: () => {
        console.log("3번클릭!");
      },
    },
  ]);
  tray.setToolTip("트레이 아이콘!");
  tray.setContextMenu(myMenu);
}
function createWindow() {
  // 브라우저 창을 생성
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  //브라우저창이 읽어 올 파일 위치
  win.loadFile("./index.html");
  win.webContents.openDevTools();
  initTrayIconMenu();
}
app.on("ready", createWindow);
