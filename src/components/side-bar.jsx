import React, { useState, useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

function SideBar({ isVisible }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if token exists in local storage
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // Remove token from local storage
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        // Refresh the page
        window.location.reload();
    };

    return (
        <div className={`SideBar pt-10 w-20% bg-white top-0 h-full fixed z-20 ${isVisible ? '' : 'hidden'}`}>
            <div className="btn ml-10 pb-5">
                {isLoggedIn ? (
                    <button 
                        className='py-3 px-6 bg-darkgreen text-white text-xl rounded-xl hover:cursor-pointer hover:bg-darkgreen' 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                ) : (
                    <Link to='/login'>
                        <button className='py-3 px-6 bg-red-500 text-white text-xl rounded-xl hover:cursor-pointer hover:bg-darkgreen'>
                            Login
                        </button>
                    </Link>
                )}
            </div>
            <div className="customer border-y-2 border-black py-10 px-5">
                <ul className='list-none'>
                    <Link to="https://www.google.com/maps/place/Morgah,+Rawalpindi,+Punjab,+Pakistan/@33.5533906,73.060409,14z/data=!3m1!4b1!4m6!3m5!1s0x38df92d15d4545ef:0xab2b9240df81cf63!8m2!3d33.5547882!4d73.0788957!16s%2Fg%2F1tfc4_4b?entry=ttu">
                    <li className='mt-5 lg:text-2xl md:text-md font-medium flex hover:cursor-pointer hover:text-darkgreen'>
                        <CiLocationOn className='lg:text-3xl md:text-md mr-5'/> 
                        Store Locator
                    </li></Link>
                    <Link to="/menu">
                        <li className='mt-5 lg:text-2xl md:text-md font-medium flex hover:cursor-pointer hover:text-darkgreen'>
                            <TfiMenuAlt className='lg:text-3xl md:text-md mr-5'/> 
                            Explore Menu
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="about-us py-10 px-5">
                <ul className='list-none'>
                    <Link to='/about'>
                        <li className='mt-5 text-xl font-medium hover:cursor-pointer hover:text-darkgreen inline-block'>
                            About us
                        </li>
                    </Link><br />
                    <Link to='/feedback'>
                        <li className='mt-5 text-xl font-medium hover:cursor-pointer hover:text-darkgreen inline-block'>
                            Feedback
                        </li>
                    </Link><br />
                    <Link to='/terms'>
                        <li className='mt-5 text-xl font-medium hover:cursor-pointer hover:text-darkgreen inline-block'>
                            Terms & Conditions
                        </li>
                    </Link><br />
                    <Link to='/privacy'>
                        <li className='mt-5 text-xl font-medium hover:cursor-pointer hover:text-darkgreen inline-block'>
                            Privacy Policy
                        </li>
                    </Link><br />
                    <Link to='/contact'>
                        <li className='mt-5 text-xl font-medium hover:cursor-pointer hover:text-darkgreen inline-block'>
                            contact us
                        </li>
                    </Link><br />
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
