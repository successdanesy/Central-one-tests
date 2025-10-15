import React from 'react';
import {Images} from "../components/images.jsx";
import {engagementModels, processes, reasons, technologies} from "../utils/imports.jsx";

export default function Home() {
    return (
        <div className={`m-auto relative bg-[#eef2fb]`}>
            {/*Hero Section*/}
            <section className={`m-auto relative min-h-[500px] sm:min-h-[600px] lg:h-[700px]`}>
                <img src={`${Images.bg_image2}`} className="absolute inset-0 w-full h-full object-cover" alt=""/>

                <div className={`max-w-6xl h-full content-center px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 lg:py-20`}>
                    <div className={`justify-center relative`}>
                        <h2 className={`text-[#0c4d69] text-sm sm:text-base lg:text-[17px] font-[Outfit] tracking-widest font-[600] mb-3 sm:mb-4`}>
                            A TRUSTED COMPANY
                        </h2>

                        <div className={`mb-4 sm:mb-6`}>
                            <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--base)] font-[Outfit] leading-tight block`}>
                                Next-Gen <span className={`font-semibold`}>Software</span>
                                <br className="hidden sm:block" /> Services to
                                <br /> Businesses.
                            </span>
                        </div>

                        <div className={`mb-4 sm:mb-6`}>
                            <p className={`border-l-4 text-sm sm:text-base lg:text-md font-[500] font-[Montserrat] px-3 border-[#0c4d69] max-w-full sm:max-w-[500px] lg:w-[550px]`}>
                                We create innovative digital solutions that help business grow, scale <span className={`text-[#669140]`}>and succeed.</span>
                            </p>
                        </div>

                        <div className={`mb-3`}>
                            <button className={`bg-[#0c4d69] text-base sm:text-lg font-[500] hover:cursor-pointer font-[Outfit] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all hover:bg-[#0a3d54]`}>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/*Engagement Models Section*/}
            <section className="relative mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center font-[Poppins]">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:pt-10 font-bold text-[var(--base)] mb-6 sm:mb-8 lg:mb-12 text-center px-4">
                    Our Pillars of Excellence
                </h2>

                <div className="gap-4 sm:gap-6 lg:gap-8 m-auto max-w-7xl justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {engagementModels.map((model, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 p-6 sm:p-8"
                        >
                            <img
                                src={model.icon}
                                loading="lazy"
                                alt={`${model.title} icon`}
                                className="mx-auto mb-4 w-32 sm:w-40 lg:w-48"
                            />
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#2a919f] mb-3 sm:mb-4 font-[Outfit] transition-colors duration-300 group-hover:text-[#1b4d58]">
                                    {model.title}
                                </h3>
                                <p className="text-slate-600 font-[Outfit] leading-relaxed text-sm sm:text-base lg:text-[1.05rem]">
                                    {model.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/*Why Choose Us Section*/}
            <section className={`w-full bg-[#0c4d69] py-12 sm:py-16 lg:py-20 mb-16 sm:mb-24 lg:mb-32`}>
                <div className={`m-auto text-center px-4 mb-8 sm:mb-12`}>
                    <span className={`capitalize text-[#bcd1dc] font-[Poppins] text-sm sm:text-base`}>why choose us</span>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-[Outfit] font-[700] mt-2`}>
                        Design the Concept <br /> of Your Business Flows
                    </h2>
                </div>

                <div className={`m-auto mb-6 sm:mb-8 lg:mb-12 px-4`}>
                    <div className={`grid max-w-6xl m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8`}>
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className={`flex border border-[#bcd1dc] py-8 sm:py-12 lg:py-16 px-4 sm:px-5 font-[Outfit] flex-col`}>
                                <h3 className={`text-white font-[500] text-xl sm:text-2xl lg:text-[25px] mb-2`}>Product Design</h3>
                                <p className={`text-[#bcd1dc] mb-4 sm:mb-6 leading-6 sm:leading-7 text-sm sm:text-base`}>
                                    Our product design service let's you prototype, test and validate your ideas
                                </p>
                                <a className={`text-[#bcd1dc] hover:underline cursor-pointer text-sm sm:text-base`}>Learn More</a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`m-auto px-4`}>
                    <div className={`grid max-w-6xl m-auto grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8`}>
                        {[Images.grid_image2, Images.grid_image1].map((img, idx) => (
                            <div
                                key={idx}
                                className={`flex border border-[#bcd1dc] py-6 sm:py-8 px-4 sm:px-5 font-[Outfit] flex-col min-h-[250px] sm:min-h-[300px]`}
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <h3 className={`text-white font-[500] text-2xl sm:text-3xl lg:text-[35px] mb-1`}>15+</h3>
                                <span className={`capitalize text-white font-[Poppins] text-sm sm:text-base`}>countries worldwide</span>
                                <p className={`text-white mb-4 sm:mb-6 leading-6 sm:leading-7 text-sm sm:text-base`}>
                                    Our product design service let's you prototype, test and validate your ideas
                                </p>
                                <a className={`text-white hover:underline cursor-pointer text-sm sm:text-base`}>Learn More</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*Services Section*/}
            <section className="text-black mt-12 sm:mt-24 lg:mt-36 px-4 sm:px-6 font-[Outfit] mx-auto max-w-6xl justify-center py-8">
                <span className={`capitalize font-[Poppins] text-sm sm:text-base`}>Our Services</span>
                <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12`}>
                    <h2 className="font-[Outfit] text-2xl sm:text-3xl lg:text-4xl font-[700]">
                        We Offer a Wide <br /> Variety of IT Services
                    </h2>
                    <button className={`bg-[#0c4d69] text-base sm:text-lg font-[500] hover:cursor-pointer text-white px-4 sm:px-6 py-2.5 rounded-lg transition-all hover:bg-[#0a3d54] whitespace-nowrap`}>
                        ALL SERVICES
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {reasons.map((reason, index) => (
                        <div className="reasoning-card" key={index}>
                            <img
                                src={reason.icon}
                                loading="lazy"
                                alt=""
                                className="engagement-icon"
                            />
                            <div style={{paddingLeft: "1rem"}} className={`mb-6`}>
                                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">{reason.title}</h3>
                                <p className="text-sm sm:text-base">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/*Work Processes*/}
            <section className={`my-12 sm:my-16 lg:my-24 p-4 sm:p-6 lg:p-10`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Image column */}
                        <div className="relative order-2 lg:order-1">
                            <img
                                src={`${Images.portrait_programmer}`}
                                alt="Professional Developer"
                                className="w-full h-[400px] sm:h-[500px] lg:h-[800px] object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Content column */}
                        <div className="order-1 lg:order-2 lg:pl-8">
                            <span className="capitalize text-[#0c4d69] font-[Poppins] text-sm sm:text-base">our process</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[700] text-[#0c4d69] font-[Outfit] mb-6 sm:mb-8 mt-2">
                                How We Approach<br />Development Projects
                            </h2>

                            <div className="mb-4 sm:mb-6 rounded-lg">
                                <h3 className="text-[#0c4d69] text-lg sm:text-xl font-semibold font-[Outfit] mb-2">
                                    Expert Development Team
                                </h3>
                                <p className="text-slate-700 font-[Outfit] text-sm sm:text-base">
                                    Our experienced developers follow industry best practices to deliver high-quality solutions
                                </p>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                {processes.map((process, index) => (
                                    <div key={`${index}`} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/70 backdrop-blur-sm rounded-lg transition-all duration-300 hover:shadow-md">
                                        <img src={process.Image} alt="Process step" className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-[#2a919f] mb-2 font-[Outfit]">
                                                {process.title}
                                            </h3>
                                            <p className="text-slate-600 font-[Outfit] text-sm sm:text-base">
                                                {process.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Call to Action Section*/}
            <section className="w-full flex justify-center relative mb-8 sm:mb-0">
                <div className={`bg-[#f8f8f8] w-full h-[100px] sm:h-[125px] bottom-0 absolute`}></div>
                <div className={`h-[200px] sm:h-[250px] lg:h-[280px] z-10 overflow-hidden w-full`}>
                    <img
                        src={`${Images.bg_image1}`}
                        loading="lazy"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute p-4 sm:p-6 lg:p-8 text-white my-auto content-center z-20 w-[95%] sm:w-[90%] lg:w-[1000px] h-[200px] sm:h-[250px] lg:h-[280px] bg-[rgba(12,77,105,0.73)] max-w-7xl">
                    <span className={`capitalize text-xs sm:text-sm font-[Poppins] block mb-2 sm:mb-3`}>We Carry more Than Just Good Coding Skills</span>
                    <div className={`flex flex-col sm:flex-row justify-between font-[Outfit] items-start sm:items-center gap-4`}>
                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-[700]">
                            let's build your website together!
                        </h2>
                        <button className={`border text-base sm:text-lg font-[500] hover:cursor-pointer text-white px-4 sm:px-6 py-2.5 rounded-lg transition-all hover:bg-white/10 whitespace-nowrap`}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/*Technologies Section & Contact Form*/}
            <section className="font-[Outfit] pb-12 sm:pb-16 lg:pb-20 bg-[#f8f8f8]">
                {/*Technologies Section*/}
                <div className={`pt-12 sm:pt-20 lg:pt-28 px-4`}>
                    <div className={`m-auto justify-center text-center max-w-6xl mb-8 sm:mb-12`}>
                        <span className={`text-2xl sm:text-3xl lg:text-5xl font-[600] font-[Sora] leading-tight block px-4`}>
                            Crafting Solutions with Cutting-Edge <br className="hidden sm:block" /> Development & Design Tools
                        </span>
                    </div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl m-auto py-6 sm:py-8 lg:py-10`}>
                        {technologies.map((technology, index) => (
                            <div key={`${index}`}>
                                <h2 className={`text-xl sm:text-2xl lg:text-[25px] font-[600] my-3 sm:my-4 font-[Sora]`}>{technology.section}</h2>
                                <div className={`flex gap-2 sm:gap-3 flex-wrap flex-row`}>
                                    {technology.tech.map((tech, idx) => (
                                        <div className={`bg-gray-200 px-3 sm:px-4 lg:px-6 rounded-2xl flex py-1 gap-2 sm:gap-3 lg:gap-4 flex-row items-center text-sm sm:text-base`} key={`${idx}`}>
                                            <img src={`${tech.icon}`} className={`w-6 sm:w-8`} alt={tech.name}/>
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*Contact Form Section*/}
                <div className="flex flex-col lg:flex-row w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto bg-[#eef2fb] shadow-md mt-12 sm:mt-16 lg:mt-20 rounded-lg overflow-hidden">
                    <form id="contact-form" className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 font-[Montserrat] text-[13px]">
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[Outfit] text-gray-800 mb-6 sm:mb-8 lg:mb-12">
                                Do you have a specific inquiry?<br />
                                <span style={{color: "#669140"}}>Reach out!</span>
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 my-4 sm:my-5">
                                <input type="text" name="name" placeholder="Name" className="input rounded-md font-[Montserrat] text-[13px] p-3 sm:p-4 border border-gray-300 bg-[#f8f8f8]"/>
                                <input type="email" name="email" placeholder="Email" className="input rounded-md font-[Montserrat] text-[13px] p-3 sm:p-4 border border-gray-300 bg-[#f8f8f8]"/>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 my-4 sm:my-5">
                                <input type="text" name="company" placeholder="Company" className="input rounded-md font-[Montserrat] text-[13px] p-3 sm:p-4 border border-gray-300 bg-[#f8f8f8]"/>
                                <input type="tel" name="phoneNumber" placeholder="Phone" className="input rounded-md font-[Montserrat] text-[13px] p-3 sm:p-4 border border-gray-300 bg-[#f8f8f8]"/>
                            </div>

                            <textarea
                                name="message"
                                placeholder="Describe your need"
                                rows={4}
                                className="w-full px-3 mb-4 sm:mb-5 border border-gray-300 rounded focus:outline-none font-[Montserrat] text-[13px] p-3 sm:p-4 bg-[#f8f8f8]"
                            />

                            <div className="flex items-start text-xs sm:text-sm mb-4">
                                <label htmlFor="privacy-policy">
                                    By submitting this form I agree to the{" "}
                                    <a target="_blank" rel="noopener noreferrer" href="https://app.websitepolicies.com/policies/view/tbo4hkh3" className="text-blue-500 hover:underline">
                                        Privacy Policy
                                    </a>
                                    {" "}and{" "}
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.termsfeed.com/live/3ad77bcf-a04e-40c1-9978-4e44bf3e14ee" className="text-blue-500 hover:underline">
                                        Terms of Service
                                    </a>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[#3a3d59] cursor-pointer text-white rounded font-[Montserrat] hover:bg-[#2a2d49] transition-all text-sm sm:text-base"
                            >
                                Send Inquiry
                            </button>
                        </div>
                    </form>

                    <div className="w-full lg:w-2/5 bg-[#0c4d69] text-white flex items-center justify-center p-6 sm:p-8 lg:p-10 font-[Outfit]">
                        <div className="text-center w-full max-w-md space-y-6 sm:space-y-8">
                            <div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                                    Turning big ideas into real solutions.
                                </h2>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    We're a passionate startup focused on delivering high-impact digital products that matter. Let's build something great together.
                                </p>
                            </div>

                            <div className="flex items-start justify-center space-x-3">
                                <div className="text-left">
                                    <p className="font-semibold text-white text-sm sm:text-base">Central One</p>
                                    <p className="text-xs sm:text-sm text-gray-400 leading-snug">
                                        Abuja, Nigeria
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded flex items-center justify-center mr-2">
                                    <span className="text-xs font-bold">@</span>
                                </div>
                                <a
                                    href="mailto:info@centralone.com"
                                    className="text-blue-400 hover:underline text-sm sm:text-base break-all"
                                >
                                    info@centralone.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}