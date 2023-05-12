import React from "react"
import { Link , Outlet} from "react-router-dom";

function Products() {
    
    return (
        <>
            <center> 
                <h3> Products Page </h3>
                <input type="text" placeholder="search Product" />
                <nav className="product-link">
                    <Link to='featured' > 
                        Featured Products list
                    </Link> 
                    <Link to='new' >
                        New Products list
                    </Link>
                </nav>
                <Outlet/>
            </center>
        </>
    )
}
export default Products;