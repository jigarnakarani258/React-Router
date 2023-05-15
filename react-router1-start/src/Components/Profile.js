import React from "react"
import { useAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";

function Profile() {

    const auth = useAuth();
    const navigate = useNavigate();

    const LogoutHandlar = () => {
        auth.logout();
        navigate('/')
    }
    return (
        <>
            <center>
                <h3> Welcome {auth.user} </h3>
                <button onClick={() => {LogoutHandlar()}}> Logout </button>
            </center>

        </>
    )
}
export default Profile;