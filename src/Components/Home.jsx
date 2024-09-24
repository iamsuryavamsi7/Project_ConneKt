import React, { useEffect, useState } from 'react'
import KeyServices from './KeyServices'
import WhyAreWeUnique from './WhyWeAreUnique'
import '../Components/CSS/Home.css'
import NavBar from './NavBar'
import Footer from './Footer'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Home = () => {

    const [heroSectionImg, setHeroSectionImg] = useState(false);

    const [pageLoading, setPageLoading] = useState(true);

    const askUsAnything = (e) => {

        e.preventDefault();

        const openLink = () => {

            window.open('https://wa.me/918886182384?text=Hi%20there!%20I%20just%20checked%20out%20your%20website%20and%20I%E2%80%99m%20curious%20about%20your%20services!%20I%27ve%20something%20to%20ask%20more..', '_blank')

        }

        const openLinkFunction = setInterval(openLink, 500);

        setTimeout(() => {

            clearTimeout(openLinkFunction);

        }, 600);

    }

    useEffect(() => {

        window.scrollTo(0, 0);

        const heroSectionImgFunction = () => {

            if ( window.innerWidth <= 1000 ) {

                setHeroSectionImg(true);
                
            } else {

                console.log("windows.innerWidth is greater than 1000 pixels");

            }

        }

        const intervalId = setInterval(heroSectionImgFunction, 500);

        setTimeout(() => {

            clearInterval(intervalId);

        }, 5000);

        // Runnin the page loading

        const updatePageLoading = () => {

            setPageLoading(false);

        }

        const pageLoadingId = setInterval(updatePageLoading, 3000);

        setTimeout(() => {

            clearInterval(pageLoadingId);

        }, 6000);

    }, []);

    return (

        <>

            { !pageLoading && (

                    <>

                    <NavBar />
                    
                    <div className="w-full flex justify-center items-center max-mdCustom:flex-col ">

                        {heroSectionImg && (

                            <div className="relative">

                                <img 
                                    src='https://connekt-bucket-01.s3.eu-north-1.amazonaws.com/Hero_Section_Main.png'
                                    className='hero_main_img h-[700px] w-[700px] max-mdCustom:w-[600px] max-mdCustom:h-auto max-smCustom:w-[500px] max-smCustom:h-[400px]'
                                />

                                <img 
                                    src='/Common/pale_blue_right.png'
                                    className='blue_right w-[70px] max-smCustom:w-[40px] absolute top-[140px] right-10 max-mdCustom:right-6 max-mdCustom:top-[120px] rotate-[10deg] max-smCustom:top-[80px] max-smCustom:right-[23px] max-smCustom:rotate-[-1deg]'
                                />

                            </div>

                        )}

                        <div className="relative max-smCustom:w-[70%]">

                            <img 
                                src='/Common/yellow_left.png'
                                className='blue_right w-[70px] max-smCustom:w-[40px] absolute left-[-70px] top-[-40px] rotate-[-10deg] max-smCustom:left-[-40px] max-smCustom:top-[-20px]'
                            />

                            <div
                                className='hero_desc'
                            >

                                <p
                                    className='font-semibold text-[40px] max-smCustom:text-[25px]'
                                >

                                    Take your business to <br />
                                    <span
                                        className='text-paleGreen animate-pulse'
                                    >next level </span>

                                </p>

                                <p
                                    className='text-[18px] font-montSerrat max-smCustom:text-[15px]'
                                >

                                    Get a custom website and smart digital solutions <br />
                                    using the latest tech to grab attention and make your <br />business grow.

                                </p>

                                <p
                                    className='askUsAnything font-montSerrat text-[15px] bg-yellowCustom inline-block px-[10px] py-[7px] rounded-[10px] font-semibold mt-5 cursor-pointer'
                                    onClick={(e) => askUsAnything(e)}
                                >

                                    <button
                                    >Ask us anything</button>

                                </p>
                            </div>

                        </div>

                        { !heroSectionImg && (

                            <div className="relative">

                                <img 
                                    src='/Hero_Section/Hero_Section_Main.png'
                                    className='hero_main_img h-[700px] w-[700px]'
                                />

                                <img 
                                    src='/Common/pale_blue_right.png'
                                    className='blue_right w-[70px] absolute top-[140px] right-10'
                                />

                            </div>

                        )}

                    </div>

                    <KeyServices />

                    <WhyAreWeUnique />

                    <Footer />

                    </>

                )

            }

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

export default Home