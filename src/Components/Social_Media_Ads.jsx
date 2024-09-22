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
        
            <div className="pt-[100px] w-full text-center">

                <div className="bg-greenCustom inline-block px-5 py-2 rounded-2xl text-[25px] font-bold font-montSerrat mt-[50px]">

                    Overview

                </div>

            </div>

            <div className="w-full flex justify-center">

                <div className="bg-yellowCustom my-[50px] w-[1400px] rounded-2xl pb-[50px] max-mdCustom:w-[800px]">

                    <div className="flex justify-center items-center h-[400px] space-x-[300px] max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-y-5 max-mdCustom:h-auto max-mdCustom:mt-[50px] max-mdCustom:items-center">

                        <img 
                            src='/Services/Google_Ads.png'
                            className='w-[400px] max-mdCustom:mx-auto hover:w-[420px] transition-all duration-300'
                        />

                        <p
                            className='font-bold font-montSerrat text-[48px] w-[500px] max-mdCustom:relative right-[140px]'
                        >

                            Social Media Management  <br />
                            
                            <span
                                className='text-[22px]'
                            >

                                Targeted Strategies to Boost Your Reach

                            </span>

                        </p>

                    </div>

                    <div className="space-y-10 mt-10 mx-20">

                        <p
                            className='text-[22px]'
                        >
                                                        
                            Get Ready to Boost Your Brand and Engage Your Audience!<br /><br />

                            In the vibrant world of digital marketing, effective social media management is your way to connecting with customers and attracting new eyes. Let’s take your online presence to the next level!<br /><br />

                            Our Awesome Services:<br /><br />

                            1. Social Media Strategy Development: Tailor-made plans to make your brand shine online.<br /><br />

                            2. Script Creation: Fun and engaging scripts for videos that grab attention.<br /><br />

                            3. Editing Magic: Polished content that looks as good as it sounds.<br /><br />

                            4. Timely Uploads: Keeping your profiles fresh and lively with regular posts.<br /><br />

                            5. Account Maintenance: Staying active and engaging with your followers like a pro.<br /><br />

                            6. Boosting Engagement: Creative efforts to spark conversations and build a loyal community.<br ></br>


                            Ads for that Extra Punch<br /><br />

                            And guess what?<br /><br /> 
                            
                            We also rock at: <br /><br />

                            1. Targeted Advertising: Need a boost? We’ll implement eye-catching ads on Meta and Google to help you  reach even more folks! <br /><br />


                            2. With our dynamic social media management and powerful ads, we’ll help you connect, engage, and grow your brand like never before! <br /><br />


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

                            Our Recipe for Success <br />

                        </p>

                        <p
                            className='text-[22px] font-montSerrat'
                        >

                            1. Strategy Development: We start by crafting tailor-made social media strategies that align with your brand goals. <br /><br />


                            2. Content Creation: Our team creates engaging scripts and visuals that captivate your audience. <br /><br />


                            3. Editing: We polish your content to ensure it’s visually appealing and professional. <br /><br />


                            4. Timely Posting: We schedule regular uploads to keep your profiles active and fresh. <br /><br />


                            5. Account Management: We actively engage with your followers, responding and sparking conversations. <br /><br />


                            6. Boosting Engagement: Creative tactics are employed to foster community interaction and loyalty. <br /><br />


                            7. Targeted Advertising: We roll out eye-catching ads on Meta and Google to extend your reach and drive growth.ugh the noise, reaching your audience effectively and turning clicks into customers. <br /><br />

                        </p>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    )

}

export default Social_Media_Ads