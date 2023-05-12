import React from "react"
import { NavLink } from "react-router-dom";

function NavigationBar() {

    const NavActiveLinkStyle = ( {isActive}) => {
        return (
            {
                fontWeghit : isActive ? 'bold' : 'normal' ,
                textDecoration : isActive ? 'none' : 'underline',
                color : isActive ? 'blue' : 'black'
            }
        )
    }

    return (
        <nav className="primary-nav">
            <h3> Sample React App </h3>
            <NavLink to='/' style={NavActiveLinkStyle} > Home </NavLink>
            <NavLink to='/about' style={NavActiveLinkStyle} > About </NavLink>
            <NavLink to='/products' style={NavActiveLinkStyle} > Products </NavLink>
            <NavLink to='/users' style={NavActiveLinkStyle} > Users </NavLink>
        </nav>
    )
}
export default NavigationBar;