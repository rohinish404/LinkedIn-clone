
import { Profiler, useState } from "react";
import "./Login.css"
import {auth} from "./firebase.js"


export default function Login(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const logInToApp=(e)=>{
        e.preventDefault();


    }
    const register=()=>{
        if(!name){
            return alert("Enter full name please!!")
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL: ProfilePic,
            })
        })
    }
    return(
        <div className="login">
            <img className="linkedin__logo" src="Linkedin_logo.png" alt="linkedin logo"/>

            <form>
                <input placeholder="Full Name(required if registering)" type="text" value={name} onChange={(e)=> setName(e.target.value)}/>

                <input placeholder="profile pic URL(optional)" type="text" />

                <input placeholder="Email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>

                <input placeholder="Password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

                <button onClick={logInToApp} className="submit_btn" type="submit">Sign In</button>
            </form>
            <p>Not a member <span className="register_new" onClick={register}>Register Here!</span>
            </p>
        </div>
    )
}