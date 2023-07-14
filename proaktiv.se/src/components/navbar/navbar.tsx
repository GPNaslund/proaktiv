'use client'

import Image from "next/legacy/image"
import { useEffect, useState } from 'react'
import NavBarLinks from './navbar_links';
import './hamburgermenu.css'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY === 0;
            setShowNavbar(isTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    const mobileMenu:string = "lg:hidden fixed top-0 left-0 w-full h-2/5 bg-white flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out z-20";

    return (
        <nav className={`fixed top-0 left-0 right-0 grid grid-cols-4 w-full z-20 p-5 ${showNavbar ? '' : 'fade-out'}`}>
            <div className="col-span-1 flex items-center justify-start z-30">
                <Image
                    src="/Mini-bones-white.svg"
                    alt="Proaktiv logo"
                    className=""
                    width={40}
                    height={40}
                />
            </div>

            {/* Menu for mobile screens */}
            <NavBarLinks ulStyling={`${mobileMenu} ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} handleMenuClick={handleMenuClick} />


            <div className="col-start-4 col-span-1 flex justify-end items-center">
                {/* Hamburger menu icon for smaller screns */}
                <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleMenuClick}>
                    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
}


