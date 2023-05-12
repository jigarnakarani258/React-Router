import { useNavigate } from "react-router-dom";

function OrderSummary() {

    const navigateHomePage = useNavigate();
    return(
        <>
            <center>
                <h3> Order Confirmed Sir.. </h3>
                <button onClick={ () => navigateHomePage('/') } > Go to Home </button>
            </center>
        </>
    )
}

export default OrderSummary;