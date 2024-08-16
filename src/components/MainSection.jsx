// App.js
import React from 'react';
import '../App.css'; // Ensure you have Tailwind CSS imported in your CSS file

const MainSection = () => {
  return (
    <section className="flex flex-col items-center md:flex-row text-white h-screen sm:pl-32 " id='home'>
      {/* Portfolio Column */}
      <div className="flex-1 p-4 sm:text-left mt-4">
        <p className=' sm:text-left text-xl mt-16'>Hello!</p>
        <h1 className="sm:text-5xl text-2xl font-bold mb-1">I'm Santhosh Modi <br /> <span className='text-orange-400'>Junior Full Stack Developer</span></h1>
        <p className='sm:text-xl text-md text-left mb-3 font-semibold text-orange-500'>FrontEnd Developer | BackEnd Developer</p>
        <p className="text-lg mb-4">
        Welcome to my professional portfolio! As a full-stack developer, I strive to
        create fast, responsive and user-friendly web applications. Explore my
        projects, skills and contact me for partnerships and tech opportunities.
        </p>
        <button className='bg-orange-500 w-40 h-10 rounded text-xl'><a href="#about">About Me <span className='text-2xl'>&#x2192;</span></a></button>
      </div>

      {/* Image Column */}
      <div className="flex-1 p-4 flex justify-center items-center ">
        <img
          src="./images/ProfileJpg.png"
          alt="My Portfolio"
          className="lg:w-9/12 w-full lg:h-auto h-64 object-cover object-center rounded"
        />
      </div>
    </section>
  );
}

export default MainSection;
