import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Plans = () => {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (

        <>
        
            <NavBar />

            <div className="py-[150px] bg-red-500 mb-10 flex-1">

                <div className="grid grid-cols-4 gap-x-5 mx-10 max-mdCustom:grid-cols-2 max-mdCustom:gap-y-5 max-smCustom:grid-cols-1">

                    <div className="bg-paleGreen h-10">



                    </div>

                    <div className="bg-greenCustom h-10">


                        
                    </div>

                    <div className="bg-yellowCustom h-10">


                        
                    </div>

                    <div className="bg-sky-300 h-10">


                        
                    </div>

                </div>
                
            </div>

            <Footer />
        
        </>

    )

}

export default Plans