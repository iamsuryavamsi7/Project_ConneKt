import React from 'react'
import '../Components/CSS/NavBar.css'

const NavBar = () => {

    return (

        <>

            <div className="fixed z-50 right-10 bottom-10">

                <img
                    src='/Nav_Bar/chat_with_us.png' 
                    className='text-green-500 h-[50px] w-auto rounded-2xl cursor-pointer'
                />

            </div>
        
            <div className="flex justify-around w-full h-[100px] items-center bg-white z-50 fixed">

                <div className="ml-[100px] ">

                    <img 
                        className='w-[300px] h-[60px] max-mdCustom:w-[200px] max-mdCustom:h-[50px]'
                        src='/Nav_Bar/Connekt_Logo.png'
                        alt='Company Logo'
                    />

                </div>

                <div className="mr-[150px]">

                    <ul
                        className='flex h-full items-center space-x-10 text-xl font-inknutAntiqua max-mdCustom:space-x-7'
                    >

                        <li><button
                            className='button_01'
                        > Services </button></li>
                        <li><button
                            className='button_02'
                        > Plans </button></li>
                        <li><button
                            className='button_03'
                        > About </button></li>
                        <li><button
                            className='button_04'
                        > Affiliation/Partnership </button></li>
                        <li><button
                            className='button_05'
                        > Contact </button></li>

                    </ul>

                </div>

            </div>

        </>

    )

}

export default NavBar