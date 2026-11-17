import React from "react";
import img1 from "../imgs/fries.jpg";
import { useNavigate } from "react-router";

function Catern(){

    const navigate=useNavigate();

    const navigation=()=>{
      navigate("/pickup");
    }
    const micro=()=>{
      navigate("/delievrypartner")
    }

    return(<>
    <div>
        <h1  className="flex justify-center p-10 font-bold text-4xl text-darkgreen">Catering services</h1>
        <div className="flex">
        <div className="w-60%">
            <img className="h-96 w-100%" src={img1} alt="Caterin services" />
        </div>
        <div className="pl-10">
              <h1 className="text-4xl font-bold  text-darkgreen"><span className="pl-8">what type of</span> <br />catering order can <br /> we get started for <br /> <span className="pl-20">you?</span></h1>
              <div className="mt-10 ml-10">
              <p className="font-semibold">Pick up your order at te RESTURANT</p>
              <button className="border-2 border-darkgreen hover:bg-darkgreen hover:text-white p-2 w-52 mt-5 ml-4 h-14" onClick={navigation}>Catering Pickup</button>
              </div>
              <div className="mt-10 ml-10">
                <p className="ml-5 font-semibold">we bring your order to you</p>
                <button className="border-2 border-darkgreen mb-5 p-2 w-52 mt-5 ml-4 h-14 hover:bg-darkgreen hover:text-white" onClick={micro}>Catering Delivery</button>
              </div>
              
        </div>
    </div></div>
    </>)
}

export default Catern;