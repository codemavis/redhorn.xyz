import React, { useEffect, useState } from 'react'
import stock from '../Images/stock.jpg'
import crm from '../Images/crm.jpg'
import manufac from '../Images/manufac.jpg'
import packaging from '../Images/package.jpg'
import webstore from '../Images/webstore.jpg'
import education from '../Images/education.jpg'
import mobile from '../Images/mobile.jpeg'
import pos from '../Images/pos.jpg'
import PortImage from './PortImage';

export default function Portfolio() {

    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        setPortfolio([
            {
                category: "branding",
                image: stock,
                title: "Stocks & Sales ",
                link: "#none",
                text: "Inventory & warehouse management"
            },
            {
                category: "graphic",
                image: crm,
                title: "Customer Relation ",
                link: "#none",
                text: "Marketing management, sales, customer service and support"
            },
            {
                category: "graphic",
                image: manufac,
                title: "Manufacturing ",
                link: "#none",
                text: "Job costing, order line, routing, project plan"
            },
            {
                category: "video",
                image: packaging,
                title: "Packaging ",
                link: "#none",
                text: "Polythene packaging, labeling and extrusion process"
            },
            {
                category: "branding",
                image: webstore,
                title: "E-commerce ",
                link: "#none",
                text: "Webstore for wholesale & retail stores including online payment integration"
            },
            {
                category: "printing",
                image: education,
                title: "Education ",
                link: "#none",
                text: "LRegistration, class schedules & invoicing"
            },
            {
                category: "printing",
                image: mobile,
                title: "Mobile  ",
                link: "#none",
                text: "Android & iOS app development"
            },
            {
                category: "printing",
                image: pos,
                title: "Point of Sale",
                link: "#none",
                text: "Cloud POS System including hardware"
            }
        ]);
    }, [])

    return (
        <section id="portfolio" class="light">
            <header class="title">
                <h2>Verticals</h2>

            </header>

            <div class="container-fluid">

                <div class="row">
                    <div class="container-portfolio">

                        {portfolio.map((portImg) => <PortImage portImg={portImg} />)}


                    </div>
                </div>
            </div>
        </section>
    )
}
