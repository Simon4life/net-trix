import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-[#E6E6E6] py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-bold mb-2">NET-TRIX</h2>
                    <p className="text-sm">
                        Net Trix Solutions Limited is an IT, Telecommunications Infrastructure Solution Provider with Project Monitoring, Evaluation, and R&D experience. We deliver tailored solutions to meet business-specific needs.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <p className="text-sm">Suit 201, Kings Plaza Kado Estate</p>
                    <p className="text-sm">info@net-trixsolutions.com</p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
                    <p className="text-sm mb-3">Stay updated with content, updates, and offers from Net-Trix.</p>
                    <form className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="px-3 py-2 rounded-md text-black w-full sm:flex-1"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md w-full sm:w-auto"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
                <ul className="flex flex-wrap justify-center gap-4 mb-2">
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Industries</a></li>
                    <li><a href="#" className="hover:underline">Services</a></li>
                    <li><a href="#" className="hover:underline">Support</a></li>
                    <li><a href="#" className="hover:underline">Help & Support</a></li>
                    <li><a href="#" className="hover:underline">Innovations</a></li>
                    <li><a href="#" className="hover:underline">Net-Verse</a></li>
                </ul>
                <p className="text-gray-400">&copy; {new Date().getFullYear()} Net Trix Solutions Ltd. All rights reserved.</p>
            </div>
        </footer>


        // <div className='w-full bg-[#C9A50A] rounded-t-[50px] text-white'>
        //     <div className="md:flex items-start justify-center bg-[url('/pngtree.png')] bg-cover py-32 px-4 md:px-0">
        //         <div className="md:px-20 md:w-1/2 pt-20 border-r-[#FFFFFF52] md:border-r-2">
        //             <h1 className="text-[34px] pb-5 font-[700]">NET-TRIX</h1>
        //             <p className="text-[14px] pb-10">Net Trix Solutions Limited is an IT, Telecommunications Infrastructure Solution Provider that has Project Monitoring and Evaluation with R & D experience. We are proficient in providing a broad spectrum of world-class products and services. Our niche is understanding our client&apos;s needs and requirements within their business environment and tailoring a solution unique to their requirements.</p>
        //             <h1 className="text-[24px] pb-5 font-[700]">Contact</h1>
        //             <p className="text-[20px] pb-10">Suit 201, Kings Plaza Kado Estate <br /> info@net-trixsolutions.com</p>
        //             <h1 className="text-[24px] pb-5 font-[700]">Social Media</h1>
        //             <div className="flex justify-start items-center gap-5">
        //                 <Link href={''}><Image src={'/facebook.png'} alt='facebook' width={45.36} height={46.97}/></Link>
        //                 <Link href={''}><Image src={'/twitter.png'} alt='twitter' width={45.36} height={46.97}/></Link>
        //                 <Link href={''}><Image src={'/instagram.png'} alt='instagram' width={45.36} height={46.97}/></Link>

        //             </div>

        //         </div>
        //         <div className=" md:pl-20 pt-20">
        //             <div className="pb-16">
        //             <h1 className="text-[32px] pb-3 font-[700]">Subscribe</h1>
        //             <p className="text-[14px] pb-7">Keep me up to date with content, updates, and offers from Net-Trix</p>
        //             <div className="flex justify-center items-center">
        //                 <input type="text" name="" placeholder='Email Address' className='text-[#fff] placeholder:text-white text-[18px] p-5 border-[#F8C301] border-2 bg-transparent outline-none' />
        //                 <button className="bg-[#F8C301] text-white py-6 px-10">Submit</button>
        //             </div>
        //             </div>
        //             <div className="flex items-start justify-between border-t-[#FFFFFF52] border-t-2 pt-16 text-left">
        //                 <div className="w-[50%]">
        //                     <h1 className="text-[24px] pb-5 font-[700]">About Us</h1>
        //                     <ul>
        //                     <li className='mb-5 text-[20px]'><Link href={'https://net-trixsolutions.com/'} className=' hover:text-[#F8C301]'>Home</Link></li>
        //                     <li className='my-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Industries</Link></li>
        //                     <li className='my-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Services</Link></li>
        //                     </ul>

        //                 </div>
        //                 <div className="w-[50%]">
        //                     <h1 className="text-[24px] pb-5 font-[700]">Support</h1>
        //                     <ul>
        //                     <li className='mb-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Help & Support</Link></li>
        //                     <li className='my-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Innovations</Link></li>
        //                     <li className='my-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Net-Verse</Link></li>
        //                     <li className='my-5 text-[20px]'><Link href={''} className=' hover:text-[#F8C301]'>Reach out to us</Link></li>
        //                     </ul>


        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Footer