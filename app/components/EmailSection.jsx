"use client"
import React, { useState } from 'react'
import GithubIcon from '../../public/images/github.png'
import LinkedInIcon from '../../public/images/linkedin_icon.png'
import Image from 'next/image'
import Link from 'next/link'


const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setEmailSubmitted(true)
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = "/api/send"

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)
        const resData = await response.json()
        if (resData.status === 200) {
            
            console.log('message sent')
        }
    }

  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='z-10'>
            <h5 className='text-x font-bold text-white my-2'>
                Let&apos;s connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                I am always looking for new opportunities. My inbox is always open, feel free to get in touch!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href='https://github.com/Nahhcho'>
                    <Image eight={40} width={40} src={GithubIcon} />
                </Link>
                <Link href='https://www.linkedin.com/in/jbonilla02'>
                    <Image height={40} width={40} src={LinkedInIcon} />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                    <input name='email' type="email" id='email' required className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5' placeholder='john@email.com'/>
                </div>
                <div className='mb-4'> 
                    <label htmlFor="subject" className='text-white block m-2 text-sm font-medium'>Subject</label>
                    <input name='subject' type="text" id='subject' required className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5' placeholder='Hello!'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>Message</label>
                    <textarea name="message" id="message" className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5' placeholder="Let's talk..."></textarea>
                </div>
                <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
                {
                    emailSubmitted ?
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p> : null
                }
            </form>
        </div>

    </section>
  )
}

export default EmailSection