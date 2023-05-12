import React from "react"
import { useNavigate } from "react-router-dom";

function Home() {

    const navigateOredrSummary = useNavigate();

    return (
        <>
            <center> 
                <h3> Home Page </h3>
                <button onClick={() => { navigateOredrSummary('/order-summary') } } >
                    Place Order 
                </button>
            </center>
        </>
    )
}
export default Home;