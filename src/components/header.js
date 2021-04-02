import React from 'react'
import { Link } from 'gatsby'
import "../styles/header.css"


const Header = () => {
    return(
        <header>
        <div className="headertitle">
        <h1 className="name">Nicole Saunders</h1> 
        </div>
        <nav> 
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/blog">Blog</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>   
        
            </ul>
        </nav>
        </header>
    )
}

export default Header