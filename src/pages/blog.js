import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
    return (

        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default BlogPage