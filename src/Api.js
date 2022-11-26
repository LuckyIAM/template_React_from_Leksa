class Api{
    constructor(tkn){
        this.token = tkn;
        this.path = "https://api.react-learning.ru/";
    }
    getPosts(){
        return fetch(`${this.path}v2/group-7/posts`,{
            headers:{
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            }
        })
    }
    signIn(body){
        return fetch(`${this.path}signin`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify(body)
        })
    }
}

export default Api;