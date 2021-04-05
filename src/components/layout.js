import React from 'react'

import Footer from './footer'
import Header from './header'
import container from '../styles/layout.css'


const Layout = (props) => {
    return(
        <div className="container">
        <div className="content">
            <Header />
                {props.children}
            
        </div>
        <Footer />
        </div>

    )
}

export default Layout