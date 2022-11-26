import React from "react";
import Card from "../Card"
import "./style.css";

export default  ({setPosts}) => {
    console.log("postsData", setPosts.length)
    return <div className="cards-container">
        {setPosts.length>0 ?
            setPosts.map((post) => 
                <Card 
                {...post}
                key={post._id} 
            />):
            <h1 style={{gridColumnEnd: `soan 3`, textAlign: "center"}}>
            Для отображение данных необходимо зайти</h1>
    }
    </div>
}
