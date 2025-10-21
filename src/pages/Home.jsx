import React from 'react';
import {Images} from "../components/images.jsx";
import {engagementModels, processes, reasons, technologies} from "../utils/imports.jsx";

export default function Home() {
    return (
        <div className={`m-auto relative bg-[#eef2fb]`}>
            {/*Hero Section*/}
            <section className={`m-auto relative min-h-[600px] lg:min-h-[750px] overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#0c4d69] to-[#0a3d54]"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>

                <div className={`max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10`}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
                        {/* Left Content */}
                        <div className={`space-y-6 lg:pr-8`}>
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-[#90EE90] rounded-full animate-pulse"></div>
                                <span className={`text-[white] text-xs sm:text-sm font-[Outfit] tracking-wide font-[600]`}>
                                    TRUSTED BY FORWARD-THINKING COMPANIES
                                </span>
                            </div>

                            <div>
                                <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-[Outfit] font-bold leading-tight mb-4`}>
                                    Transform Your<br />
                                    Digital <span className="bg-gradient-to-r from-[#90EE90] to-[#60d060] bg-clip-text text-transparent">
                                         Vision
                                    </span><br />
                                    Into <span className="bg-gradient-to-r from-[#90EE90] to-[#60d060] bg-clip-text text-transparent">
                                         Reality
                                    </span>
                                </h1>
                            </div>

                            <p className={`text-base sm:text-lg lg:text-xl text-white/90 font-[Outfit] max-w-xl leading-relaxed`}>
                                We partner with ambitious businesses to design, develop, and deploy innovative software solutions that drive <span className={`text-[#90EE90] font-semibold`}>measurable growth</span> and competitive advantage.
                            </p>

                            <div className={`flex flex-wrap gap-4 pt-4`}>
                                <button className={`group bg-white text-[#0c4d69] text-base sm:text-lg font-[600] hover:cursor-pointer font-[Outfit] px-6 sm:px-8 py-3 rounded-full transition-all hover:bg-[#90EE90] hover:shadow-2xl hover:scale-105 flex items-center gap-2`}>
                                    Start Your Project
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <button className={`border-2 border-white/50 text-white text-base sm:text-lg font-[600] hover:cursor-pointer font-[Outfit] px-6 sm:px-8 py-3 rounded-full transition-all hover:bg-white/10 hover:border-white flex items-center gap-2`}>
                                    View Our Work
                                </button>
                            </div>
                        </div>

                        {/* Right Dashboard Card */}
                        <div className={`hidden lg:block relative`}>
                            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-xl">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-white font-[Outfit] text-2xl font-semibold">Project Dashboard</h3>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-green-400 text-sm font-[Outfit]">Live</span>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-5 border border-blue-400/30">
                                        <div className="text-5xl font-bold text-white font-[Outfit] mb-1">50+</div>
                                        <div className="text-gray-300 text-sm font-[Outfit]">Projects Completed</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-5 border border-green-400/30">
                                        <div className="text-5xl font-bold text-white font-[Outfit] mb-1">99.9%</div>
                                        <div className="text-gray-300 text-sm font-[Outfit]">Success Rate</div>
                                    </div>
                                </div>

                                {/* Progress Bars */}
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-white text-sm font-[Outfit]">Development</span>
                                            <span className="text-blue-400 text-sm font-[Outfit]">95%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{width: '95%'}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-white text-sm font-[Outfit]">Deployment</span>
                                            <span className="text-green-400 text-sm font-[Outfit]">88%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{width: '88%'}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-white text-sm font-[Outfit]">Testing</span>
                                            <span className="text-purple-400 text-sm font-[Outfit]">92%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{width: '92%'}}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Team */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                                    <div>
                                        <div className="text-gray-400 text-xs font-[Outfit] mb-1">Active Team</div>
                                        <div className="flex -space-x-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold">A</div>
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold">B</div>
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold">C</div>
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-gray-800 flex items-center justify-center text-white text-xs">+2</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            {/*Engagement Models Section*/}
            <section className="relative mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center font-[Poppins]">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:pt-10 font-bold text-[var(--base)] mb-6 sm:mb-8 lg:mb-12 text-center px-4">
                    Built on Three Core Pillars
                </h2>

                <div className="gap-4 sm:gap-6 lg:gap-8 m-auto max-w-7xl justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {engagementModels.map((model, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 p-6 sm:p-8"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0c4d69] to-[#2a919f] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <span className="text-3xl text-white font-bold">{index + 1}</span>
                            </div>
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

            {/*Services Overview Section*/}
            <section className={`w-full bg-[#0c4d69] py-12 sm:py-16 lg:py-20 mb-16 sm:mb-24 lg:mb-32`}>
                <div className={`m-auto text-center px-4 mb-8 sm:mb-12`}>
                    <span className={`capitalize text-[#bcd1dc] font-[Poppins] text-sm sm:text-base`}>what we offer</span>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-[Outfit] font-[700] mt-2`}>
                        Comprehensive Digital <br /> Solutions for Your Business
                    </h2>
                </div>

                <div className={`m-auto mb-6 sm:mb-8 lg:mb-12 px-4`}>
                    <div className={`grid max-w-6xl m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8`}>
                        <div className={`flex border border-[#bcd1dc] py-8 sm:py-12 lg:py-16 px-4 sm:px-5 font-[Outfit] flex-col hover:bg-white/5 transition-all`}>
                            <h3 className={`text-white font-[500] text-xl sm:text-2xl lg:text-[25px] mb-2`}>Web Development</h3>
                            <p className={`text-[#bcd1dc] mb-4 sm:mb-6 leading-6 sm:leading-7 text-sm sm:text-base`}>
                                Build responsive, high-performance websites and web applications tailored to your business needs.
                            </p>
                            <a href="#services" className={`text-[#bcd1dc] hover:underline cursor-pointer text-sm sm:text-base`}>Learn More →</a>
                        </div>

                        <div className={`flex border border-[#bcd1dc] py-8 sm:py-12 lg:py-16 px-4 sm:px-5 font-[Outfit] flex-col hover:bg-white/5 transition-all`}>
                            <h3 className={`text-white font-[500] text-xl sm:text-2xl lg:text-[25px] mb-2`}>Mobile Apps</h3>
                            <p className={`text-[#bcd1dc] mb-4 sm:mb-6 leading-6 sm:leading-7 text-sm sm:text-base`}>
                                Create intuitive mobile experiences for iOS and Android that users love.
                            </p>
                            <a href="#services" className={`text-[#bcd1dc] hover:underline cursor-pointer text-sm sm:text-base`}>Learn More →</a>
                        </div>

                        <div className={`flex border border-[#bcd1dc] py-8 sm:py-12 lg:py-16 px-4 sm:px-5 font-[Outfit] flex-col hover:bg-white/5 transition-all`}>
                            <h3 className={`text-white font-[500] text-xl sm:text-2xl lg:text-[25px] mb-2`}>UI/UX Design</h3>
                            <p className={`text-[#bcd1dc] mb-4 sm:mb-6 leading-6 sm:leading-7 text-sm sm:text-base`}>
                                Design user-centered interfaces that combine aesthetics with seamless functionality.
                            </p>
                            <a href="#services" className={`text-[#bcd1dc] hover:underline cursor-pointer text-sm sm:text-base`}>Learn More →</a>
                        </div>

                        <div className={`flex border border-[#bcd1dc] py-8 sm:py-12 lg:py-16 px-4 sm:px-5 font-[Outfit] flex-col hover:bg-white/5 transition-all`}>
                            <h3 className={`text-white font-[500] text-xl sm:text-2xl lg:text-[25px] mb-2`}>IT Consulting</h3>
                            <p className={`text-[#bcd1dc] mb-4 sm:mb-6 leading-6 sm:leading-7 text-sm sm:text-base`}>
                                Strategic technology guidance to optimize your digital infrastructure and processes.
                            </p>
                            <a href="#services" className={`text-[#bcd1dc] hover:underline cursor-pointer text-sm sm:text-base`}>Learn More →</a>
                        </div>
                    </div>
                </div>


                <div className="m-auto px-4">
                    <div className="grid max-w-6xl m-auto grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {/* === CARD 1 === */}
                        <div className="relative overflow-hidden flex flex-col border border-[#bcd1dc] py-6 sm:py-8 px-4 sm:px-5 font-[Outfit] min-h-[250px] sm:min-h-[300px] group">
                            {/* Background image */}
                            <img
                                src={Images.grid_image2}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover z-0"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/50 z-10 transition-all duration-300 group-hover:bg-black/60"></div>

                            {/* Text content */}
                            <div className="relative z-20">
                                <h3 className="text-white font-[500] text-2xl sm:text-3xl lg:text-[35px] mb-1">
                                    50+
                                </h3>
                                <span className="capitalize text-white font-[Poppins] text-sm sm:text-base">
          Projects Successfully Delivered
        </span>
                                <p className="text-white mb-4 sm:mb-6 leading-6 sm:leading-7 text-sm sm:text-base mt-3">
                                    From startups to enterprises, we've helped businesses across industries achieve their digital goals
                                </p>
                                <a className="text-white hover:underline cursor-pointer text-sm sm:text-base font-semibold">
                                    View Portfolio →
                                </a>
                            </div>
                        </div>

                        {/* === CARD 2 === */}
                        <div className="relative overflow-hidden flex flex-col border border-[#bcd1dc] py-6 sm:py-8 px-4 sm:px-5 font-[Outfit] min-h-[250px] sm:min-h-[300px] group">
                            {/* Background image */}
                            <img
                                src={Images.grid_image1}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover z-0"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/50 z-10 transition-all duration-300 group-hover:bg-black/60"></div>

                            {/* Text content */}
                            <div className="relative z-20">
                                <h3 className="text-white font-[500] text-2xl sm:text-3xl lg:text-[35px] mb-1">
                                    15+
                                </h3>
                                <span className="capitalize text-white font-[Poppins] text-sm sm:text-base">
          Countries Worldwide
        </span>
                                <p className="text-white mb-4 sm:mb-6 leading-6 sm:leading-7 text-sm sm:text-base mt-3">
                                    Our global reach enables us to understand diverse markets and deliver solutions that resonate locally
                                </p>
                                <a className="text-white hover:underline cursor-pointer text-sm sm:text-base font-semibold">
                                    Our Impact →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/*Services Details Section*/}
            <section id="services" className="text-black mt-12 sm:mt-24 lg:mt-36 px-4 sm:px-6 font-[Outfit] mx-auto max-w-6xl justify-center py-8">
                <span className={`capitalize font-[Poppins] text-sm sm:text-base`}>Our Services</span>
                <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12`}>
                    <h2 className="font-[Outfit] text-2xl sm:text-3xl lg:text-4xl font-[700]">
                        Comprehensive <br /> Technology Solutions
                    </h2>
                    <button className={`bg-[#0c4d69] text-base sm:text-lg font-[500] hover:cursor-pointer text-white px-4 sm:px-6 py-2.5 rounded-lg transition-all hover:bg-[#0a3d54] whitespace-nowrap`}>
                        View All Services
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

            {/*Work Process*/}
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
                                How We Turn Ideas<br />Into Digital Solutions
                            </h2>

                            <div className="mb-4 sm:mb-6 rounded-lg">
                                <h3 className="text-[#0c4d69] text-lg sm:text-xl font-semibold font-[Outfit] mb-2">
                                    Proven Methodology, Exceptional Results
                                </h3>
                                <p className="text-slate-700 font-[Outfit] text-sm sm:text-base">
                                    Our agile approach ensures transparency, quality, and on-time delivery at every stage of your project
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
                <div className={`h-[200px] sm:h-[250px] lg:h-[280px] z-10 overflow-hidden w-full relative`}>
                    <img
                        src={`${Images.bg_image1}`}
                        loading="lazy"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0c4d69]/95 to-[#0c4d69]/85"></div>
                </div>
                <div className="absolute p-4 sm:p-6 lg:p-8 text-white my-auto content-center z-20 w-[95%] sm:w-[90%] lg:w-[1000px] h-[200px] sm:h-[250px] lg:h-[280px] max-w-7xl">
                    <span className={`capitalize text-xs sm:text-sm font-[Poppins] block mb-2 sm:mb-3`}>Ready to Get Started?</span>
                    <div className={`flex flex-col sm:flex-row justify-between font-[Outfit] items-start sm:items-center gap-4`}>
                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-[700]">
                            Let's Build Your Next<br className="hidden sm:block" /> Digital Solution Together!
                        </h2>
                        <button className={`border-2 border-white text-white text-base sm:text-lg font-[600] hover:cursor-pointer px-6 sm:px-8 py-2.5 rounded-lg transition-all hover:bg-white hover:text-[#0c4d69] whitespace-nowrap`}>
                            Get Free Consultation
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
                            Powered by Modern <br className="hidden sm:block" /> Technology Stack
                        </span>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
                            We leverage industry-leading tools and frameworks to build scalable, secure, and high-performance solutions
                        </p>
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
                                Ready to Start Your Project?<br />
                                <span style={{color: "#669140"}}>Let's Talk!</span>
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
                                placeholder="Tell us about your project"
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
                                Send Message
                            </button>
                        </div>
                    </form>

                    <div className="w-full lg:w-2/5 bg-[#0c4d69] text-white flex items-center justify-center p-6 sm:p-8 lg:p-10 font-[Outfit]">
                        <div className="text-center w-full max-w-md space-y-6 sm:space-y-8">
                            <div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                                    Let's Create Something Extraordinary
                                </h2>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    Partner with us to transform your vision into reality. We're committed to delivering innovative solutions that drive real business results.
                                </p>
                            </div>

                            <div className="flex items-start justify-center space-x-3">
                                <div className="text-left">
                                    <p className="font-semibold text-white text-sm sm:text-base">Central One Technologies</p>
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
