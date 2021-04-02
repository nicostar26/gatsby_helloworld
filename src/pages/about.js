import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const aboutPage = () => {
    return(
        <Layout>
        <h1>About</h1>
        <p>This is a paragraph that is all about me. Sounds conceited but true lol</p>
        <p>Return to the <Link to="/">Home </Link>page.</p>
        <p><Link to="/contact">Work With Me!</Link></p>
        </Layout>    
        
        
    )
}

export default aboutPage