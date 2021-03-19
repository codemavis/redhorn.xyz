import React from 'react'
import iconBg from '../Images/iconbg.png'

export default function Navigation() {
    return (
        <nav class="navbar navbar-fixed-top navbar-default bottom">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <img src={iconBg} alt="" width="80px" />
                    <a class="navbar-brand" href="#header">RedHorn</a>
                </div>
                <div class="collapse navbar-collapse" id="menu">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Verticals</a></li>
                        {/* <li><a href="#team">Team</a></li> */}
                        {/* <li><a href="#info">Info</a></li> */}
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
