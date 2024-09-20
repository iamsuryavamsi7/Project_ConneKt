import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './CSS/Contact.css'

const About = () => {

    const linkedin = (e, url) => {

        e.preventDefault();

        window.open(url, '_blank')

    }

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [])

    return (

        <>
        
            <NavBar />

            <div className="pt-[150px] mb-[100px]">

                <div className="flex justify-center">

                    <div className="flex justify-center text-[30px] font-montSerrat font-semibold relative">

                        About Us

                        <img 
                            src='/Common/green-right.png'
                            className='absolute h-[50px] w-auto top-[-25px] right-[-40px] green_image'
                        />

                    </div>

                </div>

                <div className="w-full  my-10">

                    <div className="bg-yellowCustom mx-[250px] rounded-xl py-3 max-mdCustom:mx-[80px]">

                       <div className="flex justify-center text-[30px] font-semibold">

                            Who Are We ?

                       </div>

                       <div className="my-5 text-[20px] flex mx-10 ">

                            Hey there! we're Gokul and Surya, two brotherly visionaries on a mission to turn your digital dreams into reality. We specilizing crafting high quality websites and web applications that not only tick all your boxes but also enhances your brand.

                       </div>

                    </div>

                </div>

                <div className="flex justify-center space-x-[300px] mt-[10px] max-mdCustom:mt-[10px] max-mdCustom:space-x-[100px]">

                    <div className="">

                        <div className="">

                            <img 
                                src='/About/gokul.png'
                                className='w-[400px] h-auto'
                            />

                        </div>

                        <div className="w-[400px] mt-5">

                            <p
                                className='text-[18px] font-inknutAntiqua'
                            >
                                
                                Meet Gokul, he's a Senior Software Engineer, tech-savvy wizard of the team with a flare for cutting-edge technologies. He's got a creative spot that brings stunning visuals to life, helping brands shine with unique digital identites that truly resonate with the audience.

                            </p>

                        </div>

                        <div className="font-inknutAntiqua my-[20px]">

                            Click to connect on 
                            
                            <span
                                className='bg-blue-500 text-white px-3 rounded-xl ml-4 cursor-pointer'
                                onClick={(e)=> linkedin(e, 'https://www.linkedin.com/in/gokul-srinivas')}
                            >
                                
                                LinkedIn
                                
                            </span>

                        </div>

                    </div>

                    <div className="">

                        <div className="">

                            <img 
                                src='/About/surya.png'
                                className='w-[360px] h-auto'
                            />

                        </div>

                        <div className="w-[400px] mt-5">

                        <p
                                className='text-[18px] font-inknutAntiqua'
                            >

                                Say Hello to our coding mastero!<br />
                                Surya is a Tech Dreamer who thrives on tackling challenges head-on. With a passion for transforming complex concepts into sleek, functional designs, he ensures every project runs like a dream, all while delivering clean, top notch code.

                            </p>

                        </div>

                        <div className="font-inknutAntiqua my-[20px]">

                            Click to connect on 
                            
                            <span
                                className='bg-blue-500 text-white px-3 rounded-xl ml-4 cursor-pointer'
                                onClick={(e) => linkedin(e, 'https://www.linkedin.com/in/iamsuryavamsi/')}
                            >
                                
                                LinkedIn
                                
                            </span>

                        </div>

                    </div>

                </div>

                <div className="w-full my-10">

                    <div className="bg-sky-300 mx-[250px] rounded-xl py-3 max-mdCustom:mx-[80px]">

                       <div className="flex justify-center text-[30px] font-semibold">

                            Why Team Up With Us ?

                       </div>

                       <div className="my-5 text-[20px] flex mx-10 ">

                            We roll like a tight-knite crew focusing on only one project at a time. We're not justinate for the cash, our goal is to deliver product that blow your expectations away. our collaborative approach keeps your vision front-end center, allowing us to build strong partner-ship and provide on going support to maintain your digital presents.

                       </div>

                    </div>

                    <div className="bg-greenCustom mx-[250px] rounded-xl py-3 max-mdCustom:mx-[80px] mt-20">

                       <div className="flex justify-center text-[30px] font-semibold">

                            Our Core Values !

                       </div>

                       <div className="my-5 text-[20px] flex mx-10 ">

                            <p>

                                <b>Quality</b> - We are all about delivering top tier services that exceed your expectations. <br /><br />

                                <b>Transparency</b> - Open communication is our uniqueness, we keep you in the loop at every stage <br /><br />

                                <b>Innovation</b> - We stay ahead of the curve on technologies to ensure the projects are modern and impactful. <br /><br />

                            </p>

                       </div>

                    </div>

                    <div className="bg-pink-300 mx-[250px] rounded-xl py-3 max-mdCustom:mx-[80px] mt-20">

                       <div className="flex justify-center text-[30px] font-semibold">

                            Let's Create Magic Together !

                       </div>

                       <div className="my-5 text-[20px] flex mx-10 ">

                            <p>

                                We can't wait to join with you on this digital adventure. Whether you're a startup or a seasoned pro looking to elevate your online presence, we are here to help you shine. Let's make something amazing together.  
                                
                            </p>

                       </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    )

}

export default About