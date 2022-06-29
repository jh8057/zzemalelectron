const { app, BrowserWindow, Tray, ipcMain } = require("electron");
const path = require("path");

let imgPath =
  process.env.NODE_ENV === "development"
    ? "assets/icons.png"
    : path.join(process.resourcesPath, "icons.png");
let tray;
let window;

// mac doc(하단바)에서 안보이게 하는 옵션
app.dock.hide();
//트레이 아이콘
const toggleWindow = () => {
  window.isVisible() ? window.hide() : showWindow();
};

const showWindow = () => {
  const position = getWindowPosition();
  window.setPosition(position.x, position.y, false);
  window.show();
};

const getWindowPosition = () => {
  const windowBounds = window.getBounds();
  const trayBounds = tray.getBounds();

  // center
  const x = Math.round(
    trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
  );

  const y = Math.round(trayBounds.y + trayBounds.height + 4);

  return { x, y };
};

function initTrayIconMenu() {
  tray = new Tray(imgPath);
  tray.on("click", function (event) {
    toggleWindow();
  });
  // const myMenu = Menu.buildFromTemplate([
  //   {
  //     label: "1번",
  //     type: "normal",
  //     checked: true,
  //     click: () => {
  //       console.log("1번클릭!");
  //       initTrayIconMenu();
  //     },
  //   }, //checked는 기본선택입니다.
  //   {
  //     label: "2번",
  //     type: "normal",
  //     click: () => {
  //       console.log("2번클릭!");
  //     },
  //   },
  //   {
  //     label: "3번",
  //     type: "normal",
  //     click: () => {
  //       console.log("3번클릭!");
  //     },
  //   },
  // ]);
  // tray.setToolTip("트레이 아이콘!");
  // tray.setContextMenu(myMenu);
}

function createWindow() {
  // 브라우저 창을 생성
  window = new BrowserWindow({
    width: 320,
    height: 450,

    webPreferences: {
      // nodeIntegration: true,
      backgroundThrottling: false,
    },

    //안보이게하는거?
    show: false,
    frame: false,
    fullscreen: false,
    resizable: false,
    transparent: false,
  });

  // //브라우저창이 읽어 올 파일 위치
  window.loadURL(`file://${path.join(__dirname, "index.html")}`);
  //개발자도구(F12)
  // window.webContents.openDevTools();

  window.on("blur", () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide();
    }
  });
}

app.on("ready", () => {
  createWindow();
  initTrayIconMenu();
});

// ipcMain.on("show-window", () => {
//   showWindow();
// });
