import React, { useEffect, useState } from 'react'
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { TfiLinkedin } from 'react-icons/tfi';
import '../CSS/ProfileSurya.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ProfileSurya = () => {

    const [pageLoading, setPageLoading] = useState(true);

    const navigateFunction = (e, url) => {

		e.preventDefault();

		window.open(url);

	} 

    useEffect(() => {

        setTimeout(() => {

            setPageLoading(false);

        }, 3000);

    }, []);

    return (

        <>

        {!pageLoading && (
        
            <div
                className='fixed top-0 right-0 left-0 bottom-0 bg-black'
            >
            
                <div className="top-0 right-0 left-0 bottom-0 flex justify-center text-white imgLayer2">

                    <div className="imgLayer1 w-full flex h-[175px] justify-center">

                        <div className="my-20 border-[10px] border-black h-fit rounded-[50%] relative top-[28px]">

                            <img 
                                src='/Surya/Surya.webp'
                                className='profileImage w-[112px] h-[112px] rounded-[50%] object-cover object-center border-[6px] border-white'
                            />

                        </div>

                    </div>

                    </div>

                    <div className="text-white block w-full text-center justify-center my-[70px] text-[30px]">

                    <div className="bioName leading-[1.2] tracking-wider ">

                        Surya Vamsi

                    </div>

                    <div className="bioName text-[12px] mt-1 leading-[1.64]">

                        DOING ABNORMAL THINGS

                    </div>

                    <div className="w-full flex justify-center my-7  items-center space-x-4">

                        <FaTelegramPlane 
                            className='text-2xl cursor-pointer'
                            onClick={(e, url) => navigateFunction(e, 'https://t.me/iamsuryavamsi')}
                        />

                        <FaInstagram
                            className='text-2xl cursor-pointer'
                            onClick={(e, url) => navigateFunction(e, 'https://www.instagram.com/suryavamsi.b/')}
                        />

                        <MdOutlineMail
                            className='text-[28px] cursor-pointer'
                            onClick={(e,url) => navigateFunction(e, 'mailto:iamsuryavamsi@gmail.com')}
                        />

                        <FaWhatsapp
                            className='text-2xl cursor-pointer'
                            onClick={(e, url) => navigateFunction(e, 'https://wa.me/919701384817')}
                        />

                        <TfiLinkedin
                            className='text-[22px] cursor-pointer'
                            onClick={(e, url) => navigateFunction(e, 'https://www.linkedin.com/in/iamsuryavamsi/')}
                        />

                    </div>

                </div>

            </div>

        )}

        {pageLoading && (

        <>

            <div className="w-full fixed bg-black text-white top-0 bottom-0 left-0 right-0 text-[30px] max-smCustom:text-[20px]">

                <div className="flex justify-center w-full items-center space-x-3 h-full animate-pulse">

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

export default ProfileSurya