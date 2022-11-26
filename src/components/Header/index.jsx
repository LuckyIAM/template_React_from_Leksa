import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { BoxArrowInRight, BoxArrowInLeft,Journal, FileEarmarkPlus, Person} from "react-bootstrap-icons";
import Logo from "../Logo";
import Modal from "../Modal";
import "./style.css";



export default({openPopup, user, setToken, setUser}) => {
    const [searchInfo, setSearchInfo] = useState();
    const logout = () => {
        localStorage.removeItem("token-blog");
        localStorage.removeItem("user-data")
        setToken('');
        setUser({})
    }
    const handler = (e) => {
        setSearchInfo(e.target.value);
        const result = products.filter(el => el.name)
    }

    // const stBg={
    //     backgroundImage: `url(./src/assets/resource/typing_hands.jpeg)`
    // }
    const stIcon = {
        fontSize: "23px",
        color: "#000",
        fontWeight: 800,
        margin: " 0px 5px"

    }

    return<>
        <header>
            <div className="wrapper__header">
                <Logo/>
                {user && <input type="text" style={{borderRadius: "5px", border: "none", width: "30vw"}} />}
                <nav >
                    {user && <a style={stIcon} href=""><Journal/></a>}
                    {user && <a style={stIcon} href=""><FileEarmarkPlus/></a>}
                    {user && <a style={stIcon} href=""><Person/></a>}
                    {user && <div className="login"><BoxArrowInLeft onClick={logout}/></div>}
                    {!user && <div className="login"><BoxArrowInRight onClick={e => {openPopup(true)}}/></div>}
                </nav>
            </div>
            
            {/* {!user && <div className="message">
                Пожайлуста <span onClick={e =>{openPopup(true)}}>войдите</span>,<br/>чтобы получить доступ к своим постам
            </div>} */}


        </header>
    </>
}