import React from 'react'
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Team from './Team'
import Expertise from './Expertise'
import Contact from './Contact'
import Footer from './Footer'

export default function Main() {
    return (
        <div className="container-fluid">
            <Header />
            <About />
            <Portfolio />
            {/* <Team /> */}
            <Expertise />
            <Contact />
            <Footer />
        </div>
    )
}