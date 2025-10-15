import React, { useState } from 'react';
import { navLinks } from "../utils/imports.jsx";
import { Images } from "./images.jsx";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Prevent body scroll when menu is open
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <div className="flex items-center shadow justify-center z-50 sticky top-0 bg-white">
            <header className="relative w-full">
                <div className="bg-white z-20 font-[Outfit] py-4 px-4 lg:py-5 lg:px-5 content-center items-center justify-between flex flex-row w-full">
                    <NavLink to={`/`}>
                        <div className="hover:cursor-pointer w-32 sm:w-36 lg:w-3/4">
                            <img src={`${Images.logo_1}`} alt="Logo"/>
                        </div>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex w-1/2 justify-center items-center gap-8">
                        <div className="flex flex-row gap-8 xl:gap-16">
                            {navLinks.map((navLink, index) => (
                                <ul key={`${index}`}>
                                    <NavLink to={`${navLink.link}`}>
                                        <li className={`hover:cursor-pointer font-[500] transition-colors hover:text-[#0c4d69]`}>
                                            {navLink.name}
                                        </li>
                                    </NavLink>
                                </ul>
                            ))}
                        </div>

                        <button className={`bg-[#0c4d69] text-base lg:text-lg font-[500] hover:cursor-pointer text-white px-4 py-1.5 rounded-lg transition-all hover:bg-[#0a3d54]`}>
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden z-50 p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
                     onClick={toggleMobileMenu}
                ></div>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white z-40 shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col p-8 pt-20 space-y-6">
                        {navLinks.map((navLink, index) => (
                            <NavLink
                                key={`${index}`}
                                to={`${navLink.link}`}
                                onClick={toggleMobileMenu}
                                className={`text-lg font-[500] hover:text-[#0c4d69] transition-colors`}
                            >
                                {navLink.name}
                            </NavLink>
                        ))}
                        <button className={`bg-[#0c4d69] text-base font-[500] text-white px-4 py-2.5 rounded-lg mt-4 transition-all hover:bg-[#0a3d54]`}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}