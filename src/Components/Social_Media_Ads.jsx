import React, { useEffect } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Social_Media_Ads = () => { 

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (

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

                    <div className=" flex justify-center items-center h-[400px] space-x-[100px] max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-y-5 max-mdCustom:h-auto max-mdCustom:mt-[50px] max-mdCustom:items-center max-smCustom:space-x-0 max-smCustom:mx-10">

                        <img 
                            src='/Services/Website_Desigining.png'
                            className='w-[400px] max-mdCustom:mx-auto transition-all duration-300'
                        />

                        <p
                            className='font-bold font-montSerrat text-[30px] w-[500px] max-smCustom:w-full max-mdCustom:relative right-[140px] max-smCustom:text-[22px] max-smCustom:static'
                        >

                            Social Media Management  <br />
                            
                            <span
                                className='text-[22px] max-smCustom:text-[16px]'
                            >

                                Targeted Strategies to Boost Your Reach

                            </span>

                        </p>

                    </div>

                    <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                        <p
                            className='text-[18px] max-smCustom:text-[16px] font-inknutAntiqua'
                        >
                                                        
                            Get Ready to Boost Your Brand and Engage Your Audience!<br /><br />

                            In the vibrant world of digital marketing, effective social media management is your way to connecting with customers and attracting new eyes. Let’s take your online presence to the next level!<br /><br />

                            <b className='font-montSerrat font-bold '>Our Awesome Services: </b><br /><br />

                            <b className=' font-montSerrat'>1. Social Media Strategy Development: </b> Tailor-made plans to make your brand shine online.<br /><br />

                            <b className=' font-montSerrat'>2. Script Creation: </b>Fun and engaging scripts for videos that grab attention.<br /><br />

                            <b className=' font-montSerrat'>3. Editing Magic: </b>Polished content that looks as good as it sounds.<br /><br />

                            <b className=' font-montSerrat'>4. Timely Uploads: </b>Keeping your profiles fresh and lively with regular posts.<br /><br />

                            <b className=' font-montSerrat'>5. Account Maintenance: </b>Staying active and engaging with your followers like a pro.<br /><br />

                            <b className=' font-montSerrat'>6. Boosting Engagement: </b>Creative efforts to spark conversations and build a loyal community.<br ></br>


                            <b className='font-montSerrat'>Ads for that Extra Punch<br /><br />

                            And guess what?<br /><br /> 
                            
                            We also rock at: <br /><br /></b>

                            <b className=' font-montSerrat'>Targeted Advertising: </b>Need a boost? We’ll implement eye-catching ads on Meta and Google to help you  reach even more folks! <br /><br />


                            With our dynamic social media management and powerful ads, we’ll help you connect, engage, and grow your brand like never before! <br /><br />


                        </p>

                    </div>

                </div>

            </div>

            <div className="w-full bg-greenCustom my-20 flex justify-center">

                <div className="overViewButton bg-white my-[50px] w-[1100px] rounded-[30px] pb-[50px] max-mdCustom:w-[800px] max-smCustom:w-full max-smCustom:mx-10 max-smCustom:space-x-0">

                    <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                        <p
                            className='text-[22px] font-semibold font-montSerrat' 
                        >

                            Our Recipe for Success <br />

                        </p>

                        <p
                            className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                        >

                            <b className=' font-montSerrat'>1. Strategy Development: </b>We start by crafting tailor-made social media strategies that align with your brand goals. <br /><br />


                            <b className=' font-montSerrat'>2. Content Creation: </b>Our team creates engaging scripts and visuals that captivate your audience. <br /><br />


                            <b className=' font-montSerrat'>3. Editing: </b>We polish your content to ensure it’s visually appealing and professional. <br /><br />


                            <b className=' font-montSerrat'>4. Timely Posting: </b>We schedule regular uploads to keep your profiles active and fresh. <br /><br />


                            <b className=' font-montSerrat'>5. Account Management: </b>We actively engage with your followers, responding and sparking conversations. <br /><br />


                            <b className=' font-montSerrat'>6. Boosting Engagement: </b>Creative tactics are employed to foster community interaction and loyalty. <br /><br />


                            <b className=' font-montSerrat'>7. Targeted Advertising: </b>We roll out eye-catching ads on Meta and Google to extend your reach and drive growth.ugh the noise, reaching your audience effectively and turning clicks into customers. <br /><br />

                        </p>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    )

}

export default Social_Media_Ads