import React from 'react'
import Service from './Services/Service'
import Service1 from './Services/Service1'
import '../Components/CSS/KeyServices.css'

const KeyServices = () => {

    return (

        <div className="w-full text-center justify-center max-mdCustom:pt-[70px]">

            <div className="">

                <p
                    className='key_service bg-greenCustom inline-block text-[25px] font-semibold px-4 py-2 rounded-xl border-2 border-black max-smCustom:px-2 max-smCustom:py-1 max-smCustom:text-[20px]'
                >

                    Key Services

                </p> 

            </div>

            <div className="flex justify-center">

                <div className="bg-greenCustom block mt-20 rounded-[30px] pb-10 mb-10 max-mdCustom:px-0 border-2 border-black shadow-2xl shadow-greenCustom max-smCustom:mx-7">

                    <Service 
                        diveIn={'/dive-in/web-design-service'}
                        imgSrc={'/Services/Website_Desigining.png'}
                        serviceHeading={(
                            <>
                            
                                Website / Web App <br />Designing

                            </>
                        )}
                        serviceDesc={(
                            <>
                            
                            Creative and user friendly designs <br />
                            that capitivate your audience and <br />
                            reflect your brand.
                            
                            </>
                        )}
                    />

                    <Service1 
                        diveIn={'/dive-in/web-development-service'}
                        imgSrc={'/Services/Website_Development.png'}
                        serviceHeading={(
                            <>
                            
                            Website / Web App <br />
                            Development

                            </>
                        )}
                        serviceDesc={(
                            <>
                            
                            High performing website and <br />
                            web applications built with the <br />
                            latest technologies to drive your <br />
                            business forward.
                            
                            </>
                        )}
                    />

                    <Service 
                        diveIn={'/dive-in/web-maintenance-service'}
                        imgSrc={'/Services/Website_Maintanence.png'}
                        serviceHeading={(
                            <>
                            
                            Website / Web App <br />
                            Maintenance

                            </>
                        )}
                        serviceDesc={(
                            <>
                            
                            Regular updates and maintenance  <br />
                            to keep your website running  <br />
                            smootly and securely.
                            
                            </>
                        )}
                    />

                    <Service1 
                        diveIn={'/dive-in/search-engine-optimization'}
                        imgSrc={'/Services/Search_Engine_Optimization.png'}
                        serviceHeading={(
                            <>
                            
                            Search Engine Opimization

                            </>
                        )}
                        serviceDesc={(
                            <>
                            
                            Boost your visibility on search <br />
                            engines and attract organic traffic <br />
                            to your website.
                            
                            </>
                        )}
                    />

                    <Service 
                        diveIn={'/dive-in/social-media-advertisements'}
                        imgSrc={'/Services/Google_Ads.png'}
                        serviceHeading={(
                            <>
                            
                            Social Media Ads

                            </>
                        )}
                        serviceDesc={(
                            <>
                            
                            Targeted ads on platforms like instagram, <br />
                            facebook and more to grow your audience <br />
                            and engagement to your platforms.
                            
                            </>
                        )}
                    />

                    <Service1 
                        diveIn={'/dive-in/whatsapp-api-solutions'}
                        imgSrc={'/Services/Whatsapp_API.png'}
                        serviceHeading={(
                            <>
                            
                            Whatsapp API Solutions

                            </>
                        )}
                        serviceDesc={(
                            <>
                            
                            Streamline customer communication <br />
                            with streamless whatsapp API <br />
                            integration for your trusted <br />
                            business.
                            
                            </>
                        )}
                    />

                    <Service 
                        diveIn={'/dive-in/call-engaging-solutions'}
                        imgSrc={'/Services/Call_Engaging_Solutions.png'}
                        serviceHeading={(
                            <>
                            
                            Call Engagning Solutions

                            </>
                        )}
                        serviceDesc={(
                            <>
                            
                            TAdvanced IVR, call conferencing and <br />
                            marketing solutions to enhance customer <br />
                            interactions. 
                            </>
                        )}
                    />



                </div>


            </div>
            
        </div>

    )

}

export default KeyServices