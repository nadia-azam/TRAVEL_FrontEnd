import React, {useEffect} from "react";
import './footer.css';
import video2 from '../../Assets/video_home.mp4';
import {FiSend} from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
    //create a react hook to add a scroll animation ...
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div data-aos="fade-up" className="secContent container">

                <div data-aos="fade-up" className="contactDiv flex">

                    <div className="text">
                        <small data-aos="fade-up">KEEP IN TOUCH</small>
                        <h2 data-aos="fade-up" >Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                       <input type="text" placeholder='Entrer Email Address' />
                        <button data-aos="fade-up"  className='btn flex' type='submit'>
                            SEND <FiSend className='icon'/>
                        </button>

                    </div>



                </div>

                <div data-aos="fade-up" className="footerCard flex">
                    <div className="footerIntro flex">

                        <div className="logoDiv">
                            <a data-aos="fade-up" href="#" className="logo flex">
                               <MdOutlineTravelExplore className="icon"/>
                                Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel dolor non laborum? Deserunt dignissimos rem nemo?
                        Laboriosam fuga aliquam quam?
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter  className="icon"/>
                            <AiFillYoutube  className="icon"/>
                            <AiFillInstagram  className="icon"/>
                            <FaTripadvisor  className="icon"/>
                        </div>

                    </div>

                    <div className="footerLinks grid">

                        <div data-aos="fade-up" className="linkGroup">

                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                SERVICES
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>

                        </div>

                        
                        <div data-aos="fade-up" className="linkGroup">

                            <span className="groupTitle">
                               PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                SERVICES
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>

                        </div>

                        <div data-aos="fade-up" className="linkGroup">

                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                SERVICES
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>

                        </div>

                    </div>

                    <div  className="footerDiv flex ">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - azam 2002</small>
                    </div>


                </div>



            </div>
        </section>
    )
}

export default Footer;