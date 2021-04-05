import React from 'react'
import { Link } from 'gatsby'
import "../styles/header.css"


const Header = () => {
    return(
        <header>
        <div className="headertitle">
        <h1 className="name">Nicole Saunders</h1> 
        </div>
        <nav className="nav"> 
                <Link className="navlink" to="/">Home</Link>
                
                <Link className="navlink" to="/about">About</Link>
                
                <Link className="navlink" to="/blog">Blog</Link>
                
                <Link className="navlink" to="/contact">Contact</Link>
        </nav>
        </header>
    )
}

export default Header