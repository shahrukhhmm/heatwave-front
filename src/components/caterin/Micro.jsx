import React from "react";
import img from "../imgs/fries.jpg";
import Logo from '../imgs/logo.png'

export default function Micro() {
  return (
    <div>
      <div
        className="py-20"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="bg-white w-40% m-auto p-9 text-center">
          <img src={Logo} alt="" className="h-40 m-auto"/>
          <h1 className="text-3xl font-bold my-5">Mico's Hot Chicken Catering</h1>
          <p className="my-5">Enjoy The Sweet Heat</p>
          <div className="border-2 border-black border-opacity-25 my-5 flex">
            <input
              type="text"
              placeholder="Enter an address to start your order"
              className="bg-white p-3 w-80 overflow-hidden outline-none"
            />
            <button className="w-24 bg-darkgreen text-white">Search</button>
          </div>
        </div>
      </div>


      <div>
        <div className="my-10">
            <h1 className="text-center font-bold my-5 text-xl">Order Delivery or Take Out from 1 Location</h1>
            <div className="flex gap-10 w-96 m-auto">
                <div>
                    <h2>TEXAS</h2>
                </div>
                <div>
                    <p>Houston</p>
                    <p>1603 N Durham Dr</p>
                    <p className="text-blue-400">Order Now</p>
                </div>
            </div>
        </div>
        <div className="my-10">
            <h1 className="text-center font-bold my-5 text-xl">Reviews for Mico's Hot Chicken Catering</h1>
            <div className="w-60% my-10 m-auto">
                <h3><span className="font-bold">Mallory</span> in Houston, TX</h3>
                <p>Different lunch option for offices. Staff loved it</p>
            </div>
        </div>
      </div>
    </div>
  );
}
