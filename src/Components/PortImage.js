import React from 'react'
var i = 0;

//width: 360px; height: 247px; display: inline-block;

export default function PortImage({ portImg }) {
    return (
        <figure class="portfolio-view branding" style={{ width: '458.25px', height: '345.25px', display: 'inline-block' }}>
            <img src={portImg.image} />
            <figcaption><h2>{portImg.title} </h2>
                {/* <span>x{++i}</span> */}
                <p>{portImg.text}</p>
                <a href="#none">View more</a>
            </figcaption>
        </figure>
    )
}
