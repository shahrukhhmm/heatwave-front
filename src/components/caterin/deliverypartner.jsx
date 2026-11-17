import React from "react";
import { useNavigate } from "react-router";

function Deliverypartner(){
    const navigate=useNavigate();
    const navigation=()=>{
        navigate("/Micro");
      }
    return<>
    <h1 className="flex justify-center text-2xl mt-10 font-bold text-darkgreen">Choose One of our delivery partners</h1>
    <p className="flex justify-center m-10 text-slate-200">Catering delivery for corporate events</p>
    <button className="flex justify-center my-10 py-5 px-16 w-50 mt-10 m-auto text-darkgreen border-2 hover:border-darkgreen" onClick={navigation}>Ez Cater</button>
    </>
}

export default Deliverypartner;