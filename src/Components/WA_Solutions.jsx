import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const WA_Solutions = () => {

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
        
            <div className="pt-[70px] mb-10 w-full text-center">

                <div className=" inline-block px-5 py-2 rounded-[30px] text-[30px] max-smCustom:text-[25px] font-semibold font-montSerrat mt-[50px] max-smCustom:mt-[0px] relative">

                    Overview

                <img 
                    className='w-[50px] h-auto rotate-[110deg] absolute right-[-25px] top-[-10px] green_image'
                    src='/Common/green-left.webp'
                   
                />

                </div>

            </div>

            <div className="w-full flex justify-center bg-yellowCustom ">

                <div className="my-[50px] overViewButton bg-white w-[1100px] rounded-[30px] pb-[50px] max-mdCustom:w-[800px] max-smCustom:w-full max-smCustom:mx-10">

                    <div className=" flex justify-center items-center h-[400px] space-x-[100px] max-mdCustom:space-x-0 max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-y-5 max-mdCustom:h-auto max-mdCustom:mt-[50px] max-mdCustom:items-center max-smCustom:space-x-0 max-smCustom:mx-10">

                        <img 
                            src='/Services/Whatsapp_API.webp'
                            className='w-[400px] max-mdCustom:mx-auto transition-all duration-300'
                           
                        />

                            <p
                                className='font-bold font-montSerrat text-[30px] w-[500px] max-mdCustom:w-full max-smCustom:w-full max-smCustom:text-[20px] max-smCustom:static max-mdCustom:text-center'
                            >

                            WhatsApp API Management <br />

                            <span
                                className='text-[22px] font-semibold max-smCustom:text-[14px]'
                            >
                            
                                Seamless Communication, Anytime, Anyone, Anywhere 

                            </span>

                        </p>

                    </div>

                    <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                        <p
                            className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                        >


                            In today's fast-paced digital world, effective communication with your customers is crucial. Our WhatsApp API Management service empowers your business to connect seamlessly with your audience, ensuring that you stay relevant and responsive.<br /><br />

                            <span className='font-montSerrat font-bold max-smCustom:text-[18px]'>Why WhatsApp API Matters:</span><br /><br /> WhatsApp is one of the most widely used messaging platforms globally, providing a direct channel to engage with customers. With the WhatsApp API, businesses can automate communication, manage customer inquiries, and send bulk messages efficiently, enhancing customer satisfaction and engagement. <br /><br />

                            <span
                                className='font-bold font-montSerrat max-smCustom:text-[18px]'
                            >

                                What We Cover: <br /><br />

                            </span>

                            <b className=' font-montSerrat max-smCustom:text-[18px] font-semibold'>1. WhatsApp API Integration: </b><br /><br />

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>What We Do: </b><br/><br/>We assist in integrating the WhatsApp API into your existing systems, ensuring a smooth transition and functionality.<br/><br/>

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>Why It Matters: </b><br/><br/>Proper integration allows you to utilize WhatsApp’s features effectively, streamlining communication with your customers. <br /><br />



                            <b className=' font-montSerrat max-smCustom:text-[18px] font-semibold'>2. Verification Assistance: </b> <br /><br/>

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>What We Do: </b><br/><br/>As partners with certified WhatsApp API providers, we guide you through the verification process, ensuring compliance with WhatsApp’s guidelines.<br/><br/>

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>Why It Matters: </b><br/><br/> Verification builds trust with your customers and enhances your brand's credibility on the platform. <br /><br />



                            <b className=' font-montSerrat max-smCustom:text-[18px] font-semibold'>3. Auto Reply Bots Setup:</b><br/><br/>

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>What We Do: </b><br/><br/>We create and configure automated reply bots to handle common inquiries and provide instant responses to customer queries.<br/><br/>

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>Why It Matters: </b><br/><br/>Auto replies enhance customer experience by providing quick answers, freeing up your team for more complex tasks.  <br /><br />



                            <b className=' font-montSerrat max-smCustom:text-[18px] font-semibold'>4. WhatsApp Bulk Messaging: </b><br/><br/>

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>What We Do: </b><br/><br/>We help you set up bulk messaging capabilities, allowing you to send promotional messages, updates, and alerts to multiple customers simultaneously.

                            <br/><br/>

                            <span className='font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>Why It Matters:</span><br/><br/> Bulk messaging ensures that your audience stays informed, driving engagement and conversions. <br /><br />



                            <b className=' font-montSerrat max-smCustom:text-[18px] font-semibold'>5. Personalized Messaging Campaigns: </b><br/><br/>

                            <b className='font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>What We Do:</b> <br/><br/>We design personalized messaging strategies tailored to different customer segments, enhancing relevance and engagement.<br/><br/>

                            <b className='font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>Why It Matters: </b><br/><br/> Personalized communication increases the likelihood of customer interaction and loyalty. <br /><br />



                            <b className=' font-montSerrat max-smCustom:text-[18px] font-semibold'>6. Analytics & Reporting: </b><br/><br/>

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>What We Do: </b><br/><br/>We provide detailed analytics and reports on message delivery, engagement rates, and customer interactions to measure campaign effectiveness. <br/><br/>

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>Why It Matters: </b><br/><br/>Understanding performance metrics allows for continuous improvement and optimization of communication strategies. <br /><br />



                            <b className=' font-montSerrat max-smCustom:text-[18px] font-semibold'>7. Compliance & Best Practices: </b>

                            <br/><br/>

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>What We Do: </b><br/><br/>We ensure that your messaging practices comply with legal regulations and WhatsApp’s policies, promoting responsible communication.

                            <br/><br/>

                            <b className=' font-montSerrat font-semibold text-[20px] max-smCustom:text-[16px]'>Why It Matters: </b><br/><br/> Compliance protects your business from penalties and maintains your brand's reputation.


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

                            Our Recipe for Effective WhatsApp Communication: <br/><br/>

                        </p>

                        <p
                            className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                        >

                            <b className=' font-montSerrat'>Seamless Integration: </b>We start with integrating the WhatsApp API into your existing systems for a smooth workflow.

                            <br/><br/>

                            <b className=' font-montSerrat'>Automated Solutions: </b>Our setup of auto reply bots ensures quick responses to customer inquiries.<br /><br />

                            <b className=' font-montSerrat'>Targeted Messaging: </b>Personalized campaigns keep your audience engaged and informed.

                            <br/><br/>

                            <b className=' font-montSerrat'>Insightful Analytics: </b>We provide regular reports to help you understand the impact of your messaging efforts.<br /><br />


                            With our WhatsApp API Management service, we help you leverage the power of WhatsApp to create meaningful connections with your customers, driving engagement and satisfaction.

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

export default WA_Solutions