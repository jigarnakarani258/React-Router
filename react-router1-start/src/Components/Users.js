import React from "react"
import { Link, Outlet } from "react-router-dom";

const usersData = [
    {
        user_id: 1,
        name: 'Jigar Nakarani'
    },
    {
        user_id: 2,
        name: 'Mr.jigs Patel'
    },
    {
        user_id: 3,
        name: 'JD'
    }
]

function Users() {

    return (
        <>
            <nav className="product-link">
                    <Link to='admin' > 
                        Admin
                    </Link> 
                    
            </nav>
            <Outlet/>
            <center>   
                <ul>
                <h2> Users Details </h2>
                    {
                        usersData.map((user) => {
                           return <p key={user.id}> {user.name} </p>
                        })
                    }
                </ul>
            </center>
        </>
    )
}
export default Users;