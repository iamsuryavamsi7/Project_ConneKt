import React, { useEffect, useState } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import './CSS/Footer.css'

const Footer = () => {

    const navigate = useNavigate();

    const footerNavigationFunction = (e, url) => { 

        e.preventDefault();

        setTimeout(() => {

            navigate(url);

        }, 300);

    }

    const footerIconsFunction = (e, url) => {

        e.preventDefault();

        setTimeout(() => {

            window.open(url, '_blank');

        }, 300);

    }

    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {

        const checkWidth = () => {

            if ( window.innerWidth <= 600 ) {

                setIsDesktop(false);

            }

        }

        const intervalFunction = setInterval(() => {

            checkWidth();

        }, 500)

        setTimeout(() => {

            clearInterval(intervalFunction);

        }, 5000)

    }, []);

    return (

        <>
        
            <div className="w-full relative mb-20 max-smCustom:mb-0 font-montSerrat font-bold text-center">

                {isDesktop && (

                <>
                    
                    <video
                        autoPlay
                        loop
                        className='w-full h-[200px] max-smCustom:h-[150px] object-cover absolute z-0 footerVideo'
                        playsInline
                        muted
                        >

                            <source 
                                src='/CTA/CTA_Background.mp4'
                                type='video/mp4'
                            />
                        
                    </video>

                </>

                )}

                {!isDesktop && (

                    <img 
                        src='/CTA/CTA.webp' 
                        
                        className='w-full h-[200px] max-smCustom:h-[150px] object-cover absolute z-0 footerVideo'
                    />

                )}

                <p
                    className='text-[45px] z-20 relative pt-10 max-smCustom:text-[25px]'
                > We at connekt,</p>

                <p
                    className='text-[30px] relative pb-10 max-smCustom:text-[18px]'
                > Connecting Ideas To Success</p>

            </div>

            <div className="w-full bg-blackCustom flex justify-around text-white font-montSerrat font-bold tracking-wider max-smCustom:block">

                <div className="mt-10 space-y-5 max-smCustom:space-y-2 max-smCustom:pt-10 max-smCustom:mx-3">

                    <p
                        className='max-smCustom:text-[12px]'
                    > powered by</p>

                    <img 
                        src='/Footer/Footer_Logo.webp'
                        
                        className='w-[250px] h-[80px] rounded-xl hover:w-[270px] hover:h-[90px] max-smCustom:hover:w-[140px] max-smCustom:hover:h-[40px] transition-all duration-300 max-smCustom:w-[140px] max-smCustom:h-[40px] '
                    />
                    
                </div>

                <div className="my-10 max-smCustom:my-5 max-smCustom:mx-3">

                    <p
                        className='text-yellowCustom2 text-[25px] mb-5 max-smCustom:mb-3
                        max-smCustom:text-[18px]'
                    >

                        Services

                    </p>

                    <ul
                        className='space-y-5 max-smCustom:space-y-3 text-[14px] max-smCustom:text-[12px]'
                    >

                        <li
                            className='servicesFooter cursor-pointer hover:text-greenCustom2 transition-all duration-300'
                            onClick={(e, url) => footerNavigationFunction(e, '/dive-in/web-design-service')}
                        >Website / Web App Designing</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-greenCustom2 transition-all duration-300'
                            onClick={(e, url) => footerNavigationFunction(e, '/dive-in/web-development-service')}
                        >Website / Web App Developement</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-greenCustom2 transition-all duration-300'
                            onClick={(e, url) => footerNavigationFunction(e, '/dive-in/web-maintenance-service')}
                        >Website / Web App Maintanence</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-greenCustom2 transition-all duration-300'
                            onClick={(e, url) => footerNavigationFunction(e, '/dive-in/search-engine-optimization')}
                        >Search Engine Optimization ( SEO )</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-greenCustom2 transition-all duration-300'
                            onClick={(e, url) => footerNavigationFunction(e, '/dive-in/social-media-advertisements')}
                        >Social Media Advertisements</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-greenCustom2 transition-all duration-300'
                            onClick={(e, url) => footerNavigationFunction(e, '/dive-in/whatsapp-api-solutions')}
                        >WhatsApp API Solutions</li>
                        <li
                            className='servicesFooter cursor-pointer hover:text-greenCustom2 transition-all duration-300'
                            onClick={(e, url) => footerNavigationFunction(e, '/dive-in/call-engaging-solutions')}
                        >Call Engaging Solutions</li>

                    </ul>

                </div>

                <div className="mt-10 space-y-5 max-smCustom:mt-3 max-smCustom:mx-3 max-smCustom:pb-3">

                    <p
                        className='text-blueCustom max-smCustom:text-[18px]'
                    >
                        
                        Follow Us

                    </p>

                    <div
                        className='flex space-x-5 max-smCustom:space-x-3'
                    >

                        <div className=" space-y-5 max-smCustom:space-y-3">

                            <FaInstagram 
                                className='text-white text-[45px]  hover:text-pink-500 rounded-xl transition-all duration-[300ms] hover:text-[50px] cursor-pointer'
                                onClick={(e, url) => footerIconsFunction(e, 'https://www.instagram.com/connekt_in/')}
                            />

                            <BsFacebook 
                                className='text-[40px] hover:text-blue-600  text-white transition-all duration-[400ms] ml-1 hover:text-[50px] cursor-pointer'
                                onClick={(e, url) => footerIconsFunction(e, 'https://www.facebook.com/connekt.in.official')}
                                
                            />

                            <FaYoutube 
                                className='text-[40px] hover:text-red-600  text-white transition-all duration-[400ms] ml-1 hover:text-[50px] cursor-pointer'
                                onClick={(e, url) => footerIconsFunction(e, 'https://www.youtube.com/@connekt_in')}
                            />

                        </div>

                        <div className=" space-y-5">

                            <IoLogoLinkedin 
                                className='text-[45px]  hover:text-blue-400 rounded-xl transition-all duration-[400ms] hover:text-[50px] cursor-pointer'
                                onClick={(e, url) => footerIconsFunction(e, 'https://www.linkedin.com/company/connekt-in/posts/?feedView=all')}
                            />

                            <FaSquareXTwitter 
                                className='text-[40px] hover:text-black  text-white hover:bg-white hover:rounded-xl transition-all duration-[400ms] ml-1 hover:text-[50px] cursor-pointer'
                                onClick={(e, url) => footerIconsFunction(e, 'https://x.com/connekt_in?t=0dnyy67rz7nbSPrUHdoRtQ&s=08')}
                            />

                        </div>
                    
                    </div>

                </div>

            </div>

            <div className="text-gray-400 font-semibold text-[15px] w-full flex justify-around max-smCustom:block text-center bg-blackCustom max-smCustom:text-[10px]">

                <p className=''>  Website designed/developed by Gokul and Surya. </p>
            
                <p>&#169; 2024 connekt.in. All rights reserved.</p>

                <p>Privacy Policy | Terms of Service</p>

            </div>

        </>

    )

}

export default Footer