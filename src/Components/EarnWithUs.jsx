import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const EarnWithUs = () => {

    return (

        <>
        
            <NavBar />

            <div className="pt-[150px] mb-10 w-full flex justify-center text-[30px] font-semibold font-montSerrat">

                <div className="relative ">

                    Earn With Us

                    <img 
                        src='/Common/yellow_left.png'
                        className='w-[50px] h-auto rotate-[-10deg] absolute left-[-45px] top-[-25px] green_image'
                    />
                    
                </div>

            </div>

            <div className="my-7 flex justify-center">

                <div className=" text-[22px] text-center w-[1300px] font-montSerrat">

                    Want to make some extra cash while helping businesses grow?
                    Join our affiliate program and earn good commisions by bringing new projects our way!
                    It's simple, flexible and rewarding, just like getting paid to network

                </div>

            </div>

            <div className="w-full h-auto mb-20 flex mt-[50px]">

                <div className="h-auto w-auto grid grid-cols-3 gap-x-10 gap-y-10 mx-[250px]">

                    <div className="text-[15px] leading-7 text-center bg-sky-100 py-10 px-10 rounded-2xl border-2 border-black font-inknutAntiqua">

                        <div className="font-montSerrat bg-sky-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                            <span className='text-[20px] font-semibold '>How It Works Section
                            </span>

                            <p
                                className='text-[15px] mt-3'
                            >

                                Step By Step Process

                            </p>
                            
                        </div>

                        Register: Register With Us After understanding completely how it works. You are official on the team! <br /><br />

                        Refer Projects: Once you are on the team recommond our services and bring in clients who need our services. <br /><br />

                        Earn Commisions: Once the project goes live and we get full and final payment you get a sweet commisions. THe more clients you bring,  
                        the more you earn!


                    </div>

                    <div className="text-[15px] leading-7 text-center bg-yellow-100 py-10 px-10 rounded-2xl border-black font-inknutAntiqua border-2">

                        <div className="font-montSerrat bg-yellow-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                            <span className='text-[20px] font-semibold '>What You Earn
                            </span>

                            <p
                                className='text-[15px] mt-3'
                            >

                                Here is where things get interesting

                            </p>

                        </div>

                        For Small Projects: Got a small web design project? You will earn 10% of the total value <br /><br />

                        For Big Projects: For large project like complex website, webapps, IVRS campaigns, or full service packages, you will earn 12% !<br /><br />

                        Example: If you bring us a website worth &#8377;50,000 you will get &#8377;5,000 in commision. Pretty cool, right?

                    </div>

                    <div className="text-[15px] leading-7 text-center bg-pink-100 py-10 px-10 rounded-2xl border-black font-inknutAntiqua border-2">

                        <div className="font-montSerrat bg-pink-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                            <span className='text-[20px] font-semibold '>Why Partner With Us
                            </span>

                            <p
                                className='text-[15px] mt-3'
                            >

                                We make every step easy. No Barriers!

                            </p>

                        </div>

                        Good Commisions: We pay high rates because we value your efforts, Thanks You!<br /><br />

                        Flexible Work: Refer clients at your own speed, from anywhere.<br /><br />

                        Diverse Services: From websites to campaigns, we have got something for every client.<br /><br />

                        Timely Payments: Get paid as soon as we do. No waiting around.

                    </div>

                    <div className="text-[15px] leading-7 text-center bg-lime-100 py-10 px-10 rounded-2xl border-black font-inknutAntiqua border-2">

                        <div className="font-montSerrat bg-lime-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                            <span className='text-[20px] font-semibold '>Affiliate Resource
                            </span>

                            <p
                                className='text-[15px] mt-3'
                            >

                                We help you to get started

                            </p>

                        </div>

                        Official Member: Once you register you're officially in the team.<br /><br />

                        Marketing Materials: Need some cool visuals to send out? We've got a library of stuff for you! <br /><br />

                        Tracking: We are always available to give you updates on your your referrals, projects, and earnings

                    </div>

                    <div className="text-[15px] leading-7 text-center bg-pink-100 border-black font-inknutAntiqua border-2 py-10 px-10 rounded-2xl">

                        <div className="font-montSerrat bg-pink-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                            <span className='text-[20px] font-semibold '>Terms and Conditions
                            </span>

                            <p
                                className='text-[15px] mt-3'
                            >

                                For full transparency, here is the fine print

                            </p>

                        </div>

                       


                    </div>

                    <div className="text-[15px] leading-7 text-center bg-sky-100 py-10 px-10 rounded-2xl border-black font-inknutAntiqua border-2 ">

                        <div className="font-montSerrat bg-sky-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                            <span className='text-[20px] font-semibold '>How It Works Section
                            </span>

                            <p
                                className='text-[15px] mt-3'
                            >

                                Step By Step Process

                            </p>

                        </div>

                        


                    </div>

                </div>

            </div>

            <Footer />
        
        </>

    )

}

export default EarnWithUs