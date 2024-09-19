import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io'

const Footer = () => {

    return (

        <>
        
            <div className="w-full relative mb-20 font-montSerrat font-bold text-center">

                <video
                    autoPlay
                    loop
                    className='w-full h-[200px] object-cover absolute z-0'
                    muted
                >

                    <source 
                        src='/CTA/CTA_Background.mp4'
                        type='video/mp4'
                    />
                    
                </video>

                <p
                    className='text-[45px] z-20 relative pt-10'
                > We at connekt,</p>

                <p
                    className='text-[30px] relative pb-10'
                > Connecting Idea's To Success</p>

            </div>

            <div className="w-full bg-black flex justify-around text-white font-montSerrat font-bold tracking-wider">

                <div className="mt-10 space-y-5">

                    <p> powered by</p>

                    <img 
                        src='/Footer/Footer_Logo.jpeg'
                        className='w-[250px] h-[80px] rounded-xl'
                    />
                    
                </div>

                <div className="my-10">

                    <ul
                        className='space-y-2 text-[14px]'
                    >

                        <li
                            className='text-[22px] text-paleGreen'
                        >Services</li>
                        <li>Website / Web App Designing</li>
                        <li>Website / Web App Developement</li>
                        <li>Website / Web App Maintanence</li>
                        <li>Search Engine Optimization ( SEO )</li>
                        <li>Social Media Advertisements</li>
                        <li>WhatsApp API Solutions</li>
                        <li>Call Engaging Solutions</li>

                    </ul>

                </div>

                <div className="mt-10 space-y-5">

                    <p>
                        
                        Follow Us

                    </p>

                    <div
                        className='flex space-x-5'
                    >

                        <div className=" space-y-5">

                            <FaInstagram 
                                className='text-white text-[45px]  hover:text-pink-500 rounded-xl transition-all duration-[400ms] hover:text-[50px]'
                            />

                            <BsFacebook 
                                className='text-[40px] hover:text-blue-600  text-white transition-all duration-[400ms] ml-1 hover:text-[50px]'
                            />

                            <FaYoutube 
                                className='text-[40px] hover:text-red-600  text-white transition-all duration-[400ms] ml-1 hover:text-[50px]'
                            />

                        </div>

                        <div className=" space-y-5">

                            <IoLogoLinkedin 
                                className='text-[45px]  hover:text-blue-400 rounded-xl transition-all duration-[400ms] hover:text-[50px]'
                            />

                            <FaSquareXTwitter 
                                className='text-[40px] hover:text-black  text-white hover:bg-white hover:rounded-xl transition-all duration-[400ms] ml-1 hover:text-[50px]'
                            />

                        </div>
                    
                    </div>

                </div>

            </div>
        
        </>

    )

}

export default Footer