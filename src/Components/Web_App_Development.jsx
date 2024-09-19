import React, { useEffect } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Web_App_Development = () => {

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
                            src='/Services/Website_Development.png'
                            className='w-[400px] max-mdCustom:mx-auto hover:w-[420px] transition-all duration-300'
                        />

                        <p
                            className='font-bold font-montSerrat text-[30px] w-[500px] max-mdCustom:relative right-[140px]'
                        >

                                Website & Web App Development<br />
                                
                                <span
                                    className='text-[22px]'
                                >

                                    Builds with Top-Notch Technologies

                                </span>

                        </p>

                    </div>

                    <div className="space-y-10 mt-10 mx-20">

                        <p
                            className='text-[22px] font-montSerrat'
                        >

                            Building a website or web app isn't just about writing code; it's about creating a robust digital solution that powers your business. Our development process focuses on using the latest technologies to ensure your site or application is fast, secure, and scalable.

                            <br /><br />

                            We leverage frameworks like React, Angular, and Node.js, ensuring that your web app performs seamlessly and can handle user interactions smoothly. Whether it's a simple website or a complex web application, we prioritize performance and reliability, making sure your users have the best experience possible.

                            <br /><br />

                            Cutting-Edge Technology: We don’t settle for less; we utilize top-notch tech stacks that enhance functionality and performance. This includes a mix of front-end and back-end technologies tailored to your project’s specific needs.

                            <br /><br />

                            Robust Functionality: Every web app we build is designed to serve a purpose. Whether it’s facilitating bookings, managing user accounts, or integrating with other services, we ensure that the functionality is intuitive and user-friendly.

                            <br /><br />

                            Scalability and Security: Our development practices prioritize building scalable solutions that grow with your business. We also incorporate security best practices from the ground up to protect your data and user information.


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

                            Our recipe for Website & Web App Development: <br /><br />

                        </p>

                        <p
                            className='text-[22px] font-montSerrat'
                        >

                            1. Requirement Gathering
                            We sit down with you to understand your needs and goals for the website or web app.
                            Why it matters: Knowing what you want helps us build something that meets your specific requirements.

                            <br /><br />

                            2. Tech Stack Selection
                            We choose the best technologies for your project, ensuring optimal performance and scalability.
                            Why it matters: The right tech stack lays the foundation for a successful build.

                            <br /><br />

                            3. Architecture Design
                            We design the architecture of your application, mapping out how different components will interact.
                            Why it matters: A well-planned architecture leads to a more efficient and maintainable product.

                            <br /><br />

                            4. Development Phase
                            Our team gets to work, writing clean, efficient code to bring your vision to life.
                            Why it matters: Quality coding ensures your site or app runs smoothly and reliably.

                            <br /><br />

                            5. Testing & Quality Assurance
                            We rigorously test your website or web app to catch and fix any bugs before launch.
                            Why it matters: Thorough testing guarantees a seamless user experience and reduces future issues.

                            <br /><br />

                            6. Deployment
                            Once everything is tested and approved, we launch your site or web app, making it live for users.
                            Why it matters: A successful deployment marks the culmination of our hard work and your investment.

                            <br /><br />

                            7. Post-Launch Support
                            We provide ongoing support to address any questions or issues that arise after launch.
                            Why it matters: Our commitment to your project doesn’t end at launch; we’re here to help as you grow.

                            <br /><br />

                            <span
                                className='text-[22px] font-bold'
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

    )

}

export default Web_App_Development