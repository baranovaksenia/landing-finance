import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import data
import { header } from '../data';
// import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);

  // destructuring header data
  const { logo, btnText } = header;
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[30px]'
      } py-6 lg:py-4 fixed w-full transition-all z-10`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        {/* !! add next image logo */}
        <Link href='/'>
          <a className='text-2xl font-bold'>Keter Finance</a>
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <div className='hidden lg:flex'>
          <Nav />
        </div>
        {/* cta button - initially hidden - show on desktop mode */}
        <button className='btn btn-sm btn-accent hidden lg:flex'>
          {btnText}
        </button>
        {/* mobile nav trigger btn - hidden on desktop*/}
        <button
          className='lg:hidden'
          onClick={() => setMobileNav(!mobileNav)}
        >
          {mobileNav ? (
            <HiOutlineX className='text-3xl text-accent' />
          ) : (
            <HiMenuAlt4 className='text-3xl text-accent' />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${mobileNav ? 'left-0' : '-left-full'}
        fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all
        `}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
