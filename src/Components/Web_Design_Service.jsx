import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import './CSS/WebDesign.css'
import './CSS/Contact.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


const Web_Design_Service = () => {

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

                        <div className=" flex justify-center items-center h-[400px] space-x-[100px] max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-y-5 max-mdCustom:h-auto max-mdCustom:mt-[50px] max-mdCustom:items-center 
                        max-mdCustom:space-x-0
                        max-smCustom:space-x-0 max-smCustom:mx-10">

                            <img 
                                src='/Services/Website_Desigining.webp'
                                className='w-[400px] max-mdCustom:mx-auto transition-all duration-300'
                            />

                            <p
                                className='font-bold font-montSerrat text-[30px] w-[500px] max-mdCustom:w-full max-smCustom:w-full max-smCustom:text-[20px] max-smCustom:static max-mdCustom:text-center'
                            >

                                Website/Web App Designing <br />
                                
                                <span
                                    className='text-[18px] font-semibold max-smCustom:text-[14px]'
                                >
                                
                                    Crafting Digital Experience That Captivate

                                </span>

                            </p>

                        </div>

                        <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                            <p
                                className='text-[22px] max-smCustom:text-[18px] font-bold font-montSerrat'
                            >

                                What is a Website and a Web App?

                            </p>

                            <p
                                className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                            >

                            A website is a collection of related web pages accessible through the internet. It serves as an online presence for businesses, organizations, or individuals, and can include information like company details, product listings, or blog posts. Websites can range from simple single-page sites to complex platforms with many sections and features.

                            </p>

                            <p
                                className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                            >

                                A web app (short for web application) is an interactive tool that performs specific functions online. Unlike traditional websites, web apps are designed to handle tasks like booking appointments, managing accounts, or filling out forms. They offer a more dynamic and engaging user experience.

                            </p>

                            <p
                                className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                            >

                                <span
                                    className='text-[22px] font-bold font-montSerrat max-smCustom:text-[18px]'
                                >Designing for Impact</span> <br /><br />


                                <span className='text-[20px] font-montSerrat font-semibold max-smCustom:text-[18px]'>Creative Design:</span> <br/><br/> This aspect involves making your website or web app visually attractive and unique. It includes selecting colors, fonts, images, and layouts that not only catch the eye but also reflect your brand’s personality. Creative design helps your site stand out and make a memorable impression.<br /><br />

                                <span className='text-[20px] font-montSerrat font-semibold max-smCustom:text-[18px]'>User-Friendly Design:</span><br/><br/> A user-friendly design ensures that visitors can easily navigate and interact with your site or app. This means creating intuitive menus, clear call-to-action buttons, and a layout that works well on both computers and mobile devices. The goal is to make the user experience smooth and enjoyable, allowing users to find what they need quickly.

                                <br /><br />

                                <span
                                    className='font-bold text-[22px] font-montSerrat max-smCustom:text-[18px]'
                                >What Goes Behind the Design</span>

                                <br /><br />

                                <span className='text-[20px] font-montSerrat font-semibold max-smCustom:text-[18px]'>1. Understanding Needs:</span> <br/><br/> We begin by understanding your business goals and audience. This helps us design a site or app that meets your specific needs.

                                <br /><br />

                                <span className='text-[20px] font-montSerrat font-semibold max-smCustom:text-[18px]'>2. Planning:</span> <br/><br/> We create wireframes or basic blueprints to plan the structure and functionality of the site or app.

                                <br /><br />

                                <span className='text-[20px] font-montSerrat font-semibold max-smCustom:text-[18px]'>3. Design Creation:</span> <br/><br/> We then design detailed visual elements, incorporating your brand’s colors, fonts, and images to create a cohesive look.

                                <br /><br />

                                <span className='text-[20px] font-montSerrat font-semibold max-smCustom:text-[18px]'>4. Testing and Refinement: </span> <br/><br/> Finally, we test the design on different devices and browsers to ensure everything works properly and make any necessary adjustments.

                                <br /><br />


                                <span
                                    className='text-[20px] font-semibold max-smCustom:text-[16px] font-inknutAntiqua'
                                >

                                In summary, our website and web app design services aim to create visually engaging and easy-to-use platforms that reflect your brand and provide an excellent user experience.

                                </span>

                            </p>

                        </div>

                    </div>

                </div>

                <div className="w-full bg-greenCustom my-20 flex justify-center">

                    <div className="overViewButton bg-white my-[50px] w-[1100px] rounded-[30px] pb-[50px] max-mdCustom:w-[800px] max-smCustom:w-full max-smCustom:mx-10  max-smCustom:space-x-0">

                        <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                            <p
                                className='text-[22px] font-bold font-montSerrat' 
                            >

                                Our recipe for Website & Web App Design:

                            </p> 

                            <p
                                className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                            >

                                <span className='text-[20px] font-montSerrat font-semibold'>1. Discovery & Research:</span> <br /> <br />

                                <span className='font-semibold text-[20px] font-montSerrat max-smCustom:text-[16px]'>What We Do:</span> <br/><br/> We start by getting to know your business, your goals, and your target audience. This involves discussions, questionnaires, and market research.

                                <br/><br/><span className='font-semibold text-[20px] font-montSerrat max-smCustom:text-[16px]'>Why it's Important:</span><br/><br/> Understanding your brand and audience ensures that the design resonates with your potential customers and meets your business objectives. <br /><br />


                                <span className='text-[20px] font-montSerrat font-semibold'>2. Planning & Strategy: <br /> <br /></span>

                                <span className='font-semibold text-[20px] font-montSerrat max-smCustom:text-[16px]'>What We Do:</span><br/><br/> We create a sitemap and wireframes – the blueprint of your website or web app. This outlines the structure, layout, and flow of each page or screen.

                                <br/><br/><span className='font-semibold font-montSerrat text-[20px] max-smCustom:text-[16px]'>Why it's Important:</span> <br/><br/>This step ensures a logical and user-friendly layout, making navigation smooth and intuitive for your users.

                                <br /> <br />

                                <span className='text-[20px] font-montSerrat font-semibold'>3. Design Mockups: <br /> <br /></span>

                                <span className='font-semibold text-[20px] font-montSerrat max-smCustom:text-[16px]'>What We Do:</span><br/><br/> We craft visual mockups based on the wireframes, incorporating your branding elements like colors, fonts, and logos. You'll get to see how your website or app will look before we start building it.

                                <br/><br/><span className='font-semibold text-[20px] font-montSerrat max-smCustom:text-[16px]'>Why it's Important:</span><br/><br/> This is where creativity shines. We aim to create a visually appealing design that aligns with your brand identity while ensuring it's engaging for your audience.

                                <br /> <br />

                                <span className='text-[20px] font-montSerrat font-semibold'>4. Feedback & Revisions:</span> <br /> <br />

                                <span className='font-semibold font-montSerrat text-[20px] max-smCustom:text-[16px]'>What We Do:</span><br/><br/> We present the mockups to you and gather your feedback. Based on your input, we make necessary revisions to ensure the design meets your vision.

                                <br/><br/><span className='font-semibold font-montSerrat text-[20px] max-smCustom:text-[16px]'>Why it's Important:</span><br/><br/> Collaboration is key. Your feedback helps us fine-tune the design to reflect your brand perfectly.


                                <br /> <br />

                                <span className='text-[20px] font-montSerrat font-semibold'>5. Responsive Design:</span> <br /> <br />

                                <span className='font-semibold text-[20px] font-montSerrat max-smCustom:text-[16px]'>What We Do:</span><br/><br/> We ensure that the design adapts seamlessly to different devices, whether it’s a desktop, tablet, or smartphone.

                                <br/><br/><span className='font-semibold text-[20px] font-montSerrat max-smCustom:text-[16px]'>Why it's Important:</span><br/><br/> A significant portion of users will access your site on mobile devices. A responsive design provides a consistent experience across all platforms.

                                <br /><br />

                                <span className='text-[20px] font-montSerrat font-semibold'>6. User Interface (UI) & User Experience (UX) Optimization:</span> <br /> <br />

                                <span className='font-semibold text-[20px] font-montSerrat max-smCustom:text-[16px]'>What We Do:</span><br/><br/> We focus on the details – button placements, forms, calls-to-action, and more – to enhance usability and engagement.

                                <br/><br/><span className='font-semibold text-[20px] font-montSerrat max-smCustom:text-[16px]'>Why it's Important:</span><br/><br/> A great UI/UX ensures that visitors can navigate the site effortlessly, increasing their chances of taking the desired action (like contacting you or making a purchase). <br /><br />



                                <span className='text-[20px] font-montSerrat font-semibold'>7. Design Handoff to Development:</span> <br /><br/>

                                <span className='font-semibold font-montSerrat text-[20px] max-smCustom:text-[16px]'>What We Do:</span><br/><br/> Once the design is finalized, we prepare all the design assets and specifications to hand off to the development phase.

                                <br/><br/><span className='font-semibold font-montSerrat text-[20px] max-smCustom:text-[16px]'>Why it's Important:</span> <br/><br/>A smooth handoff ensures that the development team can accurately bring the design to life, maintaining the quality and vision throughout the build process.

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

export default Web_Design_Service