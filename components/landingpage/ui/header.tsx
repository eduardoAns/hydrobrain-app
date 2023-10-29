'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '../utils/dropdown'
import MobileMenu from './mobile-menu'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className='p-4'>
                <Link href="/signup" >
                <LinkedInIcon fontSize='medium'/>
                </Link> 
              </li>
              <li className='p-4'>
                <Link href="/signup" >
                  <InstagramIcon fontSize='medium'/>
                </Link> 
              </li>
              <li className='p-4'>
                <Link href="/signup" >
                  <WhatsAppIcon fontSize='medium'/>
                </Link> 
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
