import React from 'react'

export default function Contact() {
    return (
        <section id="contact" class="dark">
            <header class="title">
                <h2>Contact <span>Us</span></h2>
                <p>There is no obligation. Lets have a chat!</p>
            </header>

            <div class="container">
                <div class="row">
                    <div class="col-md-8 animated" data-animate="fadeInLeft">
                        <form action="#">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                                <div class="col-md-6">
                                    <input type="email" class="form-control" placeholder="Your Email" />
                                </div>
                                <div class="col-md-12">
                                    <textarea class="form-control" rows="3" placeholder="Tell Us Everything"></textarea>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn btn-default submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-4 animated" data-animate="fadeInRight">
                        <address>
                            <span><i class="fa fa-map-marker fa-lg"></i> 106, Dutugemunu Street, Kohuwala, 10350</span>
                            <span><i class="fa fa-phone fa-lg"></i> <a href="tel:778181704">(+9477) 8 181 704</a></span>
                            <span><i class="fa fa-envelope-o fa-lg"></i> <a
                                href="mailto:hello@redhorn.com">hello&#64;redhorn.com</a></span>
                            <span><i class="fa fa-globe fa-lg"></i> <a href="#">support.redhorn.xyz</a></span>
                        </address>
                    </div>

                </div>
            </div>
        </section>
    )
}
