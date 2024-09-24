import React, { useEffect, useState } from 'react'
import '../Components/CSS/NavBar.css'
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiOutlineThunderbolt } from 'react-icons/ai';

const NavBar = () => {

    const navigate = useNavigate();

    const [currentWidth, setCurrentWidth] = useState(null);

    const companyLogoFunction = (e) => {

        navigate("/")

        console.log("Navigated to Home Page")

    }

    const hamburgerFunction = () => {

        console.log("humburgerFunction() called");

        const navBar = document.querySelector('.navBar');

        const innerPageWidth = window.innerWidth;

        if ( innerPageWidth > 600 && innerPageWidth <= 1000 ) {

            if ( navBar ){

                const currentHeight = navBar.style.height;

                if ( currentHeight === '350px' ) {

                    navBar.style.height = '0px';

                    navBar.style.opacity = '0px';


                } else {

                    navBar.style.height = '360px';

                    navBar.style.opacity = '1';

                }

            }

        }

        if ( innerPageWidth <= 600 ) {

            if ( navBar ) {

                const currentHeight = navBar.style.height;

                const servicesClass = document.querySelector('.servicesClass');

                if ( currentHeight === '320px' ) {

                    navBar.style.height = '0px';

                    navBar.style.opacity = '0';

                    servicesClass.style.height = '0px';

                } else {

                    navBar.style.height = '320px';

                    navBar.style.opacity = '1';

                }

            }

        }

    }

    const dropdownFunction = (e, url) => {

        e.preventDefault();

        const navigationFunction = setInterval(() => {

            navigate(url);

        }, 300);

        setTimeout(() => {

            clearInterval(navigationFunction);

        }, 400)

    }

    const navBarNavigationFunction = (e, url) => {

        e.preventDefault();

        const navigationFunction = setInterval(() => {
            
            navigate(url);
            
        }, 300);

        setTimeout(() => {
            
            clearInterval(navigationFunction)
            
        }, 400);

    }

    const [pageForDesktop, setPageForDesktop] = useState(true);

    useEffect(() => {

        const checkWidth = () => {

            if ( window.innerWidth <= 1000 ) {

                setPageForDesktop(false);

                console.log("Checking the width " + window.innerWidth);
        
             }

        }

        const settingWidth = setInterval(checkWidth, 500);

        setTimeout(() => {

            clearInterval(settingWidth);
        
            console.log("Stopped checkWidth");
        
        }, 5000);

    }, []);

    const [chatBox, setChatBox] = useState('/Nav_Bar/chat_with_us.png');

    const chatBoxFunction = () => {

        const chatBoxHeight = document.querySelector('.chatBoxHeight');

        if ( chatBox === '/Nav_Bar/chat_with_us.png' ){

            setChatBox('/Nav_Bar/drop_down.png');

            if ( currentWidth >= 600 ) {

                chatBoxHeight.style.height = '250px';

                chatBoxHeight.style.width = '350px';
    
                chatBoxHeight.style.borderWidth = '2px';

            } else if (currentWidth <= 600) {

                chatBoxHeight.style.height = '180px';

                chatBoxHeight.style.width = '270px';
    
                chatBoxHeight.style.borderWidth = '2px';

            }

        } else {

            setChatBox('/Nav_Bar/chat_with_us.png');

            chatBoxHeight.style.height = '0px';

            chatBoxHeight.style.width = '0px';
            
            chatBoxHeight.style.borderWidth = '0px';

        }

    }

    useEffect(() => {

        const checkWidth = setInterval(() => {

            setCurrentWidth(window.innerWidth);

            console.log('innerWidth is setting :' + window.innerWidth);

        }, 500);

        setTimeout(() => {

            clearInterval(checkWidth);

        }, 5000);

    }, []);

    return (

        <>

            <div className="fixed z-50 right-10 bottom-10 max-smCustom:right-3 max-smCustom:bottom-3">

                <img
                    src={chatBox} 
                    className='h-[50px] w-auto rounded-block2xl cursor-pointer animate-bounce'
                    onClick={(e) => chatBoxFunction(e)}
                />

                <div className="chatBoxHeight absolute h-[0px] w-[0px] bg-white transition-all duration-200 rounded-[32px] bottom-[70px] right-[40px] max-smCustom:right-[20px] overflow-hidden block border-black border-0">

                    <div className="text-gray-800 font-semibold w-full flex justify-center items-center space-x-1 text-[14px] max-smCustom:text-[10px] mt-2">

                            <AiOutlineThunderbolt 
                                className=''
                            />
                            <span className='text-[#8d8a8a]'>Powered By</span> 

                        <div className="">
                            
                            connekt.in

                        </div>

                    </div>

                    <div className="block justify-center mx-5">

                        <img
                            src='/Nav_Bar/chat_with_us.png' 
                            className='chatBoxImage h-[50px] max-smCustom:h-[40px] w-auto rounded-2xl cursor-text'
                        />

                    </div>

                    <div className="chatMessage text-[18px] max-smCustom:text-[12px] font-montSerrat mx-5 text-black my-4 max-smCustom:my-2">

                        I checked the website, and I have a few questions to ask    

                    </div>

                    <div className="chatWithUs w-[300px] max-smCustom:w-[215px] max-smCustom:py-3 bg-black  text-white font-montSerrat font-semibold tracking-wider text-[15px] max-smCustom:text-[10px] mx-5 py-3 rounded-xl flex items-center cursor-pointer"
                        onClick={() => {

                            window.open('https://wa.me/918886182384?text=Hey%20connekt%20team!%20I%27m%20on%20your%20website,%20got%20questions,%20need%20answers.%20Let%27s%20chat', '_blank')

                        }}
                    >

                        <div className="mx-5 max-smCustom:mr-3">

                            <IoLogoWhatsapp
                                className='text-white bg-black text-[30px] max-smCustom:text-[20px]'
                            />

                        </div>

                        <div className="">

                            Chat With Us

                        </div>

                    </div>

                </div>

            </div>
        
            <div className="flex justify-around max-mdCustom:justify-between w-full h-[100px] max-smCustom:h-[60px] items-center bg-white z-50 fixed max-smCustom:justify-between">

                <div className="ml-[100px] max-smCustom:ml-4 max-mdCustom:ml-20">

                    <img 
                        className='w-[300px] h-[50px] max-mdCustom:w-[200px] max-mdCustom:h-[50px] 
                        max-smCustom:animate-none cursor-pointer max-smCustom:w-[150px] max-smCustom:h-[30px]'
                        src='/Nav_Bar/Connekt_Logo.png'
                        alt='Company Logo'
                        onClick={(e) => companyLogoFunction(e)}
                    />

                </div>

                <RxHamburgerMenu 
                    className='hamburger text-[40px] text-black min-mdCustom:hidden cursor-pointer  max-smCustom:animate-none max-smCustom:text-[30px] max-mdCustom:fixed max-mdCustom:right-20 max-smCustom:right-7'
                    onClick={hamburgerFunction}
                />

                <div className="navBar mr-[150px] max-mdCustom:absolute top-[100px] max-smCustom:top-[58px] max-mdCustom:right-[-100px] max-mdCustom:bg-white rounded-b-xl max-mdCustom:pr-[25px] max-mdCustom:h-[0px] max-mdCustom:overflow-hidden transition-all duration-300 max-smCustom:w-full max-smCustom:left-0 max-smCustom:right-0 max-smCustom:animate-none"> 

                    <ul
                        className='flex h-full items-center space-x-10 text-xl font-inknutAntiqua max-mdCustom:space-x-7 max-mdCustom:block max-mdCustom:space-y-10 max-mdCustom:text-center max-smCustom:space-y-7 max-smCustom:text-[18px] max-smCustom:pt-10 '
                    >

                        {pageForDesktop && (

                            <li
                                className='relative'
                                onMouseOver={() => {

                                    const serviceDropDown = document.querySelector('.servicesClass');

                                    serviceDropDown.style.height = '345px';
                                    serviceDropDown.style.padding = '12px 0';
                                    serviceDropDown.style.opacity = '1';

                                }}
                                onMouseLeave={() => {

                                    const serviceDropDown = document.querySelector('.servicesClass');

                                    serviceDropDown.style.height = '0';
                                    serviceDropDown.style.padding = '0';
                                    serviceDropDown.style.opacity = '0';

                                }}
                                >

                                <button
                                    className='button_01 max-mdCustom:ml-[25px] max-smCustom:transition-none transition-all'
                                    
                                > Services 

                                </button>

                                <div className="servicesClass absolute text-[14px] w-[305px] h-0 overflow-hidden bg-white flex justify-start transition-all duration-300 left-[-20px] rounded-b-xl top-[130%]"
                                >

                                    <ul
                                        className='space-y-5'
                                    >

                                        <li
                                            className='transition-all text-gray-500 duration-500 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, `/dive-in/web-design-service`)}
                                        > Website / Web App Designing
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-500 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/web-development-service')}
                                        > Website / Web App Developement
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-500 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/web-maintenance-service')}
                                        > Website / Web App Maintanence
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-500 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/search-engine-optimization')}
                                        > Search Engine Optimization ( SEO )
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-500 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/social-media-advertisements')}
                                        > Social Media Advertisements
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-500 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/whatsapp-api-solutions')}
                                        > WhatsApp API Solutions
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-500 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/call-engaging-solutions')}
                                        > Call Engaging Solutions
                                        </li>

                                    </ul>

                                </div>

                            </li>

                        )}

                        {!pageForDesktop && (

                            <li
                                className='relative'
                                onClick={() => {

                                    const serviceDropDown = document.querySelector('.servicesClass');

                                    const navBar = document.querySelector('.navBar');

                                    if ( navBar.style.height === '320px' ) {

                                        navBar.style.height = '400px';

                                        serviceDropDown.style.height = '300px';

                                        serviceDropDown.style.padding = '12px 0px';

                                    } else {

                                        serviceDropDown.style.height = '0px';

                                        serviceDropDown.style.padding = '0px';

                                        navBar.style.height = '320px';


                                    }

                                }}
                                >

                                <button
                                    className='button_01 max-mdCustom:ml-[25px] max-smCustom:transition-none transition-all'
                                    
                                > Services 

                                </button>

                                <div className="servicesClass text-[14px] w-[305px] h-0 overflow-hidden bg-white flex justify-start transition-all duration-300 left-[-20px] rounded-b-xl top-[120%] max-smCustom:relative max-smCustom:left-[5px] max-smCustom:right-0 max-smCustom:w-full max-smCustom:mx-0 max-smCustom:px-0 max-smCustom:text-center max-smCustom:flex max-smCustom:justify-center"
                                >

                                    <ul
                                        className='space-y-3'
                                    >

                                        <li
                                            className='transition-all text-gray-500 duration-300 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, `/dive-in/web-design-service`)}
                                        > Website / Web App Designing
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-300 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/web-development-service')}
                                        > Website / Web App Developement
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-300 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/web-maintenance-service')}
                                        > Website / Web App Maintanence
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-300 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/search-engine-optimization')}
                                        > Search Engine Optimization ( SEO )
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-300 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/social-media-advertisements')}
                                        > Social Media Advertisements
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-300 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/whatsapp-api-solutions')}
                                        > WhatsApp API Solutions
                                        </li>
                                        <li
                                            className='transition-all text-gray-500 duration-300 cursor-pointer hover:text-paleGreen hover:border-b-2 hover:border-paleGreen border-b-2 border-b-white rounded-br-lg rounded-bl-lg pl-5'
                                            onClick={(e, url) => dropdownFunction(e, '/dive-in/call-engaging-solutions')}
                                        > Call Engaging Solutions
                                        </li>

                                    </ul>

                                </div>

                            </li>

                        )}
                        
                        <li><button
                            className='button_02 max-smCustom:transition-none cursor-pointer'
                            onClick={(e, url) => navBarNavigationFunction(e, '/plans')}
                        > Plans </button></li>
                        <li><button
                            className='button_03 max-smCustom:transition-none'
                            onClick={(e, url) => navBarNavigationFunction(e, '/about')}
                        > About </button></li>
                        <li><button
                            className='button_04 max-smCustom:transition-none'
                            onClick={(e, url) => navBarNavigationFunction(e, '/earn-with-us')}
                        > Earn With Us </button></li>
                        <li><button
                            className='button_05 max-smCustom:transition-none cursor-pointer'
                            onClick={(e, url) => navBarNavigationFunction(e, '/contact')}
                        > Contact </button></li>

                    </ul>

                </div>

            </div>

        </>

    )

}

export default NavBar