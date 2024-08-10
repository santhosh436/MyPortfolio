import React from 'react';
import {SelfData} from '../Data/WhatCanIDoData';
const WhatCanIDo = () => {
  return (
    <div className='bg-white sm:mx-20 mt-6 rounded'>
          <h1 className=' text-center pt-10 pb-3 font-bold text-xl'>What Can I do</h1>
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer">
            {SelfData.map(card => (
                <div key={card.id} className="bg-gray-300 shadow-lg rounded-xl ">
                  <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover hidden sm:inline" />
                  <div className="p-2 text-left">
                    <h2 className=" text-lg pt-2 sm:text-xl mb-3  font-bold">{card.name}</h2>
                    <h3 className="text-black text-sm font-semibold hidden sm:inline">{card.role1}</h3>
                  </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhatCanIDo
