import React, { useRef } from 'react'
import logo from './imgs/logo.png'
import playstor from './imgs/download-1.png'
import appstor from './imgs/download-2.png'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer(){

    return(

        <>

            <div className="footer bg-black text-white p-10">
                <div className="top flex justify-center items-center">
                    <div className="logo max-w-9">
                        <img src={logo} alt="" />
                    </div>
                    <div className="social flex">
                        <h1 className='text-4xl ml-8 hover:cursor-pointer hover:text-orange'><FaFacebook /></h1>
                        <h1 className='text-4xl ml-8 hover:cursor-pointer hover:text-orange'><FaTwitter /></h1>
                        <h1 className='text-4xl ml-8 hover:cursor-pointer hover:text-orange'><IoLogoWhatsapp /></h1>
                    </div>
                    {/* payment details icons */}
                    <div>

                    </div>
                </div>
                <div className="bottom flex justify-between mt-10 lg:px-20 md:px-10">
                    <div className="about">
                        <div className="ul list-none">
                            <Link to='/about'><li className='text-2xl font-bold hover:cursor-pointer hover:text-[orange]'>About Us</li></Link>
                            <Link to='/privacy'><li className='text-xl hover:cursor-pointer hover:text-[orange]'>Privacy Policy</li></Link>
                            <Link to='/feedback'><li className='text-xl hover:cursor-pointer hover:text-[orange]'>Feedback</li></Link>
                        </div>
                    </div>
                    <div className="contect list-none">
                        <div className="ul">
                            <Link to="/contact"><li className='text-2xl font-bold hover:cursor-pointer hover:text-[orange]'>Contact Us</li></Link>
                           <Link to="https://www.google.com/maps/place/Morgah,+Rawalpindi,+Punjab,+Pakistan/@33.5533906,73.060409,14z/data=!3m1!4b1!4m6!3m5!1s0x38df92d15d4545ef:0xab2b9240df81cf63!8m2!3d33.5547882!4d73.0788957!16s%2Fg%2F1tfc4_4b?entry=ttu"> <li className='text-xl hover:cursor-pointer hover:text-[orange]'>Store Locator</li></Link>
                            <Link to='/terms'><li className='text-xl hover:cursor-pointer hover:text-[orange]'>Terms & Conditions</li></Link>
                        </div>
                    </div>
                    <div className="app lg:flex sm:grid">
                        <img src={playstor} alt="" className='h-10 hover:cursor-pointer'/>
                        <img src={appstor} alt="" className='h-10 lg:ml-5 sm:ml-0 hover:cursor-pointer'/>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Footer;