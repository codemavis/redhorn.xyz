import React from 'react'
import backApp from '../Images/app.jpg'

export default function About() {
    return (
        <section id="about" class="light">
            <header class="title">
                <h2>About <span>Us</span></h2>
                <p>RedHorn helps clients transform their businesses digitally by providing expert software engineering and
            consultancy services.</p>

                <p>We deliver high tech innovations to companies, big enterprises and technology challengers, improving the ways
            they work and boosting the value they create for the modern world. </p>

                <p> The world is evolving fast. With an enterprise management cloud from RedHorn, you can build your business to
            adapt to what’s next.</p>
            </header>

            <div class="container">
                <div class="row table-row">
                    <div class="col-sm-6 hidden-xs">
                        <div class="section-content">
                            <div class="big-image" style={{ backgroundImage: `url(${backApp})` }}></div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="section-content">
                            <div class="about-content left animated" data-animate="fadeInLeft">
                                <div class="about-icon"><i class="fa fa-code"></i></div>
                                <div class="about-detail">
                                    <h4>Be ready for what comes next. </h4>
                                    <p>As your business needs change, you need to be able to pivot—fast. Our flexible foundation helps you
                      do just that.</p>
                                </div>
                            </div>

                            <div class="about-content left animated" data-animate="fadeInLeft">
                                <div class="about-icon"><i class="fa fa-desktop"></i></div>
                                <div class="about-detail">
                                    <h4>Empower decisions at every level. </h4>
                                    <p>With one source for financial, people, and operational data, everyone can access real-time insights
                      to make sound decisions. </p>
                                </div>
                            </div>

                            <div class="about-content left animated" data-animate="fadeInLeft">
                                <div class="about-icon"><i class="fa fa-cube"></i></div>
                                <div class="about-detail">
                                    <h4>A technology foundation you can trust. </h4>
                                    <p>We never stop innovating. And you can count on us to deliver technology that fuels your growth and
                      keeps your data safe.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
