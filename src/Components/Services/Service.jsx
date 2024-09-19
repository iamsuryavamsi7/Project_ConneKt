import React from 'react'

const Service = ({serviceHeading, serviceDesc, imgSrc}) => {

    return (

        <div className="flex justify-center space-x-[200px] items-center w-full pt-16 text-left max-mdCustom:block max-mdCustom:text-center max-mdCustom:space-x-0 px-[120px]">

            <div className="max-mdCustom:flex max-mdCustom:justify-center">

                <img 
                    src={`${imgSrc}`}
                    className='w-[404px]'
                />

            </div>

            <div className="font-montSerrat flex-col max-mdCustom:justify-center max-mdCustom:text-center">

                <p
                    className='text-[22px] font-bold text-left max-mdCustom:text-center'
                >

                    {serviceHeading}

                </p>

                <p
                    className='text-left pt-7 max-mdCustom:text-center'
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

export default Service