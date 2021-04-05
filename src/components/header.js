import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import "../styles/header.css"


const Header = () => {
const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata{
                title
            }
        }
    }
`)

    return(
        <header>
        <div className="headertitle">
        <h1 className="name">{data.site.siteMetadata.title}</h1> 
        </div>
        <nav className="nav"> 
                <Link className="navlink" activeClassName="activelink" to="/">Home</Link>
                
                <Link className="navlink" activeClassName="activelink" to="/about">About</Link>
                
                <Link className="navlink" activeClassName="activelink" to="/blog">Blog</Link>
                
                <Link className="navlink" activeClassName="activelink" to="/contact">Contact</Link>
        </nav>
        </header>
    )
}

export default Header