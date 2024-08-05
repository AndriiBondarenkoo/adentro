"use client";
import { log } from 'console';
import Image from "next/image";
import Link from 'next/link';
import { useRef, useState, useEffect } from "react";

interface props {
  onNavOpen: () => void,
  showNav: boolean
}

export default function Header({ onNavOpen, showNav }: props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    if (header) {
      const addScrollClass = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      addScrollClass();
      window.addEventListener('scroll', addScrollClass);

      return () => {
        window.removeEventListener('scroll', addScrollClass);
      };
    }
  }, []);

  return (
    <header id='header' ref={headerRef} className={`sticky top-0 inset-x-0 z-50 transition-all ease-in-out py-[20px] md:py-[35px] xl:py-[48px] ${isScrolled ? 'bg-white !py-[24px] shadow-md' : ''}`}>
      <div className="container">
        <div className="header-wrap relative flex items-center justify-between md:justify-center place-content-center">
          <a href="/" className='block md:hidden'>
            <Image src="/logo.svg" alt="Adentro" width={142} height={25} />
          </a>

          <nav className={`${showNav ? '!left-0' : ''}`}>
            <div className='nav-logo block md:hidden mb-[35px]'>
              <Image src="/logo.svg" alt="adentro" width={142} height={25} />
            </div>
            <ul className='menu flex flex-wrap flex-col md:flex-row gap-y-[13px] gap-x-[42px] text-[18px] md:text-sm'>
              <li><Link href="">Approach</Link></li>
              <li><Link href="">Services</Link></li>
              <li className='hidden md:block'>
                <Link href="/"><Image src="/logo.svg" alt="adentro" width={142} height={25} /></Link>
              </li>
              <li><Link href="">Culture</Link></li>
              <li><Link href="">Contact</Link></li>
            </ul>
          </nav>

          <div className='menu-btn flex items-center justify-center w-[50px] h-[50px] z-1 md:hidden mr-[-13px]' onClick={onNavOpen}>
            <svg className='ham hamRotate' viewBox='0 0 100 100'>
              <path className='line top' d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'></path>
              <path className='line middle' d='m 30,50 h 40'></path>
              <path className='line bottom' d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};
