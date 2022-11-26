import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Api from "./Api";
import NotAcces from "./components/NotAcces";
import Posts from "./components/Posts";
import Banner from "./components/Banner"

export default () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token-blog"));
    const [api, setApi] = useState(new Api(token));
    const [user, setUser] = useState(JSON.stringify(localStorage.getItem("user-data")))
    const [popupActive, changePopupActive] = useState(false);
  

    useEffect(() =>{
        console.log("Change token", token);
        setApi(new Api(token));
    }, [token])
        

    useEffect(() =>{
        api.getPosts()
            .then(result => result.json())
            .then(data => {
                setPosts(data)

            })
    },[user])



    console.log("setUser", user, "\nposts", posts);
    return <>
        <Header openPopup={changePopupActive} user={!!token} setToken={setToken} setUser={setUser}/>
        <Banner token={token} openPopup={changePopupActive}/>
        <Modal isActive={popupActive} changeActive={changePopupActive} setToken={setToken} setUser={setUser}/>
        {!!token && <Posts setPosts={posts} />}
        <NotAcces/>
        
    </>
}
