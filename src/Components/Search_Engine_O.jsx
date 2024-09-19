import React, { useEffect } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Search_Engine_O = () => {

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
                            src='/Services/Search_Engine_Optimization.png'
                            className='w-[400px] max-mdCustom:mx-auto hover:w-[420px] transition-all duration-300'
                        />

                        <p
                            className='font-bold font-montSerrat text-[48px] w-[600px] max-mdCustom:relative right-[140px]'
                        >

                            SEO (Search Engine Optimization) <br />

                            <span
                                className='text-[22px]'
                            >

                                Elevating Your Visibility, One Click at a Time

                            </span>

                        </p>

                    </div>

                    <div className="space-y-10 mt-10 mx-20">

                        <p
                            className='text-[22px]'
                        >

                            In today’s digital landscape, having a stunning website or web app is just the beginning. To attract visitors and grow your business, you need to be visible in search engine results. Our SEO services ensure that your online presence is optimized to reach your target audience effectively. <br /><br />

                            Why SEO Matters: SEO is the process of enhancing your website’s visibility on search engines like Google. When potential customers search for services or products you offer, we want your site to appear at the top of their search results. This visibility drives traffic, increases brand awareness, and ultimately boosts conversions.

                            <br /><br />

                            What We Cover:

                            <br /><br />

                            1. Keyword Research:

                            <br /><br />

                            What We Do: We identify relevant keywords that your potential customers are searching for.

                            Why It Matters: Targeting the right keywords helps us attract the right audience to your site.

                            <br /><br />



                            2. On-Page Optimization:

                            <br /><br />

                            What We Do: We optimize your website’s content, meta tags, headers, and images to align with SEO best practices.

                            Why It Matters: Well-optimized pages help search engines understand your content, improving your chances of ranking higher.

                            <br /><br />

                            3. Technical SEO:

                            <br /><br />

                            What We Do: We ensure your website has a solid technical foundation, including site speed, mobile-friendliness, and secure connections (HTTPS).

                            Why It Matters: A technically sound website provides a better user experience and is favored by search engines.

                            <br /><br />

                            4. Content Creation & Optimization:

                            <br /><br />

                            What We Do: We develop high-quality, engaging content that addresses your audience's needs while incorporating targeted keywords.

                            Why It Matters: Valuable content boosts user engagement and helps establish your authority in your industry.

                            <br /><br />

                            5. Link Building:

                            <br /><br />

                            What We Do: We implement strategies to earn quality backlinks from reputable websites.

                            Why It Matters: Backlinks improve your site's authority and credibility, which can significantly enhance your search rankings.

                            <br /><br />

                            6. Local SEO:

                            <br /><br />

                            What We Do: We optimize your online presence for local searches, including setting up and managing your Google My Business listing.

                            Why It Matters: Local SEO helps attract customers in your geographic area, increasing foot traffic and local engagement.

                            <br /><br />

                            7. Analytics & Reporting:

                            <br /><br />

                            What We Do: We track your SEO performance using tools like Google Analytics and provide regular reports on traffic, rankings, and user behavior.

                            <br /><br />

                            Why It Matters: Data-driven insights allow us to refine our strategies for even better results.


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

                            Our Recipe for SEO Success:

                        </p>

                        <p
                            className='text-[22px] font-montSerrat'
                        >

                            Thorough Research: Understanding your market and audience is our starting point. <br /><br />

                            Holistic Approach: We optimize every aspect of your online presence, from content to technical elements. <br /><br />

                            Continuous Improvement: SEO is an ongoing process; we adapt strategies based on performance data and trends. <br /><br />

                            Transparent Communication: Regular updates and reports keep you informed about our progress and results. <br /><br />


                            With our SEO services, we help your website not just exist but thrive in search engine results, turning visitors into customers and enhancing your brand's online presence.

                        </p>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    )

}

export default Search_Engine_O