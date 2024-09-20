import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './CSS/Contact.css'
import { TiInfo } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { CgDanger } from 'react-icons/cg'

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

            let whatsappURL = `https://wa.me/8886182384?text=Name: ${encodeURIComponent(name)}%0A` +
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

            navigate('/contact');

            clearForm();

        }

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

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (

        <>
        
            <NavBar />
            
            <div className="pt-[150px] font-montSerrat flex justify-center text-[30px] font-semibold relative ">

               <div className="relative bg-sky-100 px-3 rounded-xl border-black border-2">

                    Contact Us

                    <img 
                        className='w-[50px] h-[50px] absolute right-[-40px] top-[-38px] green_image'
                        src='/Common/pale_blue_right.png'
                    />

               </div>

            </div>

            <div className="w-full flex justify-center py-10">
        
                <div className="bg-yellowCustom rounded-xl px-10 py-5">

                    <p
                        className='text-[18px] font-inknutAntiqua w-[900px]'
                    >

                        Hey there! &#127880; <br /><br />

                        We are excited to hear from you! whether you have questions, need support or want to discuss about a project, drop us a message 

                    </p>

                </div>

            </div>

            <div className="w-full flex justify-center font-inknutAntiqua ">

                    <form
                        className=' border-black border-2 w-[1000px] px-16 bg-white hover:border-sky-500 transition-all duration-300 py-5 mb-20 rounded-2xl text-[10px] relative'
                        onSubmit={(e) => formFunction(e)}
                    >

                        <div className="w-full justify-center text-xl items-center absolute  bottom-[15px] left-[20%]">

                            <div
                                className='enterTheFields hidden items-center text-red-500 px-3 py-2 rounded-xl space-x-2'
                            >

                                <div className="rounded-xl text-[15px] font-semibold">
                                    
                                    Oops! You left some empty boxes 

                                </div> 
                                
                                <CgDanger 
                                    className='text-[20px]'
                                />    

                            </div> 

                        </div>

                    <label> Name : </label> <br />
                    <input 
                        className='name h-[30px] w-[880px] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px]'
                        type='text'
                        placeholder='Enter Your Name'
                        required
                        name='name1'
                        value={form.name1}
                        onChange={(e) => onChangeFunction(e)}
                    /><br />

                    <label> Email : </label> <br />
                    <input
                        type='email'
                        className='email h-[30px] w-[880px] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px]'
                        placeholder='Enter Your Email'
                        required
                        name='email'
                        value={form.email}
                        onChange={(e) => onChangeFunction(e)}
                    /><br />

                    <label> Your Project Name : </label> <br />
                    <input 
                        type='text'
                        className='projectName h-[30px] w-[880px] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px]'
                        placeholder='Enter Your Project Name'
                        required
                        name='projectName'
                        value={form.projectName}
                        onChange={(e) => onChangeFunction(e)}
                    /><br />
                    
                    <label> Project Type : </label>

                    <select
                        className='projectType w-[880px] mt-2 text-[15px] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] border-solid rounded-xl appearance-none h-[30px] px-2 select1'
                        required
                    >

                        <option value={'Please Select'}> Please Select </option>
                        <option value={'New Project'}> New Project </option>
                        <option value={'Re - Design'}> Re - Design </option>
                        <option value={'Maintanence'}> Maintanence </option>
                        <option value={'Consultation'}> Consultation </option>

                    </select> <br /> <br />

                    <label> Industry Type : </label>

                    <select
                        className='industryType w-[880px] mt-2 text-[15px] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] border-solid rounded-xl appearance-none h-[30px] px-2 select2'
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

                    <label> Services Interested in: </label>

                    <select
                        className='services select3 w-[880px] mt-2 text-[15px] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] border-solid rounded-xl appearance-none h-[30px] px-2'
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
                        className='h-[30px] w-auto absolute right-3 top-[398px] active:text-yellowCustom transition-all duration-300'
                        onClick={(e) => infoButtonFunction(e)}
                    />

                    <br /> <br />

                    <label> How ConneKt can help you: </label> <br />

                    <input 
                        className='message h-[30px] w-[880px] bg-[#f5f8fa] border-[#cbd6e2] border-[1px] rounded-lg mb-5 mt-2 px-2 text-[15px]'
                        placeholder='Enter Your Message'
                        name='message'
                        value={form.message}
                        onChange={(e) => onChangeFunction(e)}
                    /> <br />

                    <input 
                        type='submit'
                        className='h-[30px] bg-sky-300 text-black px-3 rounded-lg mt-2'
                    />


                    </form>
                
            </div>

            <Footer />

        </>

    )

}

export default Contact  