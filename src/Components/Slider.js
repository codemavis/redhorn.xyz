import React, { useEffect, useState } from 'react'

import slide1 from '../Images/slide-1.jpg'
import slide2 from '../Images/slide-2.jpg'
import slide3 from '../Images/slide-3.jpg'
import iconBg from '../Images/iconbg.png'

export default function Slider() {

    return (
        <div class="header-slide">
            <section>
                <div id="loader" class="pageload-overlay" data-opening="M 0,0 0,60 80,60 80,0 z M 80,0 40,30 0,60 40,30 z">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60"
                        preserveAspectRatio="none">
                        <path d="M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z" />
                    </svg>
                </div>
                <div class="image-slide bg-fixed" style={{ backgroundImage: `url(${slide1})` }}>
                    <div class="overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">

                                    <div class="slider-content">
                                        {/* <img src={iconBg} alt="" /> */}
                                        <h1>RedHorn Systems</h1>
                                        <p>Compact Business Solutions for Big Business Success</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
