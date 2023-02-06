import React from "react";
import './styles.css'
import { NavLink } from "react-router-dom";
import { logo } from "../../assets/img";



const Navbar = ( {displayNav }) => {
    return (
        <div>
            {displayNav ?
                <nav>
                    <ul>
                        <li><img src='#' alt="Logo" /></li>
                        <li><NavLink className='home-link' to='/'>Home</NavLink></li>
                        <li><NavLink className='active' to='/shelf'>Shelf</NavLink></li>
                        <li><NavLink className='active' to='/search'>Search</NavLink></li>
                        <li><NavLink className='active' to='/settings'>Settings</NavLink></li>
                        <li><NavLink className='active' to='/logout'>Logout</NavLink></li>
                    </ul>
                </nav>
            : 
                <div></div>
            }
        </div>
    )
};

export default Navbar;