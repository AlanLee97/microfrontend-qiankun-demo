import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RouterView from "./util/router/RouterView";
import render from "./render/render";
import {registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start} from "qiankun";

// ReactDOM.render(
//   <React.StrictMode>
//     <RouterView />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



/**
 * Step1 初始化应用（可选）
 */
render({loading: true});
const loader = loading => render({loading});


/**
 * Step2 注册子应用
 */
let apps = [
  {
    name: "react-app",
    entry: '//localhost:3001',
    container: '#subapp-viewport',
    loader,
    activeRule: '/react-app'
  },
  {
    name: "vue-app",
    entry: '//localhost:3002',
    container: '#subapp-viewport',
    loader,
    activeRule: '/vue-app'
  }
];
let lifeCycles = {
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
};
registerMicroApps(apps, lifeCycles);

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('react-app');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});


serviceWorker.unregister();
