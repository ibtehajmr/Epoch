import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLaptopCode, faProjectDiagram, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const featuresData = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faCogs} />,
        title: "Custom Model Development",
        desc: "Tailored AI models designed to meet your specific business needs, ensuring optimal performance and results.",
        link: "/about"
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faLaptopCode} />,
        title: "Highly Specialized AI-Powered Software",
        desc: "Advanced software solutions powered by AI, designed to enhance efficiency, drive innovation, and provide a competitive edge.",
        link: "/about"
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faProjectDiagram} />,
        title: "ERP Development",
        desc: "Comprehensive ERP systems developed to streamline your operations and improve overall business management.",
        link: "/about"
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faHandsHelping} />,
        title: "Ongoing Support & Optimization",
        desc: "Continuous support and optimization services to ensure your AI solutions remain effective and up-to-date.",
        link: "/about"
    },
]


const Fetuses = () => {
    return (
        <section id="features" className="fetuses-area pt-70">
            <div className="container-fluid">
                <div className="row justify-content-center g-0">
                    {
                        featuresData.map(({ id, desc, icon, link, title }) => {
                            return (
                                <div key={id} className="col-lg-3 col-md-6">
                                    <motion.div className="single-fetuses-box"
                                        initial={{
                                            opacity: 0,
                                            y: 150
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
                                        <div className="icon">
                                            <i className={icon}></i>
                                        </div>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                        <Link to={link}>Read More</Link>
                                    </motion.div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </section>
    )
}

export default Fetuses