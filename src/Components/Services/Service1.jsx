import React from 'react'

const Service1 = ({serviceHeading, serviceDesc, imgSrc}) => {

    return (

        <div className="flex justify-center space-x-[200px] items-center w-full pt-16 max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-x-0">

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
                    className='text-white bg-paleGreen py-[5px] text-md font-bold px-3 rounded-2xl mt-7'
                >

                    Dive In 

                </button>

            </div>

            <div className="max-mdCustom:flex max-mdCustom:justify-center max-mdCustom:mr-[100px]">

            <img 
                src={`${imgSrc}`}
                className='w-[404px]'
            />

            </div>

            <div className="font-montSerrat flex-col text-left min-mdCustom:hidden  max-mdCustom:text-center">

                <p
                    className='text-[22px] font-bold'
                >

                    {serviceHeading}

                </p>

                <p
                    className='pt-7'
                >

                {serviceDesc}

                </p>

                <button
                    className='text-white bg-paleGreen py-[5px] text-md font-bold px-3 rounded-2xl mt-7'
                >

                    Dive In 

                </button>

            </div>

        </div>

    )

}

export default Service1