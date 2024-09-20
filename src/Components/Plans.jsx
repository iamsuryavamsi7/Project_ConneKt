import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './CSS/Plans.css'
import { useNavigate } from 'react-router-dom'

const Plans = () => {

    const navigate = useNavigate();

    const journeyFunction = (e) => {

        e.preventDefault();

        navigate('/contact');

    }

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (

        <>
        
            <NavBar />

            <div className="pt-[150px] flex-1">

                <div className="grid grid-cols-4 gap-x-5 mx-10 max-mdCustom:grid-cols-2 max-mdCustom:gap-y-5 max-smCustom:grid-cols-1">

                    <div className="bg-pink-200 flex justify-center border-4 border-black rounded-2xl hover:border-sky-500 transition-all duration-300">

                        <div className="">

                            <div className="mx-10 my-10 text-center font-inknutAntiqua">

                                <div className="bg-pink-300 px-3 pt-4 rounded-2xl font-montSerrat mb-5">

                                    <b
                                        className='text-[25px]'
                                    >Launch Kit</b> <br />

                                    Ideal for small businesses and start ups ready to kick off their online journey <br /><br />

                                </div>

                                Website/Web Application Designing <br /> <br />

                                Website/Web Application Development <br /> <br />

                                Free One Month Maintanence ( Including Updates, Bug Fixes, Security Checks ) <br /> <br />

                                Price: just starting? Let's make it affordable! Reach out for special rate tailed just for you! <br /> <br />

                                Duration: quick turn around 1-2 months<br /><br />

                                Note: Add-Ons available to enhance your package, including whatsapp API management, Call-Engaging Solutions and Social Media Ad Campaigns

                            </div>

                        </div>

                    </div>

                    <div className="bg-yellow-100 flex justify-center border-4 border-black rounded-2xl hover:border-green-500 transition-all duration-300">

                        <div className="mx-10 my-10 text-center font-inknutAntiqua">

                            <div className="bg-yellow-300 px-3 pt-4 rounded-2xl mb-5 font-montSerrat">

                                <b
                                    className='text-[25px]'
                                >Boost Kit</b> <br />

                                Ideal for Businesses looking to level up there online presence <br /><br />

                            </div>

                            Custom Website/Web App Designing <br /> <br />

                            Custom Website/Web Application Development <br /> <br />

                            Advanced SEO Setup for better visibility <br /> <br />

                            Free Three Month's Maintanence ( Including Updates, Bug Fixes, Security Checks ) <br /> <br />

                            Meta Ads Management for Three Month's to boost your reach <br /><br />

                            Price: Great Value for growth! Contact us for competetive pricing that fits your budget, We know every penny matters<br/><br/> 
                            
                            Duration: 3-4 months<br /><br />

                            Note: Enhance your package with options like WhatsApp Business Verification, WhatsApp API Integration and Call Engaging Solutions.

                        </div>

                    </div>

                    <div className="bg-green-100 flex justify-center border-4 border-black rounded-2xl hover:border-yellow-500 transition-all duration-300">

                        <div className="mx-10 my-10 text-center font-inknutAntiqua">

                            <div className="bg-green-300 px-3 pt-4 rounded-2xl mb-5 font-montSerrat">

                                <b
                                    className='text-[25px]'
                                >Ultimate Suite</b> <br />

                                Ideal for Businesses aiming for full digital package <br /><br />

                            </div>

                            End-To-End Website/Web App Design and Development <br/><br />

                            Premium SEO and Analytics to dominate the search game <br /> <br />

                            unlimited Maintenance for 6 Month's ( Including Updates, Bug Fixes, Security Checks, You Name It ) <br /> <br />

                            Meta Ads Management and Social Media Compaigns <br /><br />

                            WhatsApp Business Verification, WhatsApp API Integration and Call Engaging Solutions and - all included<br/><br/>

                            Price: Premium Package for Serious Players! Inquire for pricing details to elevate your brand<br/><br/> 
                            
                            Duration: 6-7 months<br /><br />

                            Note: This package includes everything with no additional add-ons needed! 

                        </div>

                    </div>

                    <div className="bg-blue-100 flex justify-center border-4 border-black rounded-2xl hover:border-pink-500 transition-all duration-300">

                        <div className="mx-10 my-10 text-center font-inknutAntiqua">

                            <div className="bg-blue-300 px-3 pt-4 rounded-2xl mb-5 font-montSerrat">

                                <b
                                    className='text-[25px]'
                                > Custom Kit </b> <br />

                                Ideal for Businesses seeking a unique personalised solutions! <br /><br />

                            </div>

                            Fully Customizable Website/Web App Design and Development <br/><br />

                            Flexible SEO Strategy to target your audience<br /> <br />

                            On-going Maintenance as needed ( Monthly updates or real time support )<br/><br/>
                            
    
                            Unique Design Elements that reflect your brand, with options for WhatsApp Business Verification, WhatsApp API Integration and Call Engaging Solutions and Customized Add Campaigns<br/><br/>

                            Price: Let's find the perfect feet for your budget! Contact us to discuss your need's and recieve a personalised quote <br/><br/> 
                            
                            Duration: Timelines tailored to fit your project's complexity <br /><br />

                            Note: Customized every aspect to create a solution that grows with your business. Add options like WhatsApp business verification, WhatsApp API Integration and Call Engaging Solutions as needed!. Let's build something great together!

                        </div>

                    </div>

                </div>

                <div className="w-full h-10 flex justify-center mt-10 mb-[160px]">

                    <div 
                        className="journey text-[20px] bg-pink-200 px-3 py-1 rounded-xl font-inknutAntiqua font-semibold"
                        onClick={(e) => journeyFunction(e)}
                    >

                        Start Your Journey

                    </div>

                </div>
                
            </div>

            <Footer />
        
        </>

    )

}

export default Plans