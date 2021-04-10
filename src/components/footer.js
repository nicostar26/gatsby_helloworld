import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import "../styles/header.css"

const Footer = () => {

    const data = useStaticQuery(graphql`
    query{
        site {
            siteMetadata{
          author
        }
        
      }
      
    }
`)

    return(
        <footer className="footerdata">
            <p>Created by {data.site.siteMetadata.author} © 2021</p>
        </footer>
    )
}

export default Footer