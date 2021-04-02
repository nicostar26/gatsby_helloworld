import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const contactPage = () => {
    return(
        <Layout>  
            <h1>Contact</h1>
            <p>nicostar26@yahoo.com</p>
            <p>910-691-9309</p>
            <p>Check me out on <a href="https://twitter.com/development_ns">Twitter!</a></p>
            <p>Go Back to the <Link to="/">Home </Link>page.</p>
        </Layout>
    )
}

export default contactPage