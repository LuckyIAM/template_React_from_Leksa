import React from "react";
import "./style.css";


export default ({token, openPopup}) =>{
    
    const stImg = {
        width: "100vw",
        height: "300px",
        background: "no-repeat centre/cover",
        backgroundImage: "url(../../assets/typing_hand.jpg)",
        
    }
    return<>
        {!token && <div className="banner" >
            <div className="header_image" style={stImg} ></div>
            <div className="message">
                Пожайлуста <span onClick={e =>{openPopup(true)}}>войдите</span>,<br/>чтобы получить доступ к своим постам
            </div>
        </div>}
    
    </>    
}