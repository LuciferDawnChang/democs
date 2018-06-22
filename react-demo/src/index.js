/*
* 入口js
*/
// 引入react主模块(使用虚拟DOM可减少重绘重排和即时更新)
import React from "react";
// react-dom用于渲染虚拟dom到实际页面中
import ReactDOM from "react-dom";
//自己写的组件，用来创建虚拟DOM
import App from "./components/app/app";

ReactDOM.render(<App/>,document.getElementById("root"));