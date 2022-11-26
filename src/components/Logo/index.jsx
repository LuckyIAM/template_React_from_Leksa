import React from "react";
import { FileText, PenFill } from "react-bootstrap-icons";
import "./style.css";

export default () => {

    return <div className="logo">
    <span className="file"><FileText/></span> 
    <span className="pen"><PenFill/></span>
    <h1>Super Blog</h1>
</div>
}