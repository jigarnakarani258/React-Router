import React from "react"
import { useParams, useSearchParams } from "react-router-dom";

const usersData = [
    {
        user_id: 1,
        name: 'Jigar Nakarani',
        age:23
    },
    {
        user_id: 2,
        name: 'Mr.jigs Patel',
        age:22
    },
    {
        user_id: 3,
        name: 'JD',
        age: 10
    }
]

function UserDetail() {

    const { user_id } = useParams();
    const [serchParams , setSearchParams] = useSearchParams();

    const activeUsersFlag = serchParams.get('filter') === 'active'
    
    let result ;
    usersData.map((user) => {
        if (user.user_id == user_id) {
            result = user
        }
    })

    return (
        <>
            <center>
                <h2> Dyanamic user data of user_id = {user_id} </h2>
                {
                    result  
                        ? `${result.name} is ${result.age} year old`  
                        : `No Data Availabe of given user_id ${user_id}`
                }
            </center>

            <div>
                Show user data status(active) wise
                <button onClick={ () => { setSearchParams( {filter: 'active'} ) }}> Active Users </button>
                <button onClick={ () => { setSearchParams() }}> Reset Filter </button>
            </div>
            <div>
                { 
                    activeUsersFlag ? 'Active Users' : 'All Users'
                }
            </div>
        </>
    )
}
export default UserDetail;