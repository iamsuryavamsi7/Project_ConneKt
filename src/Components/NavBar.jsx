import React, { useEffect } from 'react'
import '../Components/CSS/NavBar.css'
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

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

                if ( currentHeight === '300px' ) {

                    navBar.style.height = '0px';

                } else {

                    navBar.style.height = '300px';

                }

            }

        }

        if ( innerPageWidth <= 600 ) {

            if ( navBar ) {

                const currentHeight = navBar.style.height;

                if ( currentHeight === '250px' ) {

                    navBar.style.height = '0px';

                } else {

                    navBar.style.height = '250px';

                }

            }

        }

    }

    const dropdownFunction = (e, url) => {

        e.preventDefault();

        navigate(url);

    }

    const contactFunction = (e) => {

        e.preventDefault();

        navigate('/contact')

    }

    const aboutFunction = (e) => {

        e.preventDefault();

        navigate("/about")

    }

    const plansFunction = (e) => {

        e.preventDefault();

        navigate('/plans');

    }

    const earnWithUsFunction = (e) => {

        e.preventDefault();

        navigate('/earn-with-us');

    }

    return (

        <>

            <div className="fixed z-50 right-10 bottom-10">

                <img
                    src='/Nav_Bar/chat_with_us.png' 
                    className='h-[50px] w-auto rounded-2xl cursor-pointer animate-bounce'
                />

            </div>
        
            <div className="flex justify-around w-full h-[100px] items-center bg-white z-50 fixed max-mdCustom:justify-start max-smCustom:justify-between max-smCustom:fixed">

                <div className="ml-[100px] max-smCustom:ml-4">

                    <img 
                        className='w-[300px] h-[60px] max-mdCustom:w-[200px] max-mdCustom:h-[50px] max-smCustom:animate-none cursor-pointer'
                        src='/Nav_Bar/Connekt_Logo.png'
                        alt='Company Logo'
                        onClick={(e) => companyLogoFunction(e)}
                    />

                </div>

                <GiHamburgerMenu 
                    className='hamburger w-[45px] h-[45px] fixed z-50 right-20 top-6 text-black min-mdCustom:hidden cursor-pointer max-smCustom:right-4 max-smCustom:animate-none'
                    onClick={hamburgerFunction}
                />

                <div className="navBar mr-[150px] max-mdCustom:absolute top-[100px] max-mdCustom:right-[-100px] max-mdCustom:bg-white max-mdCustom:pr-[25px] max-mdCustom:h-[0px] max-mdCustom:overflow-hidden transition-all duration-300 max-smCustom:w-full max-smCustom:left-[0] max-smCustom:right-0] max-smCustom:animate-none"> 

                    <ul
                        className='flex h-full items-center space-x-10 text-xl font-inknutAntiqua max-mdCustom:space-x-7 max-mdCustom:block max-mdCustom:space-y-10 max-mdCustom:text-center max-smCustom:space-y-5 max-smCustom:text-[18px] '
                    >

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

                            <div className="servicesClass absolute text-[14px] w-[350px] h-0 overflow-hidden bg-white flex justify-center transition-all duration-500 left-[-45px]"
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
                        <li><button
                            className='button_02 max-smCustom:transition-none cursor-pointer'
                            onClick={(e) => plansFunction(e)}
                        > Plans </button></li>
                        <li><button
                            className='button_03 max-smCustom:transition-none'
                            onClick={(e) => aboutFunction(e)}
                        > About </button></li>
                        <li><button
                            className='button_04 max-smCustom:transition-none'
                            onClick={(e) => earnWithUsFunction(e)}
                        > Earn With Us </button></li>
                        <li><button
                            className='button_05 max-smCustom:transition-none cursor-pointer'
                            onClick={(e) => contactFunction(e)}
                        > Contact </button></li>

                    </ul>

                </div>

            </div>

        </>

    )

}

export default NavBar