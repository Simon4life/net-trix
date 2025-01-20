import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#C9A50A] rounded-t-[50px] text-white'>
        <div className="md:flex items-start justify-center bg-[url('/pngtree.png')] bg-cover py-32 px-4 md:px-0">
            <div className="md:px-20 md:w-1/2 pt-20 border-r-[#FFFFFF52] md:border-r-2">
                <h1 className="text-[34px] pb-5 font-[700]">NET-TRIX</h1>
                <p className="text-[14px] pb-10">Net Trix Solutions Limited is an IT, Telecommunications Infrastructure Solution Provider that has Project Monitoring and Evaluation with R & D experience. We are proficient in providing a broad spectrum of world-class products and services. Our niche is understanding our client&apos;s needs and requirements within their business environment and tailoring a solution unique to their requirements.</p>
                <h1 className="text-[24px] pb-5 font-[700]">Contact</h1>
                <p className="text-[20px] pb-10">Suit 201, Kings Plaza Kado Estate <br /> info@net-trixsolutions.com</p>
                <h1 className="text-[24px] pb-5 font-[700]">Social Media</h1>
                <div className="flex justify-start items-center gap-5">
                    <Link href={''}><Image src={'/facebook.png'} alt='facebook' width={45.36} height={46.97}/></Link>
                    <Link href={''}><Image src={'/twitter.png'} alt='twitter' width={45.36} height={46.97}/></Link>
                    <Link href={''}><Image src={'/instagram.png'} alt='instagram' width={45.36} height={46.97}/></Link>

                </div>

            </div>
            <div className=" md:pl-20 pt-20">
                <div className="pb-16">
                <h1 className="text-[32px] pb-3 font-[700]">Subscribe</h1>
                <p className="text-[14px] pb-7">Keep me up to date with content, updates, and offers from Net-Trix</p>
                <div className="flex justify-center items-center">
                    <input type="text" name="" placeholder='Email Address' className='text-[#fff] placeholder:text-white text-[18px] p-5 border-[#F8C301] border-2 bg-transparent outline-none' />
                    <button className="bg-[#F8C301] text-white py-6 px-10">Submit</button>
                </div>
                </div>
                <div className="flex items-start justify-between border-t-[#FFFFFF52] border-t-2 pt-16 text-left">
                    <div className="w-[50%]">
                        <h1 className="text-[24px] pb-5 font-[700]">About Us</h1>
                        <ul>
                        <li className='mb-5 text-[20px]'><Link href={'https://net-trixsolutions.com/'} className=' hover:text-[#F8C301]'>Home</Link></li>
                        <li className='my-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Industries</Link></li>
                        <li className='my-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Services</Link></li>
                        </ul>

                    </div>
                    <div className="w-[50%]">
                        <h1 className="text-[24px] pb-5 font-[700]">Support</h1>
                        <ul>
                        <li className='mb-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Help & Support</Link></li>
                        <li className='my-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Innovations</Link></li>
                        <li className='my-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Net-Verse</Link></li>
                        <li className='my-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Reach out to us</Link></li>
                        </ul>


                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer