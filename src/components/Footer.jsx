import React from 'react';
import { navLinks } from "../utils/imports.jsx";
import { Images } from "./images.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#0c4d69] text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <img src={Images.logo_1} alt="Central One Technologies" className="w-40 mb-4 brightness-0 invert"/>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Building innovative digital solutions that help businesses grow, scale, and succeed in the modern world.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                                <i className="fab fa-x-twitter"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 font-[Outfit]">Quick Links</h3>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.link}
                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 font-[Outfit]">Get In Touch</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-gray-400 mt-1">📍</span>
                                <span className="text-gray-300">
                                    Abuja, Nigeria
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gray-400">📧</span>
                                <a href="mailto:info@centralone.com" className="text-gray-300 hover:text-white transition-colors">
                                    info@centralone.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gray-400">📞</span>
                                <a href="tel:+234" className="text-gray-300 hover:text-white transition-colors">
                                    +234 XXX XXX XXXX
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © 2025 Central One Technologies. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}