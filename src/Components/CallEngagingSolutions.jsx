import React, { useEffect } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const CallEngagingSolutions = () => {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (

        <>

            <NavBar />
        
            <div className="pt-[100px] w-full text-center">

                <div className="bg-greenCustom inline-block px-5 py-2 rounded-2xl text-[25px] font-bold font-montSerrat mt-[50px]">

                    Overview

                </div>

            </div>

            <div className="w-full flex justify-center">

                <div className="bg-yellowCustom my-[50px] w-[1400px] rounded-2xl pb-[50px] max-mdCustom:w-[800px]">

                    <div className="flex justify-center items-center h-[400px] space-x-[300px] max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-y-5 max-mdCustom:h-auto max-mdCustom:mt-[50px] max-mdCustom:items-center">

                        <img 
                            src='/Services/Call_Engaging_Solutions.png'
                            className='w-[400px] max-mdCustom:mx-auto hover:w-[420px] transition-all duration-300'
                        />

                        <p
                            className='font-bold font-montSerrat text-[48px] w-[600px] max-mdCustom:relative right-[140px]'
                        >

                            Call Engagement Solutions <br />
                            
                            <span
                                className='text-[22px]'
                            >

                                Connecting with Customers Like Never Before

                            </span>

                        </p>

                    </div>

                    <div className="space-y-10 mt-10 mx-20">

                        <p
                            className='text-[22px] font-montSerrat'
                        >


                            In today's fast-paced world, effective communication is key to building strong relationships with your customers. Our Call Engagement Solutions are designed to enhance your communication strategy, making interactions seamless and impactful. <br /><br />

                            Why Call Engagement Matters: Engaging with your customers through effective communication not only boosts brand loyalty but also increases conversion rates. Our solutions ensure that your messages reach the right audience in the most engaging manner. <br /><br />

                            <span
                                className='font-bold'
                            >

                                What We Offer: <br /><br />

                            </span>

                            1. Telemarketing with Audio: <br /><br />

                            What We Do: We create and deliver audio messages for business offers, promotions, and important announcements. 

                            Why It Matters: Engaging audio captures attention, making your communications more memorable and effective. <br /><br />



                            2. Huge Call Conferences: <br /><br />

                            What We Do: We facilitate large-scale call conferences, enabling you to connect with multiple participants efficiently. 

                            Why It Matters: This feature is perfect for team meetings, client presentations, and collaborative discussions, ensuring everyone stays informed. <br /><br />



                            3. Interactive Voice Response System (IVRS) Services: <br /><br />

                            What We Do: We implement IVRS solutions that allow customers to navigate your services through voice prompts. 

                            Why It Matters: IVRS enhances customer experience by providing quick access to information, reducing wait times and improving satisfaction. <br /><br />



                            4. Bulk SMS Campaigns: <br /><br />

                            What We Do: We manage bulk SMS services to send out promotions, updates, and essential announcements to your audience. 

                            Why It Matters: SMS campaigns have a high open rate, ensuring your messages reach customers directly and promptly. <br /><br />

                        </p>

                    </div>

                </div>

            </div>

            <div className="w-full flex justify-center">

                <div className="bg-greenCustom my-[50px] w-[1400px] rounded-2xl pb-[50px] max-mdCustom:w-[800px]">

                    <div className="space-y-10 mt-10 mx-20">

                        <p
                            className='text-[22px] font-bold font-montSerrat'
                        >

                            Our Recipe for Effective Call Engagement: <br />

                        </p>

                        <p
                            className='text-[22px] font-montSerrat'
                        >

                            Engaging Content: We craft compelling audio messages that resonate with your audience. <br /><br />

                            Seamless Coordination: Our solutions ensure smooth communication during conferences and calls. <br /><br />

                            Quick Information Access: IVRS simplifies customer interactions, making it easier for them to get the information they need. <br /><br />

                            Direct Reach: Bulk SMS campaigns keep your audience informed and engaged with your latest offerings. <br /><br />


                            With our Call Engagement Solutions, you’ll enhance your communication strategy, build stronger customer relationships, and drive better results for your business. <br /><br />

                        </p>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    )

}

export default CallEngagingSolutions