import React from 'react';
import {Images} from "../components/images.jsx";
import {engagementModels, navLinks, processes, reasons, technologies} from "../utils/imports.jsx";


export default function Home() {
    return (
        <div className={`m-auto relative bg-[#eef2fb]`}>
            {/*Hero Section*/}
            <section className={`m-auto relative h-[700px]`}>

                    <img src={`${Images.bg_image2}`} className="absolute inset-0 w-full h-full object-cover" alt=""/>

                <div className={`border max-w-6xl h-full content-center p-20`}>
                    <div className={`justify-center relative`}>
                        <h2 className={`text-[#0c4d69] h-10 text-[17px] font-[Outfit] tracking-widest font-[600]`}>A TRUSTED COMPANY</h2>

                        <div className={`mb-3`}>
                            <span className={`text-7xl text-[var(--base)] font-[Outfit] leading-16`}> Next-Gen <span className={`font-semibold`}>Software</span> <br /> Services to <br/> Businesses.</span>
                        </div>

                        <div className={`mb-3`}>
                            <p className={`border-l-4 text-md font-[500] font-[Montserrat] px-3  border-[#0c4d69] w-[550px]`}>We create innovative digital solutions that help business grow, scale <span className={`text-[#669140]`}> and succeed.</span></p>
                        </div>

                        <div className={`mb-3`}>
                            <button className={`bg-[#0c4d69] text-lg font-[500] hover:cursor-pointer font-[Outfit] flex text-white text-[17px] px-4 py-2.5 w-fit rounded-lg`}>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/*Engagement Models Section*/}
            <section className="relative  mx-auto px-4 lg:px-8 py-8 text-center font-[Poppins] mb-16">
                <h2 className="text-3xl lg:text-4xl lg:pt-10 font-bold font-['Poppins'] text-[var(--base)] mb-6 text-center">
                    Our Pillars of Excellence
                </h2>

                <div className="gap-5 m-auto max-w-3/4 justify-center grid lg:grid-cols-3 md:grid-cols-2 text-center">
                    {engagementModels.map((model, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 p-6"
                            style={{ margin: "0 auto" }}
                        >
                            <img
                                src={model.icon}
                                loading="lazy"
                                alt={`${model.title} icon`}
                                width="200"
                                height="200"
                                className="mx-auto mb-4"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-[#2a919f] mb-4 font-[Outfit] transition-colors duration-300 group-hover:text-[#1b4d58]">
                                    {model.title}
                                </h3>
                                <p className="text-slate-600 font-[Outfit] leading-relaxed text-[1.05rem]">
                                    {model.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/*Why Choose Us Section*/}
            <section className={`w-full max-h-[750px] mb-32 bg-[#0c4d69] py-20`}>
                <div className={`m-auto text-center`}>
                    <span className={`capitalize text-[#bcd1dc] font-[Poppins]`}>why choose us</span>
                    <h2 className={`text-5xl mb-15 text-white leading-14 font-[Outfit] font-[700]`}>Design the Concept <br /> of Your Business Flows</h2>
                </div>
                <div className={`m-auto mb-8`}>
                    <div className={`grid max-w-6xl m-auto grid-cols-4 gap-10`}>
                        <div className={`flex border-1 border-[#bcd1dc] py-16 px-5 font-[Outfit]  flex-col`}>
                            <h3 className={`text-white font-[500] text-[25px] mb-1`}> Product Design</h3>
                            <p className={`text-[#bcd1dc] mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-[#bcd1dc]`}> Learn More</a>
                        </div>
                        <div className={`flex border-1 border-[#bcd1dc] py-16 px-5 font-[Outfit]  flex-col`}>
                            <h3 className={`text-white font-[500] text-[25px] mb-1`}> Product Design</h3>
                            <p className={`text-[#bcd1dc] mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-[#bcd1dc]`}> Learn More</a>
                        </div>
                        <div className={`flex border-1 border-[#bcd1dc] py-16 px-5 font-[Outfit]  flex-col`}>
                            <h3 className={`text-white font-[500] text-[25px] mb-1`}> Product Design</h3>
                            <p className={`text-[#bcd1dc] mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-[#bcd1dc]`}> Learn More</a>
                        </div>
                        <div className={`flex border-1 border-[#bcd1dc] py-16 px-5 font-[Outfit]  flex-col`}>
                            <h3 className={`text-white font-[500] text-[25px] mb-1`}> Product Design</h3>
                            <p className={`text-[#bcd1dc] mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-[#bcd1dc]`}> Learn More</a>
                        </div>

                    </div>
                </div>
                <div className={`m-auto`}>
                    <div className={`grid max-w-6xl m-auto grid-cols-2 gap-10`}>
                        <div className={`flex border-1 border-[#bcd1dc] py-8 px-5 font-[Outfit]  flex-col`}  style={{   backgroundImage: `url(${Images.grid_image2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center' }}>

                            <h3 className={`text-white font-[500] text-[35px] mb-1`}> 15+</h3>
                            <span className={`capitalize text-white font-[Poppins]`}>countries worldwide</span>
                            <p className={`text-white mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-white`}> Learn More</a>

                        </div>
                        <div className={`flex border-1 border-[#bcd1dc] py-8 px-5 font-[Outfit]  flex-col`}  style={{   backgroundImage: `url(${Images.grid_image1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center' }}>

                            <h3 className={`text-white font-[500] text-[35px] mb-1`}> 15+</h3>
                            <span className={`capitalize text-white font-[Poppins]`}>countries worldwide</span>
                            <p className={`text-white mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-white`}> Learn More</a>

                        </div>

                    </div>
                </div>
            </section>

            {/*Services Section*/}
            <section className="text-black mt-36 px-6 font-[Outfit] mx-auto max-w-6xl justify-center py-8">
                <span className={`capitalize font-[Poppins]`}>Our Services</span>
                <div className={`flex justify-between h-auto mb-12 items-center`}>
                    <h2 className="font-[Outfit] my-auto text-4xl font-[700] ">We Offer a Wide <br /> Variety of IT Services</h2>
                    <button className={`bg-[#0c4d69] text-lg font-[500] hover:cursor-pointer text-white text-[17px] px-4 py-2.5 w-fit rounded-lg`}>
                       ALL SERVICES
                    </button>
                </div>


                <div className="grid grid-cols-3">
                    {reasons.map((reason, index) => (
                        <div className="reasoning-card" key={index}>
                            <img
                                src={reason.icon}
                                loading="lazy"
                                alt=""
                                className="engagement-icon "
                            />
                            <div style={{paddingLeft: "1rem"}} className={`mb-6`}>
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/*Work Processes*/}
            <section className={`my-16 p-10`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 gap-8">
                        {/* Left column with image */}
                        <div className="relative">
                            <img
                                src={`${Images.portrait_programmer}`}
                                alt="Professional Developer"
                                className="w-full h-[800px] object-cover rounded-lg shadow-lg"
                            />

                        </div>

                        {/* Right column with processes */}
                        <div className="pl-8">
                            <span className="capitalize text-[#bcd1dc] font-[Poppins]">our process</span>
                            <h2 className="text-4xl font-[700] text-[#0c4d69] font-[Outfit] mb-8">
                                How We Approach<br />Development Projects
                            </h2>

                            <div className="mb-3 rounded-lg max-w-[80%]">
                                <h3 className="text-[#0c4d69] text-xl font-semibold font-[Outfit] mb-2">
                                    Expert Development Team
                                </h3>
                                <p className="text-slate-700 font-[Outfit]">
                                    Our experienced developers follow industry best practices to deliver high-quality solutions
                                </p>
                            </div>

                            <div className="space-y-6">
                                {processes.map((process, index) => (
                                    <div key={`${index}`} className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-lg transition-all duration-300 hover:shadow-md">
                                        <img src={process.Image} alt="Planning" className="w-12 h-12" />
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#2a919f] mb-2 font-[Outfit]">
                                                {process.title}
                                            </h3>
                                            <p className="text-slate-600 font-[Outfit]">
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
            <section className="w-full flex justify-center relative">
                <div className={`bg-[#f8f8f8] w-full h-[125px] bottom-0 absolute`}></div>
                <div className={`h-[280px] z-10 overflow-y-hidden`}>
                    <img
                        src={`${Images.bg_image1}`}
                        loading="lazy"
                        alt=""
                    />
                </div>
                <div className="absolute p-8 text-white my-auto content-center z-20 w-[1000px] h-[280px] bg-[rgba(12,77,105,0.73)] max-w-7xl">
                    <span className={`capitalize text-sm font-[Poppins]`}>We Carry more Than Just Good Coding Skills</span>
                    <div className={`flex justify-between font-[Outfit] h-auto items-center`}>
                        <h2 className=" my-auto text-4xl font-[700] ">let's build your website together!</h2>
                        <button className={`border text-lg font-[500] hover:cursor-pointer text-white text-[17px] px-4 py-2.5 w-fit rounded-lg`}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/*Technologies Section & Contact Form*/}
            <section className="font-[Outfit] pb-20 bg-[#f8f8f8] ">

                {/*Technologies Section*/}
                <div className={` pt-28 `}>
                    <div className={`m-auto justify-center text-center max-w-6xl h-[125px]`}>
                        <span className={`text-5xl font-[600] font-[Sora]`}>
                        Crafting Solutions with Cutting-Edge <br/> Development & Design Tools
                        </span>
                    </div>

                    <div className={`grid grid-cols-3 gap-10 max-w-7xl m-auto py-10`}>
                        {technologies.map((technology, index) => (
                            <div key={`${index}`}>
                                <h2 className={`text-[25px] font-[600] my-4 font-[Sora]`}>{technology.section}</h2>
                                <div className={`flex gap-3 flex-wrap max-w-[400px] w-auto flex-row text-nowrap`}>
                                    {technology.tech.map((tech, index) => (
                                        <div className={`bg-gray-200 px-6 rounded-2xl flex py-1 gap-4 flex-row flex-nowrap items-center`} key={`${index}`}>
                                            <img src={`${tech.icon}`} className={`w-8`} alt=""/>
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*Contact Form Section*/}
                <div
                    className="flex flex-col lg:flex-row w-[90%] lg:w-[70%] mx-auto bg-[#eef2fb] shadow-md mt-20 rounded-lg overflow-hidden">

                    <form id="contact-form" className="w-full lg:w-3/5 p-6 lg:p-10 space-y-5 font-[Montserrat] text-[13px]">
                        <div>
                            {/*{showSuccessMessage && (*/}
                            {/*    <span className="block font-[Outfit] mb-4 text-green-600 font-semibold">*/}
                            {/*    Your inquiry has been submitted successfully!*/}
                            {/*</span>*/}
                            {/*)}*/}
                            <h1 className="text-3xl lg:text-4xl font-bold font-[Outfit] text-gray-800 mb-8 lg:mb-12">
                                Do you have a specific inquiry?<br/>
                                <span style={{color: "#669140"}}>Reach out!</span>
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                                <input type="text" name="name" placeholder="Name" className="input rounded-md font-[Montserrat] text-[13px] p-4 border border-gray-300 bg-[#f8f8f8]"/>
                                <input type="email" name="email" placeholder="Email" className="input rounded-md font-[Montserrat] text-[13px] p-4 border border-gray-300 bg-[#f8f8f8]"/>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                                <input type="text" name="company" placeholder="Company" className="input rounded-md font-[Montserrat] text-[13px] p-4 border border-gray-300 bg-[#f8f8f8]"/>
                                <input type="tel" name="phoneNumber" placeholder="Phone" className="input rounded-md font-[Montserrat] text-[13px] p-4 border border-gray-300 bg-[#f8f8f8]"/>
                            </div>

                            <textarea
                                name="message"
                                placeholder="Describe your need"
                                rows={4}
                                className="w-full px-3 mb-5 border border-gray-300 rounded focus:outline-none font-[Montserrat] text-[13px] p-4 bg-[#f8f8f8]"
                            />

                            <div className="flex items-start text-sm mb-4">
                                <label htmlFor="privacy-policy" className="">
                                    By submitting this form I agree to the{" "}
                                    <a target="_blank"  rel="noopener noreferrer" href="https://app.websitepolicies.com/policies/view/tbo4hkh3" className="text-blue-500 hover:underline">
                                        Privacy Policy{" "}
                                    </a>
                                    and{" "}
                                    <a target="_blank"  rel="noopener noreferrer" href="https://www.termsfeed.com/live/3ad77bcf-a04e-40c1-9978-4e44bf3e14ee" className="text-blue-500 hover:underline">
                                        Terms of Service
                                    </a>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#3a3d59] cursor-pointer text-white rounded font-[Montserrat]"
                            >
                                Send Inquiry
                            </button>
                        </div>

                    </form>
                    <div
                        className="w-full lg:w-2/5 bg-[#0c4d69] text-white flex items-center
                     justify-center p-8 lg:p-10 lg:rounded-r-lg font-[Outfit]">
                        <div className="text-center w-full max-w-md space-y-8">
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                                    Turning big ideas into real solutions.
                                </h2>
                                <p className="text-gray-300">
                                    We’re a passionate startup focused on delivering high-impact digital
                                    products that matter. Let’s build something great together.
                                </p>
                            </div>

                            <div className="flex items-start justify-center space-x-3">
                                {/*<MapPin size={24} className="text-blue-400 mt-1"/>*/}
                                <div className="text-left">
                                    <p className="font-semibold text-white">Central One</p>
                                    <p className="text-sm text-gray-400 leading-snug">
                                        Abuja, Nigeria
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center mr-2">
                                    <span className="text-xs font-bold">@</span>
                                </div>
                                <a
                                    href="mailto:info@centralone.com"
                                    className="text-blue-500 hover:underline"
                                >
                                    info@centralone.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

// !max-w-none w-[800px]