import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import './CSS/WebDesign.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Web_App_Development = () => { 

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

                    <div className=" inline-block px-5 mb-10 py-2 rounded-2xl text-[25px] font-bold font-montSerrat mt-[50px] max-smCustom:mt-[0px] relative max-smCustom:text-[25px]"> 

                        Overview

                        <img 
                        className='w-[50px] h-auto rotate-[110deg] absolute right-[-25px] top-[-10px] green_image'
                        src='/Common/green-left.webp'
                        
                    />


                    </div>

                </div>

                <div className="w-full flex justify-center bg-yellowCustom">

                    <div className="bg-white overViewButton my-[50px] w-[1100px] rounded-[30px] pb-[50px] max-mdCustom:w-[800px] max-smCustom:w-full max-smCustom:mx-10">

                        <div className="flex justify-center items-center h-[400px] space-x-[100px]
                        max-mdCustom:space-x-0 max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-y-5 max-mdCustom:h-auto max-mdCustom:mt-[50px] max-mdCustom:items-center max-smCustom:space-x-0 max-smCustom:mx-10">

                            <img 
                                src='/Services/Website_Development.webp'
                                className='w-[400px] max-mdCustom:mx-auto hover:w-[420px] transition-all duration-300'
                                
                            />

                            <p
                                className='font-bold font-montSerrat text-[30px] w-[500px] max-mdCustom:w-full max-smCustom:w-full max-smCustom:text-[20px] max-smCustom:static max-mdCustom:text-center'
                            >

                                    Website & Web App Development<br />
                                    
                                    <span
                                        className='text-[18px] font-semibold max-smCustom:text-[14px]'
                                    >

                                        Builds with Top-Notch Technologies

                                    </span>

                            </p>

                        </div>

                        <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                            <p
                                className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                            >

                                Building a website or web app is more than just writing code—it's about crafting a dynamic digital solution that fuels your business. Our development process harnesses the latest tech to ensure your site or application is fast, secure, and scalable! <br /><br />

                                We leverage frameworks like React, Angular, and Node.js for seamless performance and smooth user interactions. Whether you're looking for a simple website or a complex web application, we prioritize reliability and user experience to keep your audience engaged. <br /><br />

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>Cutting-Edge Technology: </b><br/><br/>We don’t settle for the basics! Our top-notch tech stacks enhance functionality and performance, tailored to meet your project's unique needs. <br /><br />

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>Robust Functionality:  </b><br/><br/>Every web app we create serves a purpose—be it facilitating bookings, managing user accounts, or integrating with other services. We ensure the functionality is intuitive and user-friendly. <br /><br />

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>Scalability & Security: </b><br/><br/>Our development practices focus on building scalable solutions that grow with your business. Plus, we incorporate security best practices from the ground up to safeguard your data and user information. <br /><br />

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>Cloud Deployment: </b><br/><br/>Ready to go big? We deploy your applications on cloud services like AWS, GCP, or Azure, utilizing Docker and Kubernetes for high availability and smooth operation. Let’s create something amazing that can handle the heat of the digital world! <br /><br />

                            </p>

                        </div>

                    </div>

                </div>

                <div className="w-full my-20 flex justify-center bg-greenCustom">

                    <div className="overViewButton bg-white my-[50px] w-[1100px] rounded-[30px] pb-[50px] max-mdCustom:w-[800px] max-smCustom:w-full max-smCustom:mx-10  max-smCustom:space-x-0">

                        <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                            <p
                                className='text-[22px] font-bold font-montSerrat'
                            >

                                Our recipe for Website & Web App Development: <br /><br />

                            </p>

                            <p
                                className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                            >

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>1. Requirement Gathering:</b><br/><br/>
                                We sit down with you to understand your needs and goals for the website or web app.
                                Why it matters: Knowing what you want helps us build something that meets your specific requirements.

                                <br /><br />

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>2. Tech Stack Selection: </b><br/><br/>
                                We choose the best technologies for your project, ensuring optimal performance and scalability.
                                Why it matters: The right tech stack lays the foundation for a successful build.

                                <br /><br />

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>3. Architecture Design: </b><br/><br/>
                                We design the architecture of your application, mapping out how different components will interact.
                                Why it matters: A well-planned architecture leads to a more efficient and maintainable product.

                                <br /><br />

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>4. Development Phase: </b><br/><br/>
                                Our team gets to work, writing clean, efficient code to bring your vision to life.
                                Why it matters: Quality coding ensures your site or app runs smoothly and reliably.

                                <br /><br />

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>5. Testing & Quality Assurance: </b><br/><br/>
                                We rigorously test your website or web app to catch and fix any bugs before launch.
                                Why it matters: Thorough testing guarantees a seamless user experience and reduces future issues.

                                <br /><br />

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>6. Deployment: </b><br/><br/>
                                Once everything is tested and approved, we launch your site or web app, making it live for users.
                                Why it matters: A successful deployment marks the culmination of our hard work and your investment.

                                <br /><br />

                                <b className='font-montSerrat font-bold max-smCustom:text-[16px]'>7. Post-Launch Support: </b><br/><br/>
                                We provide ongoing support to address any questions or issues that arise after launch.
                                Why it matters: Our commitment to your project doesn’t end at launch; we’re here to help as you grow.

                                <br /><br />

                                <span
                                    className='text-[22px] font-montSerrat font-bold'
                                >
                                    
                                    - Code Quality Assurance

                                </span>

                                <br /><br />

                                We pride ourselves on writing high-quality, industry-standard code that not only meets your project’s needs but is also easily understandable by other developers. Our focus on clean, maintainable code ensures that future updates and modifications can be made seamlessly. This way, your project remains adaptable and ready for growth, allowing any developer to jump in and understand the architecture without hassle.

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

export default Web_App_Development