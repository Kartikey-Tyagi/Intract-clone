import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {
  return (
    <>
      <header className='navContainer z-50'>
        <div className="navSectionContainer">
          <div className="navContent items-center">
            <img src='https://www.intract.io/logo/intract_text.svg' width={70} />
            <div className="desktopNavContent items-center hidden sm:flex">
              <span className='mr-4'>Compass</span>
              <span className='mr-4'>Explore</span>
              <span className='mr-4 border-b-2 py-4'>Academy <span className='bg-violet-600 rounded-full px-2 py-1'>New</span></span>
              <span className='mr-4'>NFTs</span>
              <span>For Projects</span>
            </div>
            <div className='flex items-center'>
              <div className="searchBar mr-2 relative hidden md:block">
                <IoIosSearch className='absolute left-2 top-1/2 -translate-y-1/2' />
                <input placeholder='Search for ecosystems, trending quests etc...' className='bg-gray-900 pl-8 pr-4 py-2 text-sm rounded-full' type="search" />
              </div>
              <div className='searchIconMobile mr-2 md:hidden'>
                <IoIosSearch />
              </div>
              <div className='flex items-center mr-2'>
                <div className='rounded-full newsFeedIcon mr-2'>
                  <img src='https://www.intract.io/assets/broadcast_or-04af786c.svg' width={15} height={15} />
                </div>
                <button className='signInBtn flex items-center'>Sign In</button>
              </div>
              <div className="mobileMenuIcon">
                <CiMenuBurger />
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Navbar