import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/KeyServices.css' 

const Service1 = ({serviceHeading, serviceDesc, imgSrc, diveIn}) => {

    const navigate = useNavigate();

    const divertion = (e) => {

        e.preventDefault();

        const intervalFunction = setInterval(() => {
 
            navigate(diveIn)

        }, 500);

        setTimeout(() => {

            clearInterval(intervalFunction);

        }, 600);

    }

    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {

        const checkWidth = setInterval(() => {

            if ( window.innerWidth <= 1000 ) {

                setIsDesktop(false);

                console.log('checkingWidth' + window.innerWidth);

            }

        }, 500)

        setTimeout(() => {

            clearInterval(checkWidth);

        }, 5000)

    }, []);

    return (

        <div className="service flex justify-around bg-white rounded-[30px] py-16 items-center max-mdCustom:block max-mdCustom:px-[100px] max-smCustom:px-[40px] max-smCustom:mx-10 max-smCustom:py-7">

        {isDesktop && (

            <div className="font-montSerrat flex-col max-mdCustom:justify-center max-mdCustom:text-center relative">

                <p
                    className='text-[22px] font-bold text-left max-mdCustom:text-center max-smCustom:text-[18px]'
                >

                    {serviceHeading}

                </p>

                <p
                    className='text-left pt-7 max-mdCustom:text-center max-smCustom:text-[15px]'
                >

                {serviceDesc}

                </p>

                <div className="text-left max-mdCustom:text-center">

                    <button
                        className='diveIn1 text-white bg-paleGreen py-[5px] text-md font-bold px-3 rounded-xl mt-7 cursor-pointer'
                        onClick={divertion}
                    >

                        Dive In 

                    </button>

                </div>

            </div>

        )}

            <div className="max-mdCustom:flex max-mdCustom:justify-center">

                <img 
                    src={`${imgSrc}`}
                    loading='lazy'
                    className='w-[400px] transition-all duration-300'
                />

            </div>

            {!isDesktop && (

                <div className="font-montSerrat flex-col max-mdCustom:justify-center max-mdCustom:text-center relative">

                    <p
                        className='text-[22px] font-bold text-left max-mdCustom:text-center max-smCustom:text-[18px]'
                    >

                        {serviceHeading}

                    </p>

                    <p
                        className='text-left pt-7 max-mdCustom:text-center max-smCustom:text-[15px]'
                    >

                    {serviceDesc}

                    </p>

                    <div className="text-left max-mdCustom:text-center">

                        <button
                            className='diveIn1 text-white bg-paleGreen py-[5px] text-md font-bold px-3 rounded-xl mt-7 cursor-pointer'
                            onClick={divertion}
                        >

                            Dive In 

                        </button>

                    </div>

                </div>

            )}

        </div>

    )

}

export default Service1