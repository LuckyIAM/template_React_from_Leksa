import React,{useState, useEffect} from "react";
import {Form, Button } from "react-bootstrap";
import { XCircleFill } from "react-bootstrap-icons";
import NotAcces from "../NotAcces";
import "./style.css";


export default ({isActive, changeActive, setToken, setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [openWarning, updateWarning] = useState(false);
    

    
    const signInData = (e) => {
        e.preventDefault();
        return fetch("https://api.react-learning.ru/signin", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify({"email": email, "password": password})
        })
            .then(result => result.json())
            .then(data => {
                console.log(data)
                if(data.token && !localStorage.getItem("token-blog")){
                    localStorage.setItem("token-blog", data.token);
                    localStorage.setItem("user-data", JSON.stringify(data.data))
                    setToken(data.token);
                    setUser(data.data)
                    changeActive(false);
                }else if(!data.token){
                    changeActive(false);
                    updateWarning(true);
                    <NotAcces warning={updateWarning} notWarning={updateWarning} />
                }
                
            })
        
    }
    console.log("openWarning",openWarning);
    const closePopup = {
        position: "absolute",
        right: "5px",
        top: "5px",
        cursor: "pointer",
        color: "#05647a"
    }
    const stInput= {
        borderRadius: "10px",
        padding: "5px 10px",
        margin: "5px",
        width: "80%"
    }
    const stBtnlogIn = {
        backgroundColor: "#05647a",
        color: "#fff",
        border: "none"
    }
    const stBtnSignIn = {
        backgroundColor: "#fff",
    }
    return(
        <div className={isActive ? "popup active" : "popup"}>
            <div className="popupBox">
                <XCircleFill className="close-popup" style={closePopup} 
                onClick={e => {changeActive(false)}}
                />
                <Form onSubmit={signInData}>
                    <Form.Group>
                        <h2>Войти</h2>
                        <Form.Control
                        type="email"
                        value={email}
                        placeholder="логин"
                        onChange = {e => setEmail(e.target.value)}
                        style={stInput}/>
                        <Form.Control
                        type="password"
                        value={password}
                        placeholder="пароль"
                        onChange = {e => setPassword(e.target.value)}
                        style={stInput}
                        />
                        <div className="button-logIn btn"><Button type="submit" style={stBtnlogIn} >Зарегистрироваться</Button></div>
                        <div className="button-signIn btn" ><Button type="submit" style={stBtnSignIn}>Войти</Button></div>
                         
                    </Form.Group>
                </Form>
                
            </div>
            
        </div>
    )
}