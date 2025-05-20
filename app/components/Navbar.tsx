'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/public/logo.png"
import React, { useState } from 'react'
import { BiMenuAltRight, BiCollapse } from "react-icons/bi";
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/', },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
]


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();


  return (
    <nav className="bg-[#1A1A1A] border-[0.5px] border-[#262626] text-white px-4 py-3">
      <div className="flex justify-between items-center  max-w-7xl mx-auto">
        <div className="text-lg font-bold">
          <Image src={Logo} alt='company logo' />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 text-4xl rounded bg-[#262626] lg:hidden focus:outline-none"
        >
          <BiMenuAltRight />

        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {
            navLinks.map(link => {
              const isActive = pathName === link.href
              return (
                <li key={link.name}><Link className={`px-4 py-2 rounded ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'
                  }`} href={link.href}>{link.name}</Link></li>
              )
            })
          }
        </ul>
        <div className='hidden lg:block'>
          <Link href="/contact-us" className='bg-blue-600 px-4 py-2 rounded-md'>Contact</Link>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:hidden top-0 left-0 h-full w-64 bg-[#1A1A1A] text-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:static lg:flex lg:flex-col`}
      >
        {/* close button for mobile */}
        <div className="flex items-center justify-between px-4 py-3 lg:hidden">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <BiCollapse />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2 px-4 py-4">
          {
            navLinks.map((link, index) => (<Link key={index} href={link.href}>{link.name}</Link>))
          }
        </nav>
      </aside>
    </nav>
  )
}

export default Navbar