// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Using an icon for the button

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down by 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <button 
                onClick={scrollToTop} 
                className="scroll-to-top"
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </button>
        )
    );
}

export default ScrollToTopButton;
