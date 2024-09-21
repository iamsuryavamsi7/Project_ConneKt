import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/KeyServices.css'

const Service1 = ({serviceHeading, serviceDesc, imgSrc, diveIn}) => {

    const navigate = useNavigate();

    const divertion = (e) => {

        e.preventDefault();

        navigate(diveIn)

        console.log(`navigated to ${diveIn}`);

    }

    return (

        <div className="flex justify-center space-x-[200px] items-center w-full pt-16 max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-x-0 max-smCustom:px-[40px]">

            <div className="font-montSerrat flex-col text-left max-mdCustom:hidden">

                <p
                    className='text-[22px] font-bold text-left'
                >

                    {serviceHeading}

                </p>

                <p
                    className='text-left pt-7'
                >

                {serviceDesc}

                </p>

                <button
                    className='text-white bg-paleGreen py-[5px] text-md font-bold px-3 rounded-xl mt-7 cursor-pointer diveIn1'
                    onClick={divertion}
                >

                    Dive In 

                </button>

            </div>

            <div className="max-mdCustom:flex max-mdCustom:justify-center max-mdCustom:mr-[100px]">

            <img 
                src={`${imgSrc}`}
                className='w-[404px] hover:w-[430px] transition-all duration-300'
            />

            </div>

            <div className="font-montSerrat flex-col text-left min-mdCustom:hidden  max-mdCustom:text-center">

                <p
                    className='text-[22px] font-bold max-smCustom:text-[18px]'
                >

                    {serviceHeading}

                </p>

                <p
                    className='pt-7 max-smCustom:text-[15px]'
                >

                {serviceDesc}

                </p>

                <button
                    className='text-white bg-paleGreen py-[5px] text-md font-bold px-3 rounded-2xl mt-7 diveIn1'
                    onClick={(e) => divertion(e)}
                >

                    Dive In 

                </button>

            </div>

        </div>

    )

}

export default Service1