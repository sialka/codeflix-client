'use client';
import { useEffect, useState } from 'react';

// Add efect in scroll
export const useScroll = () => {
    
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