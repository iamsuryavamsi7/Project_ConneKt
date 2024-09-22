import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './CSS/Contact.css'
import './CSS/About.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const About = () => {

    const linkedin = (e, url) => {

        e.preventDefault();

        const linkedinFunction = setInterval(() => {

            window.open(url, '_blank');

        }, 400);

        setTimeout(() => {

            clearInterval(linkedinFunction);

        }, 500);

    }

    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {

        window.scrollTo(0, 0);

        // Runnin the page loading

        const updatePageLoading = () => {

            setPageLoading(!pageLoading);

        }

        const pageLoadingId = setInterval(updatePageLoading, 2000);

        setTimeout(() => {
         
           clearTimeout(pageLoadingId)
        
        }, 2000);

    }, [])

    return (

        <>

            { !pageLoading && (

                <>

                    <NavBar />

                    <div className="pt-[150px] max-smCustom:pt-[100px] mb-[100px] max-smCustom:mb-[30px]">

                        <div className="flex justify-center">

                            <div className="flex justify-center text-[30px] max-smCustom:text-[25px] font-montSerrat font-semibold relative">

                                About Us

                                <img 
                                    src='/Common/green-right.png'
                                    className='absolute h-[50px] w-auto top-[-23px] right-[-40px] green_image'
                                />

                            </div>

                        </div>

                        <div className="w-full my-10 max-smCustom:my-5">

                            <div className="bg-sky-300 mx-[250px] rounded-xl py-3 max-mdCustom:mx-[80px] border-2 border-black max-smCustom:mx-[20px]">

                            <div className="flex justify-center text-[30px] max-smCustom:text-[20px] font-semibold">

                                    Who Are We ?

                            </div>

                            <div className="my-5 text-[20px] max-smCustom:text-[16px] flex mx-10 ">

                                    Hey there! we're Gokul and Surya, two brotherly visionaries on a mission to turn your digital dreams into reality. We specilizing crafting high quality websites and web applications that not only tick all your boxes but also enhances your brand.

                            </div>

                            </div>

                        </div>

                        <div className="flex justify-center space-x-[300px] max-smCustom:space-x-10 max-smCustom:mx-5 mt-[10px] max-mdCustom:mt-[10px] max-mdCustom:space-x-[100px]">

                            <div className="">

                                <div className="">

                                    <img 
                                        src='/About/gokul.png'
                                        className='w-[350px] max-smCustom:w-[150px] h-auto'
                                    /> 

                                </div>

                                <div className="w-[360px] max-smCustom:w-[149px] mt-5">

                                    <p
                                        className='text-[18px] max-smCustom:text-[14px]  font-inknutAntiqua'
                                    >
                                        
                                        Meet Mr. Gokul, he's a Senior Software Engineer, tech-savvy wizard of the team with a flare for cutting-edge technologies. He's got a creative spot that brings stunning visuals to life, helping brands shine with unique digital identites that truly resonate with the audience.

                                    </p>

                                </div>

                                <div className="font-inknutAntiqua mt-20 max-smCustom:my-[10px] max-smCustom:text-[16px] max-smCustom:text-gray-500 relative">

                                    Click to connect on 
                                    
                                    <span
                                        className='linkedinButton bg-blue-500 text-white px-3 rounded-xl ml-4 cursor-pointer max-smCustom:absolute max-smCustom:left-[-10px] max-smCustom:bottom-[-50.5px] max-smCustom:py-2'
                                        onClick={(e)=> linkedin(e, 'https://www.linkedin.com/in/gokul-srinivas')}
                                    >
                                        
                                        LinkedIn
                                        
                                    </span>

                                </div>

                            </div>

                            <div className="max-smCustom:mb-7">

                                <div className="">

                                    <img 
                                        src='/About/surya.png'
                                        className='w-[360px] h-auto max-smCustom:w-[155px] max-smCustom:h-[150px]'
                                    />

                                </div>

                                <div className="w-[400px] max-smCustom:w-[150px] mt-5">

                                <p
                                        className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                                    >

                                        Say Hello to our coding mastero!<br />
                                        Surya is a Tech Dreamer who thrives on tackling challenges head-on. With a passion for transforming complex concepts into sleek, functional designs, he ensures every project runs like a dream, all while delivering clean, top notch code.

                                    </p>

                                </div>

                                <div className="font-inknutAntiqua mt-[75px] max-smCustom:my-[10px] max-smCustom:text-[16px] max-smCustom:text-gray-500 relative">

                                    Click to connect on 
                                    
                                    <span
                                        className='linkedinButton bg-blue-500 text-white px-3 rounded-xl ml-4 cursor-pointer max-smCustom:absolute max-smCustom:left-[-10px] max-smCustom:bottom-[-50px] max-smCustom:py-2 '
                                        onClick={(e) => linkedin(e, 'https://www.linkedin.com/in/iamsuryavamsi/')}
                                    >
                                        
                                        LinkedIn
                                        
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div className="w-full my-10">

                            <div className="bg-yellowCustom mx-[250px] max-smCustom:mx-[20px] rounded-xl py-3 max-mdCustom:mx-[80px] border-2 border-black mt-20">

                            <div className="flex justify-center text-[30px] max-smCustom:text-[20px] font-semibold">

                                    Why Team Up With Us ?

                            </div>

                            <div className="my-5 text-[20px] flex mx-10 max-smCustom:text-[16px]">

                                    We roll like a tight-knite crew focusing on only one project at a time. We're not justinate for the cash, our goal is to deliver product that blow your expectations away. our collaborative approach keeps your vision front-end center, allowing us to build strong partner-ship and provide on going support to maintain your digital presents.

                            </div>

                            </div>

                            <div className="bg-greenCustom mx-[250px] max-smCustom:mx-[20px] rounded-xl py-3 max-mdCustom:mx-[80px] mt-20 max-smCustom:mt-5 border-2 border-black">

                            <div className="flex justify-center text-[30px] font-semibold max-smCustom:text-[20px]">

                                    Our Core Values !

                            </div>

                            <div className="my-5 text-[20px] flex mx-10 max-smCustom:text-[16px]">

                                    <p>

                                        <b>Quality</b> - We are all about delivering top tier services that exceed your expectations. <br /><br />

                                        <b>Transparency</b> - Open communication is our uniqueness, we keep you in the loop at every stage <br /><br />

                                        <b>Innovation</b> - We stay ahead of the curve on technologies to ensure the projects are modern and impactful. <br /><br />

                                    </p>

                            </div>

                            </div>

                            <div className="bg-pink-300 mx-[250px] max-smCustom:mx-[20px]  rounded-xl py-3 max-mdCustom:mx-[80px] mt-20 max-smCustom:mt-[20px] border-2 border-black">

                            <div className="flex justify-center text-[30px] font-semibold max-smCustom:text-[20px]">

                                    Let's Create Magic Together !

                            </div>

                            <div className="my-5 text-[20px] max-smCustom:text-[16px] flex mx-10 ">

                                    <p>

                                        We can't wait to join with you on this digital adventure. Whether you're a startup or a seasoned pro looking to elevate your online presence, we are here to help you shine. Let's make something amazing together.  
                                        
                                    </p>

                            </div>

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

export default About