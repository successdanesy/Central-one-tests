import React from 'react';
import {navLinks} from "../utils/imports.jsx";
import {Images} from "./images.jsx";

export default function Footer() {
    return (
        <section className={`bg-[#0c4d69] text-white`}>
            <div className={` max-w-6xl m-auto items-center justify-center content-center`}>
                {/*<div className={``}>*/}
                {/*    <img src={`${Images.logo_1}`} className={`bg-transparent m-auto w-1/4`} alt="Logo"/>*/}
                {/*</div>*/}
                <div className={`grid grid-cols-3 place-items-center my-10 gap-10`}>
                    <div className={`flex flex-col items-center justify-center mx-auto text-center`}>
                        <img src={`${Images.angular}`} alt="Logo" className="mx-auto mb-2"/>
                        <h3 className="mx-auto">Random location</h3>
                        <span className="mx-auto">Our Address</span>
                    </div>
                    <div className={`flex flex-col items-center justify-center mx-auto text-center`}>
                        <img src={`${Images.angular}`} alt="Logo" className="mx-auto mb-2"/>
                        <h3 className="mx-auto">Random location</h3>
                        <span className="mx-auto">Our Address</span>
                    </div>
                    <div className={`flex flex-col items-center justify-center mx-auto text-center`}>
                        <img src={`${Images.angular}`} alt="Logo" className="mx-auto mb-2"/>
                        <h3 className="mx-auto">Random location</h3>
                        <span className="mx-auto">Our Address</span>
                    </div>
                </div>
                <div className={` justify-center text-center content-center items-center m-auto my-10 gap-5 flex flex-col`}>
                    <div className={`flex flex-row m-auto gap-5 `}>
                        {
                            navLinks.map((navLink, index) => {
                                return ( <ul key={`${index}`}> <li className={`hover:cursor-pointer font-[500] text-lg  `}> {navLink.name}</li> </ul> )
                            })
                        }
                    </div>
                    <span> Copyright © 2025 Central One. All rights reserved</span>

                    <div className={`flex flex-row gap-5 m-auto`}>
                        <img src={`${Images.angular}`} alt="Facebook" className="w-8 h-8"/>
                        <img src={`${Images.angular}`} alt="Facebook" className="w-8 h-8"/>
                        <img src={`${Images.angular}`} alt="Facebook" className="w-8 h-8"/>
                        <img src={`${Images.angular}`} alt="Facebook" className="w-8 h-8"/>

                    </div>
                </div>

            </div>
        </section>

    )
}