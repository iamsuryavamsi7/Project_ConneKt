import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './CSS/PageNotFound.css'
import { BsGearWideConnected } from 'react-icons/bs'

const PageNotFound = () => {

    return (

        <>

            <NavBar />

            <div className="top-0 right-0 left-0 bottom-0 bg-white flex justify-center items-center py-[100px]">

                <div className="block text-center space-y-20 relative">

                    <BsGearWideConnected
                            className='absolute right-[160px] bottom-[140px] text-[50px] animate-spin'
                        />

                    <img 
                        src='/Error/space.png' 
                    />

                    <div className="relative">

                        <button
                            className='button px-2 py-1 bg-greenCustom2 rounded-xl text-xl font-inknutAntiqua'
                        >Go To Home</button>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    )

}

export default PageNotFound