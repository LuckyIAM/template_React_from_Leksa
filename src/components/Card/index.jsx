import React from "react";
import { Heart, HeartFill, ChatDots } from "react-bootstrap-icons";
import "./style.css";

const Card = ({image, title, text, updated_at}) => {
    const card_box = {
        width: "300px",
        height: "150px",
        boxShadow: "0 0 5px 0 #888",
        borderRadius: "5px"
    }
    const stImage={
        background: "no-repeat center/contain",
        backgroundImage: `url(${image})`,
        height: "90px",
        margin: "7px",
    }
    const card__top = {
        display: "grid",
        gridTemplateColumns: "100px 200px",
        margin: "7px"
    }
    const right_side ={
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "10px"
    }
    
    const card__bottom = {
        display: "flex",
        gap: "7px",
        margin: "10px"
    }
    const stSpan ={
        fontSize: "16px",
        fontWeight: 800,
        
    }

    return(
        <div className="card-box" style={card_box}>
            <div className="card__top" style={card__top}>
                <div className="left-side" style={stImage}></div>
                <div className="right-side" style={right_side}>
                    <div className="card-title"><span style={stSpan}>{title}</span></div>
                    <div className="card-text">{text}</div>
                </div>
            </div>
            <div className="card__bottom" style={card__bottom}>
                <div className="like"><Heart/></div>
                <div className="message"><ChatDots/></div>
                <div className="date">{updated_at.slice(0,10)}</div>

            </div>
        </div>
    )
}

export default Card;