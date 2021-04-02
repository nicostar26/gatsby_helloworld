import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <Layout>
        <h1>Hello!</h1>
        <h2>My Name is Nicole and I'm a Developer.</h2>
        <p>Read more <Link to="/about">About me</Link></p>
        <p>Read my <Link to="/blog">Blog</Link></p>
        <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage
