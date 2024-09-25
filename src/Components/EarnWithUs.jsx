import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './CSS/About.css'
import { CgDanger } from 'react-icons/cg'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const EarnWithUs = () => {

    const formFunction = (e) => {

        e.preventDefault(); 

        const formFunctionInterval = setInterval(() => {

            const name = document.querySelector(".name").value;

            const email = document.querySelector('.email').value;

            const place = document.querySelector('.place').value;

            const enterTheFields = document.querySelector('.enterTheFields');

            if ( name.trim() === ''|| place.trim() === ''){

                enterTheFields.style.display = 'flex';

            } else if ( name.trim() !== '' && place.trim() !== '') {

                enterTheFields.style.display = 'hidden';

                const message = `I am all set! I've checked out all the steps, read the terms & conditions, and I am ready to kick off my affiliate journey with connekt!`;
                const whatsappURL = `https://wa.me/918886182384?text=Name: ${encodeURIComponent(name)}%0A` +
                                    `Email: ${encodeURIComponent(email)}%0A` + 
                                    `I am from: ${encodeURIComponent(place)}%0A` + 
                                    `${encodeURIComponent(message)}`;
                

                window.open(whatsappURL, '_blank')

                window.location.reload();

                window.scrollTo(0, 0);

                clearForm();

            } else {

                console.log("Some Error Occured")

            }

        }, 400);

        setTimeout(() => {

            clearInterval(formFunctionInterval);

        }, 500);

    }

    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {

        window.scrollTo(0, 0);

        // Runnin the page loading

        const updatePageLoading = () => {

            setPageLoading(!pageLoading);

        }

        const pageLoadingId = setInterval(updatePageLoading, 1000);

        setTimeout(() => {
        
            clearTimeout(pageLoadingId);
        
        }, 1000);

    }, [])

    return (

        <>
        
            {!pageLoading && (

                <>

                    <NavBar />

                    <div className="pt-[150px] max-smCustom:pt-[100px] mb-10 max-smCustom:mb-3 w-full flex justify-center text-[30px] font-semibold font-montSerrat">

                        <div className="relative max-smCustom:text-[25px]">

                            Earn With Us

                            <img 
                                src='/Common/yellow_left.webp'
                                loading='lazy'
                                className='w-[50px] h-auto rotate-[-10deg] absolute left-[-45px] top-[-25px] green_image'
                            />
                            
                        </div>

                    </div>

                    <div className="my-7 max-smCustom:my-3 flex justify-center">

                        <div className=" text-[22px] max-smCustom:text-[18px] text-center w-[1300px] max-smCustom:w-fit max-smCustom:mx-[30px] font-montSerrat">

                            Want to make some extra cash while helping businesses grow?
                            Join our affiliate program and earn good commisions by bringing new projects our way!
                            It's simple, flexible and rewarding, just like getting paid to network

                        </div>

                    </div>

                    <div className="w-full h-auto mb-20 flex mt-[50px] max-smCustom:mt-[20px]">

                        <div className="h-auto w-auto grid grid-cols-3 max-mdCustom:grid-cols-2 gap-x-10 gap-y-10 max-smCustom:grid-cols-1 mx-[250px] max-mdCustom:mx-[50px] max-smCustom:mx-[20px]">

                            <div className="whoAreWe1 text-[15px] leading-7 max-smCustom:leading-6 text-center bg-sky-100 py-10 px-10 rounded-[30px] font-inknutAntiqua">

                                <div className="font-montSerrat bg-sky-300 px-3 py-[7px] rounded-2xl text-center mb-3">

                                    <span className='text-[20px] font-semibold max-smCustom:text-[18px]'>How It Works Section
                                    </span>

                                    <p
                                        className='text-[15px] max-smCustom:text-[12px] mt-3 max-smCustom:mt-1'
                                    >

                                        Step By Step Process

                                    </p>
                                    
                                </div>

                                Register: Register With Us After understanding completely how it works. You are official on the team! <br /><br />

                                Refer Projects: Once you are on the team recommond our services and bring in clients who need our services. <br /><br />

                                Earn Commisions: Once the project goes live and we get full and final payment you get a sweet commisions. THe more clients you bring,  
                                the more you earn!


                            </div>

                            <div className="whoAreWe1 text-[15px] leading-7 max-smCustom:leading-6 text-center bg-yellow-100 py-10 px-10 rounded-[30px] font-inknutAntiqua">

                                <div className="font-montSerrat bg-yellow-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                                    <span className='text-[20px] font-semibold max-smCustom:text-[18px] '>What You Earn
                                    </span>

                                    <p
                                        className='text-[15px] max-smCustom:text-[12px] mt-3 max-smCustom:mt-1'
                                    >

                                        Here is where things get interesting

                                    </p>

                                </div>

                                For Small Projects: Got a small web design project? You will earn 10% of the total value <br /><br />

                                For Big Projects: For large project like complex website, webapps, IVRS campaigns, or full service packages, you will earn 12% !<br /><br />

                                Example: If you bring us a website worth &#8377;50,000 you will get &#8377;5,000 in commision. Pretty cool, right?

                            </div>

                            <div className="whoAreWe1 text-[15px] leading-7 max-smCustom:leading-6 text-center bg-pink-100 py-10 px-10 rounded-[30px] font-inknutAntiqua ">

                                <div className="font-montSerrat bg-pink-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                                    <span className='text-[20px] font-semibold max-smCustom:text-[18px] '>Why Partner With Us
                                    </span>

                                    <p
                                        className='text-[15px] max-smCustom:text-[12px] mt-3 max-smCustom:mt-1'
                                    >

                                        We make every step easy. No Barriers!

                                    </p>

                                </div>

                                Good Commisions: We pay high rates because we value your efforts, Thanks You!<br /><br />

                                Flexible Work: Refer clients at your own speed, from anywhere.<br /><br />

                                Diverse Services: From websites to campaigns, we have got something for every client.<br /><br />

                                Timely Payments: Get paid as soon as we do. No waiting around.

                            </div>

                            <div className="whoAreWe1 text-[15px] leading-7 max-smCustom:leading-6 text-center bg-lime-100 py-10 px-10 rounded-[30px] font-inknutAntiqua">

                                <div className="font-montSerrat bg-lime-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                                    <span className='text-[20px] font-semibold max-smCustom:text-[18px] '>Affiliate Resource
                                    </span>

                                    <p
                                        className='text-[15px] max-smCustom:text-[12px] mt-3 max-smCustom:mt-1'
                                    >

                                        We help you to get started

                                    </p>

                                </div>

                                Official Member: Once you register you're officially in the team.<br /><br />

                                Marketing Materials: Need some cool visuals to send out? We've got a library of stuff for you! <br /><br />

                                Tracking: We are always available to give you updates on your your referrals, projects, and earnings

                            </div>

                            <div className="whoAreWe1 text-[15px] leading-7 max-smCustom:leading-6 text-center bg-pink-100 font-inknutAntiqua py-10 px-10 rounded-[30px]">

                                <div className="font-montSerrat bg-pink-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                                    <span className='text-[20px] font-semibold max-smCustom:text-[18px] '>Terms and Conditions
                                    </span>

                                    <p
                                        className='text-[15px] max-smCustom:text-[12px] mt-3 max-smCustom:mt-1'
                                    >

                                        For full transparency, here is the fine print

                                    </p>

                                </div>

                                Payment Terms: Commisions are paid with in a week after receive full and final payment from the client. <br/><br/>

                                Project Eligibility: Only projects worth over ₹25,000 qualify for the affiliate program. <br/><br/>

                                Ethics: We reserve the right to reject any of your referrals if they don't align with values or terms                       

                            </div>

                            <div className="whoAreWe1 text-[15px] leading-7 max-smCustom:leading-6 text-center bg-sky-100 py-10 px-10 rounded-[30px] font-inknutAntiqua">

                                <div className="font-montSerrat bg-sky-300 px-3 py-[7px] rounded-2xl text-center mb-3 ">

                                    <span className='text-[20px] font-semibold max-smCustom:text-[18px] '>FAQs
                                    </span>

                                    <p
                                        className='text-[15px] max-smCustom:text-[12px] mt-3 max-smCustom:mt-1'
                                    >

                                        Frequently Asked Questions

                                    </p>

                                </div>

                                <span className='font-bold'>
                                1. How do I know if my referral was successful?<br /></span>

                                A) We’ll notify you via email and WhatsApp once a project is confirmed.<br /><br/>


                                <span className='font-bold'>2. When will I get paid?</span><br/>

                                A) Payments are made after we receive complete payment from the client. <br /><br/>

                                <span className='font-bold'>3. What types of projects qualify for commissions?</span> <br />

                                A) Any project worth over ₹25,000 qualifies for our affiliate program. <br /><br />

                                You can reach us with any questions!   



                                {/* 4. Who can I contact for support or questions? <br />

                                A) You can reach out to us anytime via email or WhatsApp. <br /><br /> */}


                            </div>

                        </div>

                    </div>

                    <div className="w-full flex justify-center font-inknutAntiqua ">

                        <form
                            className=' border-black border-2 w-[1000px] max-smCustom:w-fit max-smCustom:mx-[20px] px-16 max-smCustom:px-0 bg-white hover:border-sky-500 transition-all duration-300 py-5 mb-20 rounded-2xl text-[10px] relative'
                            onSubmit={(e) => formFunction(e)}
                        >

                            {/* Have to see this */}

                            <div className="w-full justify-center text-xl items-center absolute bottom-[15px] left-[30%] max-smCustom:bottom-[-50px] max-smCustom:left-0">

                                <div
                                    className='enterTheFields hidden items-center text-red-500 px-3 py-2 rounded-xl space-x-2'
                                >

                                    <div className="rounded-xl text-[15px] max-smCustom:text-[12px] font-semibold">
                                        
                                        Oops! You left some empty boxes 

                                    </div> 
                                    
                                    <CgDanger 
                                        className='text-[20px]'
                                    />    

                                </div> 

                            </div> 

                            <label
                                className='max-smCustom:mx-[10px]'
                            > Name : <span className='text-red-500 font-bold text-[10px]'>*</span> </label> <br />
                            <input 
                                className='name h-[30px] w-[880px] max-smCustom:w-[95%] max-smCustom:mx-[2.5%] max-smCustom:px-2 bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px] max-smCustom:text-[12px]'
                                type='text'
                                placeholder='Enter Your Name'
                                required
                                name='name'
                            /><br />

                            <label
                                className='max-smCustom:mx-[10px]'
                            > Email : <span className='text-red-500 font-bold text-[10px]'>*</span> </label> <br />
                            <input
                                type='email'
                                className='email h-[30px] w-[880px] max-smCustom:w-[95%] max-smCustom:mx-[2.5%] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px] max-smCustom:text-[12px]'
                                placeholder='Enter Your Email'
                                required
                                name='email'
                            /><br />

                            <label
                                className='max-smCustom:mx-[10px]'
                            > Where are you from : <span className='text-red-500 font-bold text-[10px]'>*</span> </label> <br />

                            <input 
                                className='place h-[30px] w-[880px] max-smCustom:w-[95%] max-smCustom:mx-[2.5%] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px] max-smCustom:text-[12px]'
                                placeholder='Enter Your Message'
                            /> <br />

                            <div className="flex items-center max-smCustom:mx-[10px]">

                                <input
                                    required 
                                    type='checkbox'
                                    className='rounded-lg checkbox mr-2 w-3 h-3 max-smCustom:mr-3 max-smCustom:h-[30px] max-smCustom:w-[30px] max-smCustom:transform max-smCustom:scale-100'
                                />

                                
                                <label
                                    className='text-[15px] max-smCustom:text-[10px] relative'
                                    onClick={() => {

                                        const checkBox = document.querySelector('.checkbox');
                                        
                                        checkBox.checked;

                                    }}
                                > <span className='absolute left-[-7px] text-red-500 font-bold text-[10px]'>*</span> I’ve read all the steps and terms <span className='font-montSerrat'>&</span> conditions, and I’m all set to be an official Connekt affiliate! </label><br /><br />

                            </div>

                            <button 
                                type='submit'
                                className='h-[30px] bg-greenCustom text-black px-3 py-1 max-smCustom:px-2 rounded-xl mt-5 linkedinButton text-[15px] max-smCustom:text-[12px] max-smCustom:mx-[20px]'
                                onSubmit={(e) => formFunction(e)}
                            > Start Affiliate Journey </button>


                        </form> 

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

export default EarnWithUs