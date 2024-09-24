import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import './CSS/WebDesign.css'
import './CSS/Contact.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Search_Engine_O = () => {

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
                    src='/Common/green-left.png'
                />

                </div>

            </div>

            <div className="w-full flex justify-center bg-yellowCustom ">

                <div className="my-[50px] overViewButton bg-white w-[1100px] rounded-[30px] pb-[50px] max-mdCustom:w-[800px] max-smCustom:w-full max-smCustom:mx-10">

                    <div className=" flex justify-center items-center h-[400px] space-x-[100px] max-mdCustom:space-x-0 max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-y-5 max-mdCustom:h-auto max-mdCustom:mt-[50px] max-mdCustom:items-center max-smCustom:space-x-0 max-smCustom:mx-10">

                        <img 
                            src='/Services/Website_Desigining.png'
                            className='w-[400px] max-mdCustom:mx-auto transition-all duration-300'
                        />

                            <p
                                className='font-bold font-montSerrat text-[30px] w-[500px] max-mdCustom:w-full max-smCustom:w-full max-smCustom:text-[18px] max-smCustom:static max-mdCustom:text-center'
                            >

                            SEO (Search Engine Optimization) <br />

                            <span
                                className='text-[22px] max-smCustom:text-[16px]'
                            >

                                Elevating Your Visibility, One Click at a Time

                            </span>

                        </p>

                    </div>

                    <div className="space-y-10 mt-10 mx-20 max-smCustom:mx-5">

                        <p
                            className='text-[18px] max-smCustom:text-[16px] font-inknutAntiqua'
                        >

                            In today’s digital landscape, having a stunning website or web app is just the beginning. To attract visitors and grow your business, you need to be visible in search engine results. Our SEO services ensure that your online presence is optimized to reach your target audience effectively. <br /><br />

                            <span
                                className='text-[20px] max-smCustom:text-[18px] font-bold font-montSerrat'>Why SEO Matters: </span><br/><br/>SEO is the process of enhancing your website’s visibility on search engines like Google. When potential customers search for services or products you offer, we want your site to appear at the top of their search results. This visibility drives traffic, increases brand awareness, and ultimately boosts conversions.

                            <br /><br />

                            <b className='font-bold text-[20px] font-montSerrat'>What We Cover: </b>

                            <br /><br />

                            <b className='font-bold text-[20px] font-montSerrat'>1. Keyword Research:</b>

                            <br /><br />

                            <b className='font-semibold text-[20px] font-montSerrat'>What We Do: </b> We identify relevant keywords that your potential customers are searching for.<br/><br/>

                            <b className='font-semibold text-[20px] font-montSerrat'>Why It Matters: </b> Targeting the right keywords helps us attract the right audience to your site.

                            <br /><br />



                            <b className='font-bold text-[20px] font-montSerrat'>2. On-Page Optimization:</b>

                            <br /><br />

                            <b className='font-semibold text-[20px] font-montSerrat'>What We Do: </b> We optimize your website’s content, meta tags, headers, and images to align with SEO best practices.<br/><br/>

                            <b className='font-semibold text-[20px] font-montSerrat'>Why It Matters: </b> Well-optimized pages help search engines understand your content, improving your chances of ranking higher.

                            <br /><br />

                            <b className='font-bold text-[20px] font-montSerrat'>3. Technical SEO:</b>

                            <br /><br />

                            <b className='font-semibold text-[20px] font-montSerrat'>What We Do: </b>We ensure your website has a solid technical foundation, including site speed, mobile-friendliness, and secure connections (HTTPS).

                            <br/><br/>

                            <b className='font-semibold text-[20px] font-montSerrat'>Why It Matters: </b> A technically sound website provides a better user experience and is favored by search engines.

                            <br /><br />

                            <b className='font-bold text-[20px] font-montSerrat'>4. Content Creation & Optimization: </b>

                            <br /><br />

                            <b className='font-semibold text-[20px] font-montSerrat'>What We Do: </b> We develop high-quality, engaging content that addresses your audience's needs while incorporating targeted keywords.
                            
                            <br/><br/>
                            
                            <b className='font-semibold text-[20px] font-montSerrat'>Why It Mattters: </b> Valuable content boosts user engagement and helps establish your authority in your industry.

                            <br /><br />

                            <b className='font-bold text-[20px] font-montSerrat'>5. Link Building:</b>

                            <br /><br />

                            <b className='font-semibold text-[20px] font-montSerrat'>What We Do: </b>We implement strategies to earn quality backlinks from reputable websites.

                            <b className='font-semibold text-[20px] font-montSerrat'>Why It Matters: </b> Backlinks improve your site's authority and credibility, which can significantly enhance your search rankings.

                            <br /><br />

                            <b className='font-bold text-[20px] font-montSerrat'>6. Local SEO:</b>

                            <br /><br />

                            <b className='font-semibold text-[20px] font-montSerrat'>What We Do: </b>We optimize your online presence for local searches, including setting up and managing your Google My Business listing. <br /><br />

                            <b className='font-semibold text-[20px] font-montSerrat'>Why It Matters: </b>Local SEO helps attract customers in your geographic area, increasing foot traffic and local engagement.

                            <br /><br />

                            <b className='font-bold text-[20px] font-montSerrat'>7. Analytics & Reporting:</b>

                            <br /><br />

                            <b className='font-semibold text-[20px] font-montSerrat'>What We Do: </b> We track your SEO performance using tools like Google Analytics and provide regular reports on traffic, rankings, and user behavior.

                            <br /><br />

                            <b className='font-semibold text-[20px] font-montSerrat'>Why it Matters: </b> Data-driven insights allow us to refine our strategies for even better results.


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

                            Our Recipe for SEO Success:

                        </p>

                        <p
                            className='text-[18px] max-smCustom:text-[14px] font-inknutAntiqua'
                        >

                            <b>Thorough Research: </b>Understanding your market and audience is our starting point. <br /><br />

                            <b>Holistic Approach: </b>We optimize every aspect of your online presence, from content to technical elements. <br /><br />

                            <b>Continuous Improvement: </b>SEO is an ongoing process; we adapt strategies based on performance data and trends. <br /><br />

                            <b>Transparent Communication: </b>Regular updates and reports keep you informed about our progress and results. <br /><br />


                            With our SEO services, we help your website not just exist but thrive in search engine results, turning visitors into customers and enhancing your brand's online presence.

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

export default Search_Engine_O