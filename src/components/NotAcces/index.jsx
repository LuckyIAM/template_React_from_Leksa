import React, {useState} from "react";
import { XCircleFill } from "react-bootstrap-icons";
import "./style.css"

export default ({warning, notWarning}) => {
    
    const closeWarning = {
        position: "absolute",
        right: "10px",
        top: "10px",
        cursor: "pointer",
        color: "#05647a"
    }
    console.log("warning",warning);
    return(
        <div className={warning ? "warning-container open" : "warning-container"}>
            <XCircleFill style={closeWarning}  onClick={ e => {notWarning(false)}} />
            <p><span className="text-warning">Не правильно ввели логин или пароль!</span> <br/>
            ИЛИ<br/>
            <span className="text-warning">У вас нет доступа!</span></p>
        </div>
        )
}