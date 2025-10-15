import React from 'react';
import {navLinks} from "../utils/imports.jsx";
import {Images} from "./images.jsx";

export default function Footer() {
    return (
        <section className={`bg-[#0c4d69] text-white`}>
            <div className={`max-w-6xl m-auto items-center justify-center content-center px-4 sm:px-6 lg:px-8`}>
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center my-8 sm:my-10 gap-6 sm:gap-8 lg:gap-10 py-8`}>
                    <div className={`flex flex-col items-center justify-center text-center`}>
                        <img src={`${Images.angular}`} alt="Logo" className="mx-auto mb-2 w-10 h-10 sm:w-12 sm:h-12"/>
                        <h3 className="mx-auto font-semibold text-base sm:text-lg">Random location</h3>
                        <span className="mx-auto text-sm sm:text-base text-gray-300">Our Address</span>
                    </div>
                    <div className={`flex flex-col items-center justify-center text-center`}>
                        <img src={`${Images.angular}`} alt="Logo" className="mx-auto mb-2 w-10 h-10 sm:w-12 sm:h-12"/>
                        <h3 className="mx-auto font-semibold text-base sm:text-lg">Random location</h3>
                        <span className="mx-auto text-sm sm:text-base text-gray-300">Our Address</span>
                    </div>
                    <div className={`flex flex-col items-center justify-center text-center`}>
                        <img src={`${Images.angular}`} alt="Logo" className="mx-auto mb-2 w-10 h-10 sm:w-12 sm:h-12"/>
                        <h3 className="mx-auto font-semibold text-base sm:text-lg">Random location</h3>
                        <span className="mx-auto text-sm sm:text-base text-gray-300">Our Address</span>
                    </div>
                </div>

                <div className={`justify-center text-center content-center items-center m-auto my-8 sm:my-10 gap-4 sm:gap-5 flex flex-col pb-8`}>
                    <div className={`flex flex-row flex-wrap justify-center m-auto gap-4 sm:gap-6 lg:gap-8`}>
                        {
                            navLinks.map((navLink, index) => {
                                return (
                                    <ul key={`${index}`}>
                                        <li className={`hover:cursor-pointer font-[500] text-sm sm:text-base lg:text-lg hover:text-gray-300 transition-colors`}>
                                            {navLink.name}
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-300 px-4 text-center">
                        Copyright © 2025 Central One. All rights reserved
                    </span>

                    <div className={`flex flex-row gap-4 sm:gap-5 m-auto`}>
                        <img src={`${Images.angular}`} alt="Facebook" className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80 cursor-pointer transition-opacity"/>
                        <img src={`${Images.angular}`} alt="Twitter" className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80 cursor-pointer transition-opacity"/>
                        <img src={`${Images.angular}`} alt="LinkedIn" className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80 cursor-pointer transition-opacity"/>
                        <img src={`${Images.angular}`} alt="Instagram" className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80 cursor-pointer transition-opacity"/>
                    </div>
                </div>

            </div>
        </section>

    )
}