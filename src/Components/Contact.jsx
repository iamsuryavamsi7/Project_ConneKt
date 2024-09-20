import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './CSS/Contact.css'
import ContactDropDown from './ContactDropDown'
import ContactDropDown2 from './ContactDropDown2'

const Contact = () => {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (

        <>
        
            <NavBar />
            
            <div className="pt-[150px] font-montSerrat flex justify-center text-[30px] font-semibold relative ">

               <div className=" relative">

                    Contact Us

                    <img 
                        className='w-[50px] h-[50px] absolute right-[-40px] top-[-25px] green_image'
                        src='/Common/pale_blue_right.png'
                    />

               </div>

            </div>

            <div className="w-full flex justify-center py-10">
        
                <p
                    className='text-[18px] font-inknutAntiqua w-[900px]'
                >

                    Hey there! &#127880; <br /><br />

                    We are excited to hear from you! whether you have questions, need support or want to discuss about a project, drop us a message 

                </p>

            </div>

            <div className="w-full flex justify-center font-inknutAntiqua ">

                    <form
                        className='bg-gray-300 px-36 py-20 mb-20 rounded-2xl'
                    >

                    <label> Name : </label> <br />
                    <input 
                        className='h-[30px] border-black border-2 rounded-lg my-5 px-2'
                        type='text'
                        required
                    /><br />

                    <label> Email : </label> <br />
                    <input
                        type='text'
                        className='h-[30px] border-black border-2 rounded-lg my-5 px-2'
                        required
                    /><br />

                    <label> Project Name : </label> <br />
                    <input 
                        type='text'
                        className='h-[30px] border-black border-2 rounded-lg my-5 px-2'
                        required
                    /><br />
                    
                    <label> Project Type : </label> <br />
                    <ContactDropDown /> <br />

                    <label> Industry Type : </label> <br />

                    <input
                        type='text'
                        required
                        className='h-[30px] border-black border-2 rounded-lg my-5 px-2'
                    /><br />

                    <label> Services Interested in </label>

                    <ContactDropDown2 />

                    <label> Message </label> <br />

                    <input 
                        className='h-[30px] border-black border-2 rounded-lg my-5 px-2'
                    /> <br />

                    <input 
                        type='submit'
                        className='h-[30px] bg-gray-800 text-white px-3 rounded-lg my-5'
                    />


                    </form>
                
            </div>

            <Footer />

        </>

    )

}

export default Contact  