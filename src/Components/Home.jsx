import React, { useEffect } from 'react'
import KeyServices from './KeyServices'
import WhyAreWeUnique from './WhyWeAreUnique'
import '../Components/CSS/Home.css'
import NavBar from './NavBar'
import Footer from './Footer'

const Home = () => {
    
    const askUsAnything = (e) => {

        e.preventDefault();

        window.open('https://wa.me/918886182384?text=Hi%20there!%20I%20just%20checked%20out%20your%20website%20and%20I%E2%80%99m%20curious%20about%20your%20services!%20I%27ve%20something%20to%20ask%20more..', '_blank')

    }

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (

        <>

            <NavBar />
        
            <div className="pt-[150px] w-full relative max-mdCustom:static max-mdCustom:pt-[0px] max-smCustom:pt-[50px]">


                <div className="absolute top-[-50px] right-[200px] max-mdCustom:static max-mdCustom:w-full max-mdCustom:flex max-mdCustom:justify-center">

                    <img 
                        src='/Hero_Section/Hero_Section_Main.png'
                        className='hero_main_img h-[800px] w-[800px] right-0 bottom-0 max-mdCustom:h-[700px] max-mdCustom:w-[700px] max-smCustom:animate-none max-smCustom:transition-none max-smCustom:w-[400px] max-smCustom:h-[400px] z-40'
                    />

                    <img 
                        src='/Common/pale_blue_right.png'
                        className='blue_right w-[70px] absolute top-[170px] right-[50px] rotate-[4deg] max-mdCustom:right-[155px] max-mdCustom:top-[140px] max-mdCustom:rotate-[3deg]'
                    />

                </div>

                <div className="text-black ml-[300px] max-mdCusetom:text-center max-mdCustom:m-0 max-mdCustom:p-0 max-mdCustom:flex max-mdCustom:relative max-mdCustom:w-full max-mdCustom:justify-center">

                    <img 
                        src='/Common/yellow_left.png'
                        className='blue_right w-[70px] relative right-[60px] rotate-[-10deg] top-[30px] max-mdCustom:absolute max-mdCustom:left-[160px] max-mdCustom:top-[-40px] max-mdCustom:rotate-[-10deg]'
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
                            className='askUsAnything font-montSerrat text-[15px] bg-yellowCustom inline-block px-[10px] py-[7px] rounded-[10px] font-semibold mt-5 cursor-pointer z-10'
                            onClick={(e) => askUsAnything(e)}
                        >

                            <button
                            >Ask us anything</button>

                        </p>
                    </div>

                </div>

            </div>

            <KeyServices />

            <WhyAreWeUnique />

            <Footer />

        </>

    )

}

export default Home