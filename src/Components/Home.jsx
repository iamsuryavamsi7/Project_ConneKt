import React, { useEffect } from 'react'
import KeyServices from './KeyServices'
import WhyAreWeUnique from './WhyWeAreUnique'
import '../Components/CSS/Home.css'
import NavBar from './NavBar'
import Footer from './Footer'

const Home = () => {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (

        <>

            <NavBar />
        
            <div className="pt-[200px] w-full relative max-mdCustom:static max-mdCustom:pt-[0px]">


                <div className="absolute top-0 right-[200px] max-mdCustom:static max-mdCustom:w-full max-mdCustom:flex max-mdCustom:justify-center">

                    <img 
                        src='/Hero_Section/Hero_Section_Main.png'
                        className='hero_main_img h-[800px] w-[800px] right-0 bottom-0 max-mdCustom:h-[700px] max-mdCustom:w-[700px] max-smCustom:animate-none max-smCustom:transition-none max-smCustom:w-[400px] max-smCustom:h-[400px]'
                    />

                </div>

                <div className="text-black ml-[300px] max-mdCustom:text-center max-mdCustom:m-0 max-mdCustom:p-0">

                    <img 
                        src='/Common/yellow_left.png'
                        className='blue_right w-[70px] relative right-[55px] top-[25px] max-mdCustom:left-[210px]'
                    />

                    <div
                        className='hero_desc'
                    >

                        <p
                            className=' font-bold text-[40px]'
                        >

                            Take your business to <br />
                            <span
                                className='text-paleGreen animate-pulse'
                            >next level </span>

                        </p>

                        <p
                            className=' text-[18px] font-montSerrat'
                        >

                            Get a custom website and smart digital solutions <br />
                            using the latest tech to grab attention and make your <br />business grow.

                        </p>

                        <p
                            className=' font-montSerrat text-[15px] bg-yellowCustom inline-block px-[10px] py-[5px] rounded-[10px] font-semibold mt-5 cursor-pointer'
                        >

                            <a
                                href='https://wa.me/918886182384?text=Hey%20there!%20I%27ve%20got%20some%20questions%20and%20I%27m%20all%20ears%20for%20your%20answers!%20Let%27s%20chat'
                                target='_blank'
                            >Ask us anything</a>

                        </p>
                    </div>

                </div>

                <img 
                        src='/Common/pale_blue_right.png'
                        className='blue_right w-[70px] absolute right-[250px] top-[170px] max-mdCustom:hidden'
                />

            </div>

            <KeyServices />

            <WhyAreWeUnique />

            <Footer />

        </>

    )

}

export default Home