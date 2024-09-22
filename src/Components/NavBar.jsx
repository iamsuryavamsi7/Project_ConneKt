import React, { useEffect, useState } from 'react'
import '../Components/CSS/NavBar.css'
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar = () => {

    const navigate = useNavigate();

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

                } else {

                    navBar.style.height = '350px';

                }

            }

        }

        if ( innerPageWidth <= 600 ) {

            if ( navBar ) {

                const currentHeight = navBar.style.height;

                if ( currentHeight === '400px' ) {

                    navBar.style.height = '0px';

                } else {

                    navBar.style.height = '400px';

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

    return (

        <>

            <div className="fixed z-50 right-10 bottom-10 max-smCustom:right-3 max-smCustom:bottom-3">

                <img
                    src='/Nav_Bar/chat_with_us.png' 
                    className='h-[50px] w-auto rounded-2xl cursor-pointer animate-bounce'
                />

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

                <div className="navBar mr-[150px] max-mdCustom:absolute top-[100px] max-smCustom:top-[58px] max-mdCustom:right-[-100px] max-mdCustom:bg-white rounded-b-xl max-mdCustom:pr-[25px] max-mdCustom:h-[0px] max-mdCustom:overflow-hidden transition-all duration-300 max-smCustom:w-full max-smCustom:left-[0] max-smCustom:right-0] max-smCustom:animate-none"> 

                    <ul
                        className='flex h-full items-center space-x-10 text-xl font-inknutAntiqua max-mdCustom:space-x-7 max-mdCustom:block max-mdCustom:space-y-10 max-mdCustom:text-center max-smCustom:space-y-7 max-smCustom:text-[18px] max-smCustom:pt-10 '
                    >

                        {pageForDesktop && (

                            <li
                                className='relative'
                                onMouseOver={() => {

                                    const serviceDropDown = document.querySelector('.servicesClass');

                                    serviceDropDown.style.height = '300px';
                                    serviceDropDown.style.padding = '12px 0';

                                }}
                                onMouseLeave={() => {

                                    const serviceDropDown = document.querySelector('.servicesClass');

                                    serviceDropDown.style.height = '0';
                                    serviceDropDown.style.padding = '0';

                                }}
                                >

                                <button
                                    className='button_01 max-mdCustom:ml-[25px] max-smCustom:transition-none transition-all'
                                    
                                > Services 

                                </button>

                                <div className="servicesClass absolute text-[14px] w-[305px] h-0 overflow-hidden bg-white flex justify-start transition-all duration-300 left-[-20px] rounded-b-xl top-[120%]"
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

                        {!pageForDesktop && (

                            <li
                                className='relative'
                                onClick={() => {

                                    const serviceDropDown = document.querySelector('.servicesClass');

                                    if ( serviceDropDown.style.height === '0px' ) {

                                        serviceDropDown.style.height = '300px';
                                        serviceDropDown.style.padding = '12px 0px';

                                        const navBar = document.querySelector('.navBar');

                                    } else {

                                        serviceDropDown.style.height = '0px';
                                        serviceDropDown.style.padding = '0px';

                                    }

                                }}
                                >

                                <button
                                    className='button_01 max-mdCustom:ml-[25px] max-smCustom:transition-none transition-all'
                                    
                                > Services 

                                </button>

                                <div className="servicesClass text-[14px] w-[305px] h-0 overflow-hidden bg-white flex justify-start transition-all duration-300 left-[-20px] rounded-b-xl top-[120%] max-smCustom:relative max-smCustom:left-[25px]"
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