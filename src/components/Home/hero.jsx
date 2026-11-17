import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './hero.css'
import backgroundVideo from '../../assets/vedios/vedio3.mp4';
function Hero() {

    return (
        <div className="hero relative flex flex-col lg:flex-row justify-between px-5 lg:px-20 pt-20 " >
          <video autoPlay loop muted playsInline className="video-background absolute inset-0 w-full h-85 object-cover -z-10">
          <source src={backgroundVideo} type="video/mp4" />
        <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="relative z-0 left lg:w-2/5 xl:w-40% text-white" style={{marginTop:"700px"}}>
           
            {/* <h1 className='font-roboto xl:text-5xl lg:text-4xl md:text-2xl font-bold mt-40'>Heatwave <span style={{color:"red"}}>Hotwitches</span> </h1>
            <p className='mt-5 lg:text-xl md:text-md'>Come and enjoy delicious food in a cozy atmosphere. </p> */}
            {/* <div className="btn mt-5"> */}
                {/* <Link to='/menu'>
                    <button className='px-5 py-2 lg:px-4 lg:py-1 md:px-3 md:py-1 border-2 border-darkgreen rounded-xl font-medium xl:text-xl lg:text-lg bg-darkgreen text-white hover:cursor-pointer hover:bg-darkgreen hover:border-darkgreen transition'>Order Now</button>
                </Link> */}
                {/* <button className='px-8 py-2 lg:px-4 lg:py-1 md:px-3 md:py-1 ml-5 border-2 border-darkgreen rounded-xl font-medium xl:text-xl lg:text-lg text-darkgreen hover:cursor-pointer hover:bg-darkgreen hover:text-white transition'>Takeaway</button> */}
            {/* </div> */}
        </div>
        <div className="relative z-10 right lg:w-3/5 xl:w-50%">
           
        </div>
    </div>
    
    );
}

export default Hero;
