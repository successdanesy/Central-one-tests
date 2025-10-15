import React from 'react';
import {navLinks} from "../utils/imports.jsx";
import {Images} from "./images.jsx";
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div className="flex items-center shadow justify-center z-10 sticky top-0">
            <header className="relative w-full">
                <div className="bg-white z-20 font-[Outfit] py-5 px-5 content-center items-center justify-between flex flex-row w-full h-17 ">
                    <NavLink to={`/`}>
                        <div className="hover:cursor-pointer w-1/4">
                            <img src={`${Images.logo_1}`} alt="Logo"/>
                        </div>
                    </NavLink>


                    <div className="w-1/2 flex justify-center">
                        <div className="flex flex-row m-auto gap-16">
                            {
                                navLinks.map((navLink, index) => {
                                    return (
                                        <ul key={`${index}`}>
                                            <NavLink to={`${navLink.link}`}>
                                                <li className={`hover:cursor-pointer font-[500]`}>
                                                    {navLink.name}
                                                </li>
                                            </NavLink>
                                        </ul> )
                                })
                            }
                        </div>

                        <button className={`bg-[#0c4d69] text-lg font-[500] hover:cursor-pointer text-white text-[17px] px-4 py-2.5 w-fit rounded-lg`}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}