
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Add efect in scroll
const useScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };    

        // Add
        window.addEventListener('scroll', handleScroll);

        // Remove scroll not in use
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isScrolled;
};

const Logo = () => {    
    return (
        <Image 
            src='/logo.svg'
            alt='logo'
            width={90}
            height={90}
            className='cursor-pointer'
        />    
    );
};

const NavLinks = () => {
    return (
        <nav>
            <ul className='hidden md:flex md:space-x-4'>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Moveis</li>
                <li>Latest</li>            
            </ul>
        </nav>
    );
}

const UserProfile = () => {
    return (
        <div className='flex items-center space-x-4'>
            <p className='hidden cursor-not-allowed lg:inline'>Kids</p>            
            <Image 
                src='/profile.png'
                alt='profile'
                width={40}
                height={40}
                className='cursor-pointer rounded'
            /> 
        </div>
    );
}

export default function Header() {
    
    const isScrolled = useScroll();

    return (
        <header 
            className={`
            ${isScrolled && 'bg-black'} 
            fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6`}
            >        
            <div className='flex items-center space-x-2 md:space-x-4'>
                <Logo />
                <NavLinks />
            </div>
            <UserProfile />
        </header>
    );
}