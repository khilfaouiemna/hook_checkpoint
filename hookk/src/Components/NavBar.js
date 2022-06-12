
import React from 'react'

import {Link} from 'react-router-dom'
import  './NavBar.css';

const NavBar = () => {
    return (
        <div id="nav-bar">
           
            <Link className="navv" to='/'>
                <h3>Home</h3></Link>
            <Link className="navv" to='/MovieList'>
                <h3>Movies</h3></Link>
        </div>
    )
}

export default NavBar