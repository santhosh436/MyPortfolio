import React, { useState } from 'react';
import { SelfData } from '../Data/WhatCanIDoData';
import '../App.css'

const WhatCanIDo = () => {
  const [isFlipped, setIsFlipped] = useState(Array(SelfData.length).fill(false));

  const handleMouseEnter = (index) => {
    setIsFlipped((prevFlipped) => {
      const updatedFlipped = [...prevFlipped];
      updatedFlipped[index] = true;
      return updatedFlipped;
    });
  };

  const handleMouseLeave = (index) => {
    setIsFlipped((prevFlipped) => {
      const updatedFlipped = [...prevFlipped];
      updatedFlipped[index] = false;
      return updatedFlipped;
    });
  };

  return (
    <div className='bg-white sm:mx-20 my-14 mt-6 rounded'>
      <h1 className='text-center pt-10 pb-3 font-bold text-xl'>What Can I Do</h1>
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {SelfData.map((card, index) => (
          <div
            key={card.id}
            className="relative w-full h-48 perspective"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={`relative w-full h-full transition-transform duration-500 ease-in-out transform ${isFlipped[index] ? 'rotate-y-180' : ''}`}>
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center rounded-xl bg-white">
                <img src={card.imageUrl} alt={card.title} className="w-full h-32 object-cover rounded-t-xl" />
                <h2 className="text-lg pt-2 sm:text-xl mb-3 font-bold">{card.name}</h2>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden transform rotate-y-180 bg-gray-200 flex justify-center items-center rounded-xl p-3 sm:p-4">
                <p className="text-black text-sm font-semibold">{card.role1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatCanIDo;
