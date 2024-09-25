import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import './CSS/WebDesign.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Web_App_Maintenance = () => {

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
                    src='/Common/green-left.webp'
                    loading='lazy'
                />

                </div>

            </div>

            <div className="w-full flex justify-center bg-yellowCustom ">

                <div className="my-[50px] overViewButton bg-white w-[1100px] rounded-[30px] pb-[50px] max-mdCustom:w-[800px] max-smCustom:w-full max-smCustom:mx-10">

                    <div className=" flex justify-center items-center h-[400px] space-x-[100px] max-mdCustom:space-x-0 max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-y-5 max-mdCustom:h-auto max-mdCustom:mt-[50px] max-mdCustom:items-center max-smCustom:space-x-0 max-smCustom:mx-10">

                        <img 
                            src='/Services/Website_Desigining.webp'
                            className='w-[400px] max-mdCustom:mx-auto transition-all duration-300'
                            loading='lazy'
                        />

                            <p
                                className='font-bold font-montSerrat text-[30px] w-[500px] max-mdCustom:w-full max-smCustom:w-full max-smCustom:text-[18px] max-smCustom:static max-mdCustom:text-center'
                            >

                            Website & Web App Maintenance <br />
                            
                            <span
                                className='text-[22px] max-smCustom:text-[16px]'
                            >
                                
                                Keeping Your Digital Presence Flawless.

                            </span>

                        </p>

                    </div>

                    <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                        <p
                            className=' max-smCustom:text-[16px] font-inknutAntiqua text-[18px]'
                        >

                            Once your website or web app is live, our job isn’t done. We offer comprehensive maintenance services to ensure that everything runs smoothly and securely. Think of us as your digital caretakers, always on standby to tackle any issues and keep your online presence in top shape. <br /><br />

                            Why Maintenance Matters: Regular maintenance is crucial for performance, security, and user satisfaction. Just like a car needs regular servicing, your website or web app requires consistent care to function optimally and protect against potential threats.

                            <br /><br />

                            <span
                                className='font-bold font-montSerrat'
                            >

                                What We Cover:
                                
                            </span>

                            <br /><br />

                            <span
                                className='font-bold font-montSerrat'
                            >1. Bug Fixes: </span>

                            What We Do: We monitor your website or app for any bugs or glitches and resolve them promptly.

                            Why It Matters: Quick fixes ensure a seamless experience for your users, preventing frustration and keeping your reputation intact.

                            <br /><br />



                            <span
                                className='font-bold font-montSerrat'
                            >2. Performance Monitoring: </span>

                            What We Do: We regularly assess the speed and performance of your website or app to identify areas for improvement.

                            Why It Matters: Faster loading times lead to better user experiences and improved search engine rankings.

                            <br /><br />

                            <span
                                className='font-bold font-montSerrat'
                            >3. Security Updates: </span>

                            What We Do: We implement necessary security patches and updates to protect your site from vulnerabilities.

                            Why It Matters: Keeping your site secure safeguards your data and builds trust with your users.

                            <br /><br />

                            <span
                                className='font-bold font-montSerrat'
                            >4. Content Updates: </span>

                            What We Do: We help you keep your content fresh and relevant, whether it’s adding new blog posts, images, or product information.

                            Why It Matters: Regularly updated content engages users and boosts your SEO performance.

                            <br /><br />

                            <span
                                className='font-bold font-montSerrat'
                            >5. Server & Network Maintenance: </span>

                            What We Do: We handle server configurations, backups, and monitor network health to ensure everything runs smoothly.

                            Why It Matters: A reliable server and network connection are crucial for maintaining uptime and ensuring your site is accessible at all times.

                            <br /><br />

                            <span
                                className='font-bold font-montSerrat'
                            >6. User Experience Improvements: </span>

                            What We Do: Based on user feedback and analytics, we suggest and implement enhancements to improve usability.

                            Why It Matters: A better user experience leads to higher satisfaction and retention rates.

                            <br /><br />

                            <span
                                className='font-bold font-montSerrat'
                            >7. Analytics Reporting: </span>

                            What We Do: We provide regular reports on site performance, user behavior, and other key metrics.

                            Why It Matters: Understanding how your site is performing helps you make informed decisions for future improvements.

                        </p>

                    </div>

                </div>

            </div>

            <div className="w-full bg-greenCustom my-20 flex justify-center">

            <div className="overViewButton bg-white my-[50px] w-[1100px] rounded-[30px] pb-[50px] max-mdCustom:w-[800px] max-smCustom:w-full max-smCustom:mx-10  max-smCustom:space-x-0">

                <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                    <p
                        className='text-[22px] font-semibold font-montSerrat'
                    >

                            Our recipe for Website & Web App Maintenance:

                        </p>

                        <p
                            className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                        >

                        
                            <b className='font-montSerrat'>Proactive Monitoring:</b> Keeping an eye on your site around the clock.

                            <br /><br />

                            <b className='font-montSerrat'>Timely Updates:</b> Ensuring everything stays current and secure.

                            <br /><br />

                            <b className='font-montSerrat'>User-Centric Approach:</b> Focusing on what matters most to your users.

                            <br /><br />

                            <b className='font-montSerrat'> Transparent Communication: </b> Regular updates on what we’re doing and why it matters.

                            <br /><br />


                            By entrusting us with your website or web app maintenance, you can focus on running your business while we handle the technical details, ensuring your digital presence remains robust, secure, and user-friendly.

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

export default Web_App_Maintenance