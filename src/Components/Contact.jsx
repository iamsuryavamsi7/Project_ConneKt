import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './CSS/Contact.css'
import { TiInfo } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { CgDanger } from 'react-icons/cg'
import './CSS/About.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Contact = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name1: '',
        email: '',
        projectName: '',
        message: '' 
    });

    const infoButtonFunction = (e) => {

        e.preventDefault();

        navigate('/plans');

    }

    const formFunction = (e) => {

        e.preventDefault();

        const formFunctionInterval = setInterval(() => {

            const selectValue1 = document.querySelector('.select1').value;

            const selectValue2 = document.querySelector('.select2').value;

            const selectValue3 = document.querySelector('.select3').value;

            const obj1 = document.querySelector('.enterTheFields');

            if ( selectValue1 === 'Please Select' || selectValue2 === 'Please Select' || selectValue3 === 'Please Select' ) {

                obj1.style.display = 'flex'

            } else {

                const name = document.querySelector(".name").value;

                const email = document.querySelector('.email').value;

                const projectName = document.querySelector('.projectName').value;

                const projectType = document.querySelector('.projectType').value;
            
                const industryType = document.querySelector('.industryType').value;

                const services = document.querySelector('.services').value;

                let whatsappURL = `https://wa.me/918886182384?text=Name: ${encodeURIComponent(name)}%0A` +
                `Email: ${email}%0A` + 
                `Project Name: ${encodeURIComponent(projectName)}%0A` + 
                `Project Type: ${encodeURIComponent(projectType)}%0A` + 
                `Industry Type: ${encodeURIComponent(industryType)}%0A` + 
                `Services Interested In: ${encodeURIComponent(services)}%0A`;
    
                const message = document.querySelector('.message').value;

                if (  message.trim() !== "" ) {

                    whatsappURL += `Message: ${encodeURIComponent(message)}`;

                }

                window.open(whatsappURL, '_blank')

                obj1.style.display = 'none'

                window.location.reload();

                window.scrollTo(0, 0);

                clearForm();

            }

        }, 300);

        setTimeout(() => {

            clearTimeout(formFunctionInterval);

        }, 400);

    }

    const clearForm = () => {

        setForm({
            name1: '',
            email: '',
            projectName: '',
            message: '' 
        });

    }

    const onChangeFunction = (e) => {

        const value = e.target.value;

        setForm({...form, [e.target.name] : value});

    }

    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {

        window.scrollTo(0, 0);

        // Runnin the page loading

        const updatePageLoading = () => {

            setPageLoading(false);

        }

        const pageLoadingId = setInterval(updatePageLoading, 3000);

        setTimeout(() => {
            
            clearTimeout(pageLoadingId);
            
        }, 5000);

    }, []);

    return (

        <>
        
            {!pageLoading && (

                <>

                    <NavBar /> 
                    
                    <div className="pt-[150px] max-smCustom:pt-[100px] font-montSerrat flex justify-center text-[30px] max-smCustom:text-[25px] font-semibold relative ">

                    <div className="relative px-3 rounded-xl">

                            Contact Us

                            <img 
                                className='w-[50px] h-[50px] absolute right-[-30px] top-[-28px] green_image'
                                src='/Common/pale_blue_right.png'
                            />

                    </div>

                    </div>

                    <div className="w-full flex justify-center py-10">
                
                        <div className="bg-yellowCustom rounded-xl px-10 max-smCustom:px-3 py-5 border-2 border-black max-smCustom:mx-5">

                            <p
                                className='text-[18px] max-smCustom:text-[12px] font-inknutAntiqua w-[900px] max-smCustom:w-full'
                            >

                                Hey there! &#127880; <br /><br />

                                We are excited to hear from you! whether you have questions, need support or want to discuss about a project, drop us a message 

                            </p>

                        </div>

                    </div>

                    <div className="w-full flex justify-center font-inknutAntiqua ">

                            <form
                                className=' border-black border-2 w-[1000px] max-smCustom:w-[90%] px-16 max-smCustom:px-5 bg-white hover:border-sky-500 transition-all duration-300 py-5 mb-20 rounded-2xl text-[10px] relative'
                                onSubmit={(e) => formFunction(e)}
                            >

                                <div className="w-full justify-center text-xl items-center absolute  bottom-[15px] left-[20%] max-smCustom:left-0 max-smCustom:bottom-[-60px]">

                                    <div
                                        className='enterTheFields hidden items-center text-red-500 px-3 py-2 rounded-xl space-x-2'
                                    >

                                        <div className="rounded-xl text-[15px] max-smCustom:text-[10px] font-semibold">
                                            
                                            Oops! You left some empty boxes 

                                        </div> 
                                        
                                        <CgDanger 
                                            className='text-[20px] max-smCustom:text-[14px]'
                                        />    

                                    </div> 

                                </div>

                            <label> Name : <span className='text-red-500 font-bold text-[10px]'>*</span> </label> <br />
                            <input 
                                className='name h-[30px] w-[880px] max-smCustom:w-full bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px] max-smCustom:text-[12px]'
                                type='text'
                                placeholder='Enter Your Name'
                                required
                                name='name1'
                                value={form.name1}
                                onChange={(e) => onChangeFunction(e)}
                            /><br />

                            <label> Email : <span className='text-red-500 font-bold text-[10px]'>*</span> </label> <br />
                            <input
                                type='email'
                                className='email h-[30px] w-[880px] max-smCustom:w-full bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px] max-smCustom:text-[12px]'
                                placeholder='Enter Your Email'
                                required
                                name='email'
                                value={form.email}
                                onChange={(e) => onChangeFunction(e)}
                            /><br />

                            <label> Your Project Name : <span className='text-red-500 font-bold text-[10px]'>*</span> </label> <br />
                            <input 
                                type='text'
                                className='projectName h-[30px] w-[880px] max-smCustom:w-full bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px] max-smCustom:text-[12px]'
                                placeholder='Enter Your Project Name'
                                required
                                name='projectName'
                                value={form.projectName}
                                onChange={(e) => onChangeFunction(e)}
                            /><br />
                            
                            <label> Project Type : <span className='text-red-500 font-bold text-[10px]'>*</span> </label>

                            <select
                                className='projectType w-[880px] max-smCustom:w-full mt-2 text-[15px] max-smCustom:text-[12px] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] border-solid rounded-xl appearance-none h-[30px] px-2 select1'
                                required
                            >

                                <option value={'Please Select'}> Please Select </option>
                                <option value={'New Project'}> New Project </option>
                                <option value={'Re - Design'}> Re - Design </option>
                                <option value={'Maintanence'}> Maintanence </option>
                                <option value={'Consultation'}> Consultation </option>

                            </select> <br /> <br />

                            <label> Industry Type : <span className='text-red-500 font-bold text-[10px]'>*</span> </label>

                            <select
                                className='industryType w-[880px] max-smCustom:w-full mt-2 text-[15px] max-smCustom:text-[12px] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] border-solid rounded-xl appearance-none h-[30px] px-2 select2'
                                required
                            >

                                <option value={'Please Select'}> Please Select </option>
                                <option value={'Retail / E-Commerce'}> Retail / E-Commerce </option>
                                <option value={'Health Care'}> Health Care </option>
                                <option value={'Education'}> Education </option>
                                <option value={'Beauty and Wellness'}>Beauty and Wellness</option>
                                <option value={'Information Technology'}>Information Technology</option>
                                <option value={'Personal'}>Personal</option>
                                <option value={'Marketing'}>Marketing</option>
                                <option value={'Clothing'}>Clothing</option>
                                <option value={'Others'}>Others</option>

                            </select> <br /> <br />

                            <label> Services Interested in : <span className='text-red-500 font-bold text-[10px]'>*</span> </label>

                            <select
                                className='services select3 w-[880px] max-smCustom:w-[90%] mt-2 text-[15px] max-smCustom:text-[12px] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] border-solid rounded-xl appearance-none h-[30px] px-2 '
                                required
                            >

                                <option value={'Please Select'}> Please Select </option>
                                <option value={'Launch Kit'}>Launch Kit</option>
                                <option value={'Boost Kit'}> Boost Kit </option>
                                <option value={'Ultimate Suite'}> Ultimate Suite </option>
                                <option value={'Custom Kit'}> Custum Kit </option>
                                <option value={'Enquiry'}> Enquiry </option>

                            </select>
                            
                            <TiInfo 
                                className='h-[30px] max-smCustom:h-[25px] w-auto absolute right-3 top-[398px] active:text-yellowCustom transition-all duration-300 cursor-pointer'
                                onClick={(e) => infoButtonFunction(e)}
                            />

                            <br /> <br />

                            <label> How connekt can help you : <span className='text-gray-500'> ( Optional ) </span> </label> <br />

                            <input 
                                className='message h-[30px] w-[880px] max-smCustom:w-full bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px]'
                                placeholder='Enter Your Message'
                                name='message'
                                value={form.message}
                                onChange={(e) => onChangeFunction(e)}
                            /> <br />

                            <button 
                                type='submit'
                                className='h-[30px] bg-greenCustom text-black px-3 py-1 rounded-xl mt-2 linkedinButton text-[15px] max-smCustom:mx-2'
                            > Submit </button>


                            </form>
                        
                    </div>

                    <Footer />

                </>

            )}

                {pageLoading && (

                <>

                    <div className="w-full fixed bg-white top-0 bottom-0 left-0 right-0 text-[30px] max-smCustom:text-[20px] animate-pulse">

                        <div className="flex justify-center w-full items-center space-x-3 h-full">

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

export default Contact  