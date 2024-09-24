import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './CSS/Plans.css'
import { useNavigate } from 'react-router-dom'
import './CSS/Contact.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Plans = () => {

    const navigate = useNavigate();

    const [pageLoading, setPageLoading] = useState(true);

    const journeyFunction = (e) => {

        e.preventDefault();

        const journeyFunctionInterval = setInterval(() => { 

            navigate('/contact'); 

        }, 300);

        setTimeout(() => {

            clearInterval(journeyFunctionInterval);

        }, 400);

    }

    useEffect(() => {

        window.scrollTo(0, 0);

        // Runnin the page loading

        const updatePageLoading = () => {

            setPageLoading(!pageLoading);

        }

        const pageLoadingId = setInterval(updatePageLoading, 1000);

        setTimeout(() => {
        
            clearTimeout(pageLoadingId);
        
        }, 1000);

    }, []);

    return (

        <>

            {!pageLoading && (

                <>
        
                    <NavBar />

                    <div className="pt-[150px] max-smCustom:pt-[100px] mb-10 max-smCustom:mb-5 w-full flex justify-center text-[30px] font-semibold font-montSerrat">

                        <div className="relative max-smCustom:text-[25px]">

                            Our Plans

                            <img 
                                src='/Common/yellow_left.png'
                                loading='lazy'
                                className='w-[50px] h-auto rotate-[-10deg] absolute left-[-45px] top-[-25px] green_image'
                            />
                            
                        </div>

                    </div>

                    <div className=" flex-1">

                        <div className="grid grid-cols-4 gap-x-5 mx-10 max-mdCustom:grid-cols-2 max-mdCustom:gap-y-5 max-smCustom:grid-cols-1">

                            <div className="launchKit relative bg-pink-200 flex justify-center rounded-[30px] hover:border-sky-500 transition-all duration-300">

                                <div className="">

                                    <div className="mx-10 my-10 text-center font-inknutAntiqua max-smCustom:text-[14px] max-smCustom:my-3 max-smCustom:mx-5">

                                        <div className="bg-pink-300 px-3 pt-4 rounded-2xl font-montSerrat mb-5 max-smCustom:text-[12px]">

                                            <b
                                                className='text-[25px] max-smCustom:text-[18px]'
                                            >Launch Kit</b> <br />

                                            Ideal for small businesses and start ups ready to kick off their online journey <br /><br />

                                        </div>

                                        Website/Web Application Designing <span className='font-montSerrat'> & </span> Development <br /><br />

                                        Get your online presence up and running with our affordable launch kit! <br /><br />
                                        
                                        Enjoy one month of free maintenance—updates, bug fixes, and security checks included! <br /><br />

                                        Price: Just starting? We’ve got special rates tailored just for you! <br /><br />

                                        Duration: Quick turnaround in just 1-2 months! <br /><br />

                                        Note: Level up your package with add-ons like Social Media Management, WhatsApp API management, Call-Engaging Solutions, and complete to supercharge your brand's growth! <br /><br />

                                        Let’s get started on your digital journey!

                                    </div>

                                </div>

                            </div>

                            <div className="launchKit bg-yellow-100 flex justify-center relative rounded-[30px]  transition-all duration-300">

                                <div className="mx-10 my-10 text-center font-inknutAntiqua  max-smCustom:text-[14px] max-smCustom:my-3 max-smCustom:mx-5">

                                    <div className="bg-yellow-300 px-3 pt-4 rounded-2xl mb-5 max-smCustom:text-[12px] font-montSerrat">

                                        <b
                                            className='text-[25px] max-smCustom:text-[18px]'
                                        >Boost Kit</b> <br />

                                        Ideal for Businesses looking to level up there online presence <br /><br />

                                    </div>

                                    Custom Website/Web App Designing <span className='font-montSerrat'> & </span> Development <br/><br/>

                                    Unlock your brand's potential with our Boost Kit, featuring Advanced SEO Setup for enhanced visibility!<br/><br/>

                                    Free 6 Months of Maintenance—updates, bug fixes, and security checks included!<br/><br/>

                                    Social Media Management for 6 Months to amplify your reach and engage your audience.<br/><br/>

                                    Price: Great value for growth! Contact us for competitive pricing that fits your budget. We know every penny counts!<br/><br/>

                                    Duration: A solid 6-7 months for a comprehensive transformation.<br/><br/>

                                    Note: Supercharge your package with options like WhatsApp Business Verification, WhatsApp API Integration, and Call Engaging Solutions.<br/><br/>

                                    Let’s take your brand to new heights!

                                </div>

                            </div> 

                            <div className="launchKit bg-green-100 flex justify-center relative rounded-[30px] transition-all duration-300">

                                <div className="mx-10 my-10 text-center font-inknutAntiqua  max-smCustom:text-[14px] max-smCustom:my-3 max-smCustom:mx-5">

                                    <div className="bg-green-300 px-3 pt-4 rounded-2xl mb-5 max-smCustom:text-[12px] font-montSerrat">

                                        <b
                                            className='text-[25px] max-smCustom:text-[18px]'
                                        >Ultimate Suite</b> <br />

                                        Ideal for Businesses aiming for full digital package <br /><br />

                                    </div>

                                        End-To-End Website/Web App Design and Development <br /><br />

                                        Dominate the digital landscape with Premium SEO and Analytics to boost your search visibility!<br /><br />

                                        Unlimited Maintenance for 12 Months—updates, bug fixes, security checks, and more—everything you need!<br /><br />

                                        Complete Social Media Management and targeted campaigns to elevate your brand’s engagement.
                                        <br /><br />
                                        All-Inclusive Features: WhatsApp Business Verification, WhatsApp API Integration, and Call Engaging Solutions are all part of the package!<br /><br />

                                        Price: Premium package for serious players! Inquire for pricing details to take your brand to the next level.<br /><br />

                                        Duration: A comprehensive 12-13 month journey to transform your online presence.<br /><br />

                                        Note: This package includes everything you need—no additional add-ons required!<br /><br />

                                        Get ready to unleash your brand’s full potential!<br /><br />

                                </div> 

                            </div>

                            <div className="launchKit bg-blue-100 flex justify-center rounded-[30px] relative transition-all duration-300">

                                <div className="mx-10 my-10 text-center font-inknutAntiqua  max-smCustom:text-[14px] max-smCustom:my-3 max-smCustom:mx-5">

                                    <div className="bg-blue-300 px-3 pt-4 rounded-2xl mb-5 max-smCustom:text-[12px] font-montSerrat">

                                        <b
                                            className='text-[25px] max-smCustom:text-[18px]'
                                        > Custom Kit </b> <br />

                                        Ideal for Businesses seeking a unique personalised solutions! <br /><br />

                                    </div>

                                        Fully Customizable Website/Web App Design and Development <br /><br />

                                        Craft a unique online presence with a flexible SEO strategy to effectively target your audience!<br /><br />

                                        On-Going Maintenance as needed—monthly updates or real-time support to keep your site running smoothly.<br /><br />

                                        Unique Design Elements that reflect your brand, with options for complete Social Media Management, WhatsApp Business Verification, WhatsApp API Integration, and Call Engaging Solutions!<br /><br />

                                        Price: Let’s find the perfect fit for your budget! Contact us to discuss your needs and receive a personalized quote.<br /><br />

                                        Duration: Timelines tailored to fit your project's complexity.<br /><br />

                                        Note: Customize every aspect to create a solution that grows with your business. Add features like WhatsApp Business Verification and Call Engaging Solutions as needed. Let’s build something great together!<br /><br />

                                </div>

                            </div>

                        </div>

                        <div className="w-full h-10 flex justify-center mt-10 mb-[160px]">

                            <div 
                                className="journey text-[20px] max-smCustom:text-[14px] bg-greenCustom px-3 py-1 rounded-xl font-inknutAntiqua font-semibold cursor-pointer"
                                onClick={(e) => journeyFunction(e)}
                            >

                                Start Your Journey
 
                            </div>

                        </div>
                        
                    </div>

                    <Footer />

                </>

            )}
            
            {pageLoading && (

                <>

                    <div className="w-full fixed bg-white top-0 bottom-0 left-0 right-0 text-[30px] max-smCustom:text-[20px] animate-pulse">

                        <div className="flex justify-center w-full items-center space-x-3 h-full">

                            <div className="">

                                <AiOutlineLoading3Quarters 
                                    className='animate-spin'
                                />

                            </div>

                            <div className=""> 

                                Loading ...

                            </div>

                        </div>

                    </div>

                </>

            )

            }
        
        </>

    )

}

export default Plans