
import React from 'react';


export default function HeroSection() {
    return (
        <div className="min-h-screen  text-gray-100 relative overflow-hidden">
            {/* Background gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent"></div>

            {/* Main content container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Header */}


                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
                        Unleash the power{' '}
                        <span className="inline-flex items-center">
                            <svg className="w-8 h-8 mx-2" viewBox="0 0 24 24" fill="none">
                                <rect x="4" y="4" width="3" height="16" fill="url(#grad1-hero)" rx="1.5" />
                                <rect x="10" y="8" width="3" height="12" fill="url(#grad2-hero)" rx="1.5" />
                                <rect x="16" y="2" width="3" height="20" fill="url(#grad3-hero)" rx="1.5" />
                                <defs>
                                    <linearGradient id="grad1-hero" x1="5.5" y1="4" x2="5.5" y2="20" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#a78bfa" />
                                        <stop offset="1" stopColor="#6366f1" />
                                    </linearGradient>
                                    <linearGradient id="grad2-hero" x1="11.5" y1="8" x2="11.5" y2="20" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#8b5cf6" />
                                        <stop offset="1" stopColor="#6366f1" />
                                    </linearGradient>
                                    <linearGradient id="grad3-hero" x1="17.5" y1="2" x2="17.5" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#c4b5fd" />
                                        <stop offset="1" stopColor="#7c3aed" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>{' '}
                        of AI with SaveMyDay
                    </h1>

                    <p className="text-gray-300 text-lg max-w-md">
                        Meet <span className="text-purple-400 font-semibold">SaveMyDay</span> — your AI-powered chatbot that simplifies
                        interaction, answers instantly, and elevates your digital experience.
                    </p>

                    <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105">
                        Get Started
                    </button>

                    {/* Phone Mockup */}
                    <div className="relative mt-16 overflow-hidden">
                        <div className="relative w-80 h-96 mx-auto">
                            {/* Left Hand */}
                            <div className="absolute left-0 bottom-0 w-32 h-64">
                                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-t-full rounded-br-3xl opacity-90 shadow-2xl"></div>
                                <div className="absolute top-8 left-4 w-6 h-24 bg-gradient-to-b from-purple-300 to-purple-600 rounded-full rotate-12 opacity-90"></div>
                                <div className="absolute top-0 left-10 w-6 h-28 bg-gradient-to-b from-purple-300 to-purple-600 rounded-full rotate-6 opacity-90"></div>
                            </div>

                            {/* Right Hand */}
                            <div className="absolute right-0 bottom-0 w-32 h-64">
                                <div className="w-full h-full bg-gradient-to-bl from-purple-400 to-purple-600 rounded-t-full rounded-bl-3xl opacity-90 shadow-2xl"></div>
                                <div className="absolute top-8 right-4 w-6 h-24 bg-gradient-to-b from-purple-300 to-purple-600 rounded-full -rotate-12 opacity-90"></div>
                                <div className="absolute top-0 right-10 w-6 h-28 bg-gradient-to-b from-purple-300 to-purple-600 rounded-full -rotate-6 opacity-90"></div>
                            </div>

                            {/* Phone */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-[480px] bg-black rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black p-6 flex flex-col">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <button className="text-gray-400">‹</button>
                                        <span className="text-white text-sm">New chat</span>
                                        <button className="text-gray-400">+</button>
                                    </div>

                                    {/* Chat */}
                                    <div className="flex-1 space-y-4 overflow-y-auto no-scrollbar">
                                        <div className="text-center text-gray-500 text-xs">Today</div>

                                        {/* AI Message */}
                                        <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-3 text-xs text-gray-300">
                                            Hi, there! 👋 Welcome to SaveMyDay Chat.<br />
                                            How can I assist you today?
                                        </div>

                                        {/* User Message */}
                                        <div className="ml-auto bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl rounded-br-sm p-3 text-xs text-white max-w-[80%] shadow-lg">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                                                    <rect x="4" y="4" width="3" height="16" fill="white" rx="1.5" />
                                                    <rect x="10" y="8" width="3" height="12" fill="white" rx="1.5" />
                                                    <rect x="16" y="2" width="3" height="20" fill="white" rx="1.5" />
                                                </svg>
                                                <span className="text-purple-200 text-xs">3:52 PM</span>
                                            </div>
                                            I need information about student loans.
                                        </div>

                                        {/* AI Response */}
                                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl rounded-tl-sm p-3 text-xs text-white shadow-lg">
                                            Sure! I can help with that — what country or bank are you exploring options in?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
