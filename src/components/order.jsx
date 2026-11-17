import React, { useState } from "react";
import { useNavigate } from "react-router";



function Order(){
    const navigate=useNavigate();
    const navigation=()=>{
        navigate("/menu");
    }
    return(<>
     <h1 className="flex justify-center text-darkgreen text-4xl mt-6 font-bold">ORDER ONLINE</h1>
     <h1 className="flex justify-center mt-20 text-2xl font-bold text-greenyellow">HOUSTON HEIGHTS</h1>
     <div className="flex justify-center gap-20 mt-10" >
     <div>
        <p className="text-gray-500 font-semibold">PICK UP YOUR ORDER AT THE RESTURANT</p>
        <button className="border-darkgreen text-darkgreen font-bold my-10 py-10  px-28 rounded border-2 hover:cursor-pointer hover:bg-darkgreen hover:text-white duration-300" onClick={navigation}>
            PICKUP
          </button>
        </div>
        <div>
            <p className="text-gray-500 font-semibold">GET YOUR ORDER DELIVERED WITH DOORDASH</p>
            <button className="border-darkgreen text-darkgreen font-bold my-10 py-10  px-28 rounded border-2 hover:cursor-pointer hover:bg-darkgreen hover:text-white duration-300">DELIVERY</button>
        </div>
     </div>
    </>)
}

export default Order;