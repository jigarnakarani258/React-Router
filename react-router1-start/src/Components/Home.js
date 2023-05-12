import React from "react"
import { useNavigate } from "react-router-dom";

function Home() {

    const navigateOredrSummary = useNavigate();

    return (
        <h1>
            <center> 
                <h3> Home Page </h3>
                <button onClick={() => { navigateOredrSummary('/order-summary') } } >
                    Place Order 
                </button>
            </center>
        </h1>
    )
}
export default Home;