import React from 'react'
import './CSS/PageNotFound.css'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const navigate = useNavigate();

    const takMeHome = (e) => {

        e.preventDefault();

        setTimeout(() => {

            navigate('/');

        }, 300);

    }

    return (

        <>

            <div className="top-0 right-0 left-0 bottom-0 bg-white fixed flex justify-center items-center py-[100px]">

                <div className="block text-center space-y-20 items-center">

                    <div className="font-montSerrat text-[25px] font-semibold">

                        Oops! Looks like you’ve wandered off the map. 🚀 Let’s get you back on track!

                    </div>

                    <div className="flex justify-center items-center">

                        <img 
                            src='/Error/space.png'
                            
                        />

                    </div>

                    <div className="flex justify-center items-center space-x-5">

                        <button
                            className='button px-3 py-2 rounded-xl text-xl font-inknutAntiqua bg-sky-200'
                            onClick={(e) => takMeHome(e)}
                        >Take me home</button>

                    </div>

                </div>

            </div>

        </>

    )

}

export default PageNotFound