import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authentication";


function Login() {

    const [user, setUser] = useState('') ;

    const auth = useAuth() ;

    const navigate = useNavigate();

    const LoginHandlar = () => {
        auth.login(user) ;
        navigate('/profile' , {replace : true}) 
    }

    return (
        <>
            <center>
                <h3> Login Page </h3>
                <label>
                    Username:- <input
                        type="text"
                        placeholder="username"
                        onChange={(event) => setUser(event.target.value)}
                    ></input>
                </label>
                <button onClick={() => {LoginHandlar()}}> Login </button>
            </center>

        </>
    )
}
export default Login;