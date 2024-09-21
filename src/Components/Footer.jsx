import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import './CSS/Footer.css'

const Footer = () => {

    const navigate = useNavigate();

    const websiteDesigningFunction = (e) => {

        e.preventDefault();

        navigate("/dive-in/web-design-service")

        console.log("navigated to /dive-in/web-design-service")

    }

    const websiteDevelopmentFunction = (e) => {

        e.preventDefault();

        navigate("/dive-in/web-development-service")

        console.log("navigated to /dive-in/web-development-service")

    }

    const websiteMaintenanceFunction = (e) => {

        e.preventDefault();

        navigate("/dive-in/web-maintenance-service")

        console.log("navigated to /dive-in/web-maintenance-service")

    }

    const SEOFunction = (e) => {

        e.preventDefault();

        navigate("/dive-in/search-engine-optimization")

        console.log("navigated to /dive-in/search-engine-optimization")

    }

    const socialMediaAdsFunction = (e) => {

        e.preventDefault();

        navigate("/dive-in/social-media-advertisements")

        console.log("navigated to /dive-in/social-media-advertisements")

    }

    const whatsappApiSolutions = (e) => {

        e.preventDefault();

        navigate("/dive-in/whatsapp-api-solutions")

        console.log("navigated to /dive-in/whatsapp-api-solutions")

    }

    const CallEngagingSolutions = (e) => {

        e.preventDefault();

        navigate("/dive-in/call-engaging-solutions")

        console.log("navigated to /dive-in/call-engaging-solutions")

    }

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

            <div className="w-full bg-blackCustom flex justify-around text-white font-montSerrat font-bold tracking-wider">

                <div className="mt-10 space-y-5">

                    <p> powered by</p>

                    <img 
                        src='/Footer/Footer_Logo.jpeg'
                        className='w-[250px] h-[80px] rounded-xl hover:w-[270px] hover:h-[90px] transition-all duration-300'
                    />
                    
                </div>

                <div className="my-10">

                    <p
                        className='text-yellowCustom2 text-[25px] mb-5'
                    >

                        Services

                    </p>

                    <ul
                        className='space-y-5 text-[14px]'
                    >

                        <li
                            className='servicesFooter cursor-pointer hover:text-paleGreen transition-all duration-300'
                            onClick={(e) => websiteDesigningFunction(e)}
                        >Website / Web App Designing</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-paleGreen transition-all duration-300'
                            onClick={(e) => websiteDevelopmentFunction(e)}
                        >Website / Web App Developement</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-paleGreen transition-all duration-300'
                            onClick={(e) => websiteMaintenanceFunction(e)}
                        >Website / Web App Maintanence</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-paleGreen transition-all duration-300'
                            onClick={(e) => SEOFunction(e)}
                        >Search Engine Optimization ( SEO )</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-paleGreen transition-all duration-300'
                            onClick={(e) => socialMediaAdsFunction(e)}
                        >Social Media Advertisements</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-paleGreen transition-all duration-300'
                            onClick={(e) => whatsappApiSolutions(e)}
                        >WhatsApp API Solutions</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-paleGreen transition-all duration-300'
                            onClick={(e) => CallEngagingSolutions(e)}
                        >Call Engaging Solutions</li>

                    </ul>

                </div>

                <div className="mt-10 space-y-5 ">

                    <p
                        className='text-blueCustom'
                    >
                        
                        Follow Us

                    </p>

                    <div
                        className='flex space-x-5'
                    >

                        <div className=" space-y-5">

                            <FaInstagram 
                                className='text-white text-[45px]  hover:text-pink-500 rounded-xl transition-all duration-[400ms] hover:text-[50px] cursor-pointer'
                                onClick={(e) => {

                                    e.preventDefault();

                                    const url = `https://www.instagram.com/connekt_in/`

                                    window.open(url, '_blank');

                                }}
                            />

                            <BsFacebook 
                                className='text-[40px] hover:text-blue-600  text-white transition-all duration-[400ms] ml-1 hover:text-[50px] cursor-pointer'
                            />

                            <FaYoutube 
                                className='text-[40px] hover:text-red-600  text-white transition-all duration-[400ms] ml-1 hover:text-[50px] cursor-pointer'
                            />

                        </div>

                        <div className=" space-y-5">

                            <IoLogoLinkedin 
                                className='text-[45px]  hover:text-blue-400 rounded-xl transition-all duration-[400ms] hover:text-[50px] cursor-pointer'
                            />

                            <FaSquareXTwitter 
                                className='text-[40px] hover:text-black  text-white hover:bg-white hover:rounded-xl transition-all duration-[400ms] ml-1 hover:text-[50px] cursor-pointer'
                            />

                        </div>
                    
                    </div>

                </div>

            </div>
        
        </>

    )

}

export default Footer