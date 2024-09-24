import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const CallEngagingSolutions = () => {

    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {

        window.scrollTo(0, 0);

        // Runnin the page loading

        const updatePageLoading = () => {

            setPageLoading(false);

        }

        const pageLoadingId = setInterval(updatePageLoading, 3000);

        setTimeout(() => {
            
            clearTimeout(pageLoadingId);
            
        }, 5000);

    }, []);

    return (

        <>

        {!pageLoading && (

            <>

            <NavBar />
        
            <div className="py-[70px] w-full text-center">

                <div className=" inline-block px-5 py-2 rounded-[30px] text-[30px] max-smCustom:text-[25px] font-semibold font-montSerrat mt-[50px] max-smCustom:mt-[0px] relative">

                    Overview

                <img 
                    className='w-[50px] h-auto rotate-[110deg] absolute right-[-25px] top-[-10px] green_image'
                    src='/Common/green-left.png'
                />

                </div>

            </div>

            <div className="w-full flex justify-center bg-yellowCustom ">

                <div className="my-[50px] overViewButton bg-white w-[1100px] rounded-[30px] pb-[50px] max-mdCustom:w-[800px] max-smCustom:w-full max-smCustom:mx-10">

                    <div className=" flex justify-center items-center h-[400px] space-x-[100px] max-mdCustom:space-x-0 max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-y-5 max-mdCustom:h-auto max-mdCustom:mt-[50px] max-mdCustom:items-center max-smCustom:space-x-0 max-smCustom:mx-10">

                        <img 
                            src='/Services/Website_Desigining.png'
                            className='w-[400px] max-mdCustom:mx-auto transition-all duration-300'
                        />

                            <p
                                className='font-bold font-montSerrat text-[30px] w-[500px] max-mdCustom:w-full max-smCustom:w-full max-smCustom:text-[18px] max-smCustom:static max-mdCustom:text-center'
                            >

                            Call Engagement Solutions <br />
                            
                            <span
                                className='text-[22px]  max-smCustom:text-[16px]'
                            >

                                Connecting with Customers Like Never Before

                            </span>

                        </p>

                    </div>

                    <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                        <p
                            className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                        >


                            In today's fast-paced world, effective communication is key to building strong relationships with your customers. Our Call Engagement Solutions are designed to enhance your communication strategy, making interactions seamless and impactful. <br /><br />

                            Why Call Engagement Matters: Engaging with your customers through effective communication not only boosts brand loyalty but also increases conversion rates. Our solutions ensure that your messages reach the right audience in the most engaging manner. <br /><br />

                            <span
                                className='font-bold font-montSerrat'
                            >

                                What We Offer: <br /><br />

                            </span>

                            <b className=' font-montSerrat'>1. Telemarketing with Audio: </b><br /><br />

                            <b className=' font-montSerrat'>What We Do: </b> We create and deliver audio messages for business offers, promotions, and important announcements. 

                            <br /><br />

                            <b className=' font-montSerrat'>Why It Matters: </b>Engaging audio captures attention, making your communications more memorable and effective. <br /><br />



                            <b className=' font-montSerrat'>2. Huge Call Conferences: </b><br /><br />

                            <b className=' font-montSerrat'>What We Do: </b>We facilitate large-scale call conferences, enabling you to connect with multiple participants efficiently. 

                            <br /><br />

                            <b className=' font-montSerrat'>Why It Matters: </b>This feature is perfect for team meetings, client presentations, and collaborative discussions, ensuring everyone stays informed. <br /><br />



                            <b className=' font-montSerrat'>3. Interactive Voice Response System (IVRS) Services: </b><br /><br />

                            <b className=' font-montSerrat'>What We Do: </b>We implement IVRS solutions that allow customers to navigate your services through voice prompts. 

                            <br /><br />

                            <b className=' font-montSerrat'>Why It Matters: </b>IVRS enhances customer experience by providing quick access to information, reducing wait times and improving satisfaction. <br /><br />



                            <b className=' font-montSerrat'>4. Bulk SMS Campaigns: </b><br /><br />

                            <b className=' font-montSerrat'>What We Do: </b>We manage bulk SMS services to send out promotions, updates, and essential announcements to your audience. 

                            <br /><br />

                            <b className=' font-montSerrat'>Why It Matters: </b>SMS campaigns have a high open rate, ensuring your messages reach customers directly and promptly. <br /><br />

                        </p>

                    </div>

                </div>

            </div>

            <div className="w-full bg-greenCustom my-20 flex justify-center">

                <div className="overViewButton bg-white my-[50px] w-[1100px] rounded-[30px] pb-[50px] max-mdCustom:w-[800px] max-smCustom:w-full max-smCustom:mx-10  max-smCustom:space-x-0">

                    <div className="space-y-5 mt-10 mx-20 max-smCustom:mx-5">

                        <p
                            className='text-[22px] font-semibold font-montSerrat' 
                        >

                            Our Recipe for Effective Call Engagement: <br />

                        </p>

                        <p
                            className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                        >

                            <b className=' font-montSerrat'>ging Content: </b>We craft compelling audio messages that resonate with your audience. <br /><br />

                            <b className=' font-montSerrat'>Seamless Coordination: </b>Our solutions ensure smooth communication during conferences and calls. <br /><br />

                            <b className=' font-montSerrat'>Quick Information Access: </b>IVRS simplifies customer interactions, making it easier for them to get the information they need. <br /><br />

                            <b className=' font-montSerrat'>Direct Reach: </b>Bulk SMS campaigns keep your audience informed and engaged with your latest offerings. <br /><br />


                            With our Call Engagement Solutions, you’ll enhance your communication strategy, build stronger customer relationships, and drive better results for your business. <br /><br />

                        </p>

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

export default CallEngagingSolutions