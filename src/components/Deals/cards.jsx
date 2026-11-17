// Cards.js
import React from 'react';

function Cards({ img, onClick, isSelected, price, onAddToCart }) {
    return (
        <div onClick={onClick} className="card hover:cursor-pointer border p-4 rounded-lg shadow-lg">
            <img src={img} alt="Product" className="w-full h-40 object-cover rounded-t-lg" />
            {isSelected && (
                <div className="details mt-4">
                    <p className="text-xl font-bold text-gray-800">${price}</p>
                    <button 
                        onClick={(e) => { e.stopPropagation(); onAddToCart(); }} 
                        className="mt-2 bg-darkgreen text-white py-2 px-4 rounded hover:bg-darkgreen"
                    >
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cards;
