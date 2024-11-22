import React from 'react'
import { Link } from 'react-router-dom';
import SlotCounter from 'react-slot-counter';
import { motion } from "framer-motion";

import about_2 from "../assets/img/about-2.jpg"

const About = () => {
    return (
        <div className="about-area ptb-100 section-bg">
            <div className="container">
                <motion.div className="row align-items-center"
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                >
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={about_2} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="sub-t">About Us</div>
                            <h2>Leading the Future with AI-Powered Solutions</h2>
                            <p>At Epoch, we specialize in creating innovative software solutions powered by artificial intelligence. Our mission is to empower businesses by leveraging AI to drive efficiency, foster innovation, and provide a competitive edge in the market. From AI-driven analytics to automated workflows, our solutions are designed to meet the unique needs of each client.</p>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="sub-counter">
                                        <h3>
                                            <SlotCounter
                                                value={5000}
                                                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                                            />
                                        </h3>
                                        <p>Clients</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="sub-counter">
                                        <h3 className='d-flex align-items-center '>
                                            <SlotCounter
                                                value={10}
                                                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                                            />
                                            <span className="target">K</span>
                                        </h3>
                                        <p>Projects</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="sub-counter">
                                        <h3>
                                            <SlotCounter
                                                value={15}
                                                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                                            />
                                        </h3>
                                        <p>Years</p>
                                    </div>
                                </div>
                            </div>
                            <Link className="main-btn" to="/about"><span></span><i className="ri-quill-pen-line"></i> About Us</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;
