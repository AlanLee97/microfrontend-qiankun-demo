# 微前端 qiankun demo
| 目录      | 类型   | 技术桟 | 创建方式         | 端口 |
| --------- | ------ | ------ | ---------------- | ---- |
| main-app  | 主应用 | react  | react-create-app | 3000 |
| react-app | 微应用 | react  | react-create-app | 3001 |
| vue-app   | 微应用 | vue    | vue-cli          | 3002 |



## 启动应用

先启动各个微应用，最后启动主应用



启动react-app

```shell
cd ./react-app
npm run start
```



启动vue-app

```shell
cd ../vue-app
npm run dev
```



启动main-app

```shell
cd ../main-app
npm run serve
```



## 应用截图

![微信截图_20201018233543](https://gitee.com/AlanLee97/assert/raw/master/note_images/微信截图_20201018233543.png)

![微信截图_20201018232833](https://gitee.com/AlanLee97/assert/raw/master/note_images/微信截图_20201018232833-1603034959697.png)