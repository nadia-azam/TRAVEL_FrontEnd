import React, {useEffect} from "react";
import './main.css';
import img from '../../Assets/pic1.jpg';
import img2 from '../../Assets/pic2.jpg';
import img3 from '../../Assets/pic3.jpg';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

// paste an array named data
const Data = [
    {
        id:1,
        imgSrc: img,
        desTitle: 'Guanajuato',
        location: 'Mexico',
        grade : 'CULTURAL RELAX',
        fees: '$1100',
        description:' A city in central Mexico , Guanajuato is known for its history of silver mining and colonoial architecture the houses in this city are very attractively painted with the most bright colors available. Always welcome'
    
    },

    {
        id:2,
        imgSrc: img2,
        desTitle: 'Guanajuato',
        location: 'Mexico',
        grade : 'CULTURAL RELAX',
        fees: '$1100',
        description:' A city in central Mexico , Guanajuato is known for its history of silver mining and colonoial architecture the houses in this city are very attractively painted with the most bright colors available. Always welcome'
    
    },

    {
        id:3,
        imgSrc: img3,
        desTitle: 'Guanajuato',
        location: 'Mexico',
        grade : 'CULTURAL RELAX',
        fees: '$1100',
        description:' A city in central Mexico , Guanajuato is known for its history of silver mining and colonoial architecture the houses in this city are very attractively painted with the most bright colors available. Always welcome'
    
    },

    {
        id:4,
        imgSrc: img3,
        desTitle: 'Guanajuato',
        location: 'Mexico',
        grade : 'CULTURAL RELAX',
        fees: '$1100',
        description:' A city in central Mexico , Guanajuato is known for its history of silver mining and colonoial architecture the houses in this city are very attractively painted with the most bright colors available. Always welcome'
    
    },

    


]

const Main = () => {
     //create a react hook to add a scroll animation ...
     useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
    return (
        
        <section className="main container section">

            <div data-aos="fade-right" className="secTitle">
                <h3 className="title">Most visited destination</h3>
            </div>

            <div className="secContent grid">
                {
                Data.map(({id , imgSrc , desTitle , location , grade , fees , description})=>{
                    return (
                        <div data-aos="fade-up" key={id} className="singleDestination">

                            <div className="imgDiv">
                                <img src={imgSrc} alt={desTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="desTitle">{desTitle}</h4>
                                <span className="continent flex"><HiOutlineLocationMarker className="icon"/>
                                    <span className="name"> {location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade} <small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button data-aos="fade-up" className="btn flex">
                                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                                </button>
                            </div>
                        </div>
                    )
                })
                }
            </div>

        </section>
    )
}

export default Main;