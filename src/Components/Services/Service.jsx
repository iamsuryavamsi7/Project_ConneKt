import React from 'react'
import {useNavigate } from 'react-router-dom'
import '../CSS/KeyServices.css'

const Service = ({serviceHeading, serviceDesc, imgSrc, diveIn}) => {

    const navigate = useNavigate();

    const divertion = () => {

        const navigateTo = setInterval(() => {

            navigate(diveIn);

        }, 500);

        setTimeout(() => {

            clearInterval(navigateTo);

        }, 600);

        console.log(`navigated to ${diveIn}`);

    }

    return (

        <div className="service flex justify-center space-x-[200px] items-center w-full py-16 text-left max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-x-0 px-[120px] max-smCustom:px-[20px] bg-white rounded-[30px] max-smCustom:mx-10 max-smCustom:py-8 max-smCustom:w-[300px]">

            <div className="max-mdCustom:flex max-mdCustom:justify-center">

                <img 
                    src={`${imgSrc}`}
                    className='w-[404px] hover:w-[430px] transition-all max-smCustom:w-full duration-300'
                />

            </div>

            <div className="font-montSerrat flex-col max-mdCustom:justify-center max-mdCustom:text-center">

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

                <button
                    className='diveIn1 text-white bg-paleGreen py-[5px] text-md font-bold px-3 rounded-xl mt-7 cursor-pointer'
                    onClick={divertion}
                >

                    Dive In 

                </button>

            </div>

        </div>

    )

}

export default Service