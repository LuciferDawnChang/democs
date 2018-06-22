/*
* 组件类模块
*/
import React,{Component} from "react";
import logo from"./logo.svg";
import "./style.css"

export default class App extends Component{
    render(){
        return(
            <div>
                <h2 className="tatle">Applogo</h2>
                <img src={logo} style={{width:200,height:100}} alt=""/>
            </div>
        )
    }
}