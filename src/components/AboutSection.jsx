import React from 'react'
import { FaGithub,FaLinkedin,FaFacebook,FaInstagram } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const handleResumeClick = () => {
        // Logic for resume button click
        console.log('Resume button clicked');
      };
    const handlePortfolioClick = () => {
    // Logic for portfolio button click
    console.log('Portfolio button clicked');
    };
  return (
    <div>
        <section className="text-gray-600 h-screen body-font mb-96 sm:mb-0 mt-20" id='about'>
            <div className="container px-5 mx-auto text-white flex flex-col rounded-lg py-44">
                    <p className=' text-2xl font-bold  mb-10 text-center sm:text-left'>Who am I ?</p>
                <div className="lg:5/12">
                    <div className="flex flex-col sm:flex-row mt-4">
                        <div className="sm:w-1/3 text-center sm:pr-3 py-6 bg-orange-500 mr-5 rounded-3xl">
                            <div className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                 <img src="./images/ProfileJpg.png" className='rounded-full object-contain' alt="" />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-bold title-font text-lg text-white">Junior Full Stack Developer</h2>
                                <h3 className='text-gray-700 font-medium'>Front End Developer | Back End Developer</h3>
                            </div>
                            <div className='flex mt-4 sm:w-80 justify-center sm:ml-10 mb-4 sm:mb-0'>
                                <div className='flex w-72 justify-around'>
                                    <a href="https://github.com/santhosh436" target='blank'><span className='cursor-pointer'><FaGithub className='text-white text-3xl' /></span></a>
                                    <a href="https://www.linkedin.com/in/santhosh-modi01/" target='blank'><span className='cursor-pointer'><FaLinkedin className='text-white text-3xl' /></span></a>
                                    <a href="https://www.figma.com/files/team/1397871902015259245/user/1397871899664171031?fuid=1397871899664171031" target='blank'><span className='cursor-pointer'><FaFacebook className='text-white text-3xl' /></span></a>
                                    <span className='cursor-pointer'><FaInstagram className='text-white text-3xl' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-7/12 sm:pl-8 sm:py-8 sm:border-l border-black sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4 sm:text-justify font-semibold "> As a dedicated and enthusiastic Junior Full Stack Developer, I bring a solid foundation in both frontend and backend technologies, complemented by hands-on experience through internships and personal projects. With a strong commitment to continuous learning and improvement, I am excited about the opportunity to contribute to innovative projects and drive technological advancements</p>
                            
                            <div className='btns flex sm:pl-16 text-black font-semibold'>
                            <a href="/files/santhoshModiResume.pdf" download='santhosh_Modi_Resume.pdf'><button onClick={handleResumeClick}  className='bg-orange-500 mr-4 w-32 rounded flex justify-around cursor-pointer'> <IoDocumentOutline className=' text-black text-lg font-bold mt-1' /> <span>Download CV</span></button></a> 
                               <Link to="/portfolio"> <button onClick={handlePortfolioClick} className='bg-orange-500 w-32 rounded cursor-pointer' >Portfolio <span>&#8594;</span></button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSection
