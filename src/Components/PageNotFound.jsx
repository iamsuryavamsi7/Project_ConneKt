import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const PageNotFound = () => {

    return (

        <>

            <NavBar />

            <div className="top-0 right-0 left-0 bottom-0 bg-white flex justify-center items-center py-[150px]">

                <img 
                    src='/Error/space.png'
                />

            </div>

            <Footer />

        </>

    )

}

export default PageNotFound