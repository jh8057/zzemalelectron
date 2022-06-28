# ELECTRON (with. html,js)

- electron을 통해 데스크탑용 앱을 만들고, 나만의 tray를 만들고 싶어서 시작한다.

## TODO

1. tray
2. splite3

## tray

- [reference site](https://medium.com/@nahoc/lets-build-a-system-tray-cryptocurrency-tracker-for-mac-using-electron-part-1-7888747891b)

## github action

- [npm ci](https://mygumi.tistory.com/409)

## build opiton

- 이미지는 build할 extrafile로 명시해줘야되고, 해당 경로를 통해 접근을 해야된다.

```
"build": {
    "productName": "HelloElectron",
    "appId": "com.electron.hello",
    "asar": true,
    "protocols" : {
        "name" : "helloElectron",
        "schemes" : ["helloelectron"]
    },
    "mac": {
      "target": [
        "default"
      ],
      "icon": "./icon3.png"
    },
    "dmg": {
      "title": "HelloElectron",
      "icon": "./icon3.png"
    },
    "win": {
      "target": [
        "zip",
        "nsis"
      ],
      "icon": "./icon3.png"
    },
    "linux": {
      "target": [
        "AppImage",
        "deb",
        "rpm",
        "zip",
        "tar.gz"
      ],
      "icon":  "./icon3.png"
    },
    "nsis":{
      "oneClick" : false,
      "allowToChangeInstallationDirectory" :true
    },
    "directories": {
      "buildResources": "resources/installer/",
      "output": "dist/",
      "app": "."
    }
  }
```
