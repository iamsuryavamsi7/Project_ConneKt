import React, { useEffect } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Web_App_Maintenance = () => {

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
                            src='/Services/Website_Maintanence.png'
                            className='w-[400px] max-mdCustom:mx-auto hover:w-[420px] transition-all duration-300'
                        />

                        <p
                            className='font-bold font-montSerrat text-[48px] w-[500px] max-mdCustom:relative right-[140px]'
                        >

                            Website & Web App Maintenance <br />
                            
                            <span
                                className='text-[22px]'
                            >
                                
                                Keeping Your Digital Presence Flawless.

                            </span>

                        </p>

                    </div>

                    <div className="space-y-10 mt-10 mx-20">

                        <p
                            className='font-montSerrat text-[22px]'
                        >

                            Once your website or web app is live, our job isn’t done. We offer comprehensive maintenance services to ensure that everything runs smoothly and securely. Think of us as your digital caretakers, always on standby to tackle any issues and keep your online presence in top shape. <br /><br />

                            Why Maintenance Matters: Regular maintenance is crucial for performance, security, and user satisfaction. Just like a car needs regular servicing, your website or web app requires consistent care to function optimally and protect against potential threats.

                            <br /><br />

                            <span
                                className='font-bold'
                            >

                                What We Cover:
                                
                            </span>

                            <br /><br />

                            1. Bug Fixes:

                            What We Do: We monitor your website or app for any bugs or glitches and resolve them promptly.

                            Why It Matters: Quick fixes ensure a seamless experience for your users, preventing frustration and keeping your reputation intact.

                            <br /><br />



                            2. Performance Monitoring:

                            What We Do: We regularly assess the speed and performance of your website or app to identify areas for improvement.

                            Why It Matters: Faster loading times lead to better user experiences and improved search engine rankings.

                            <br /><br />

                            3. Security Updates:

                            What We Do: We implement necessary security patches and updates to protect your site from vulnerabilities.

                            Why It Matters: Keeping your site secure safeguards your data and builds trust with your users.

                            <br /><br />

                            4. Content Updates:

                            What We Do: We help you keep your content fresh and relevant, whether it’s adding new blog posts, images, or product information.

                            Why It Matters: Regularly updated content engages users and boosts your SEO performance.

                            <br /><br />

                            5. Server & Network Maintenance:

                            What We Do: We handle server configurations, backups, and monitor network health to ensure everything runs smoothly.

                            Why It Matters: A reliable server and network connection are crucial for maintaining uptime and ensuring your site is accessible at all times.

                            <br /><br />

                            6. User Experience Improvements:

                            What We Do: Based on user feedback and analytics, we suggest and implement enhancements to improve usability.

                            Why It Matters: A better user experience leads to higher satisfaction and retention rates.

                            <br /><br />

                            7. Analytics Reporting:

                            What We Do: We provide regular reports on site performance, user behavior, and other key metrics.

                            Why It Matters: Understanding how your site is performing helps you make informed decisions for future improvements.

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

                            Our recipe for Website & Web App Maintenance:

                        </p>

                        <p
                            className='text-[22px] font-montSerrat'
                        >

                        
                            Proactive Monitoring: Keeping an eye on your site around the clock.

                            <br /><br />

                            Timely Updates: Ensuring everything stays current and secure.

                            <br /><br />

                            User-Centric Approach: Focusing on what matters most to your users.

                            <br /><br />

                            Transparent Communication: Regular updates on what we’re doing and why it matters.

                            <br /><br />


                            By entrusting us with your website or web app maintenance, you can focus on running your business while we handle the technical details, ensuring your digital presence remains robust, secure, and user-friendly.

                        </p>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    )

}

export default Web_App_Maintenance