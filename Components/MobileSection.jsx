import React from 'react';

export default function SocialMediaHero() {
    return (
        <div className="h-[65vh] w-[75vw] mt-[12vh] mx-auto bg-gradient-to-b from-[#88C7F9] to-[#268CDF] rounded-[20px] border border-[#619FEF52] relative overflow-hidden">
            {/* Mobile Section */}
            <div className="mobile">
                <div className="mobile-txt max-w-[25%] absolute top-[7%] left-[8%]">
                    <p className="bg-[#619fef75] text-[#3482E9] text-center rounded-[20px] py-[6px] px-[10px] text-[10px] inline-block">
                        Use Cases
                    </p>
                    <p className="mt-[10px] text-[12px] text-white">
                        Grow your social media presence with Postiz. Schedule, analyze, and engage with your audience.
                    </p>
                </div>

                <img className="absolute h-[70vh] top-[28%] left-[4%] z-10 rotate-[3deg]" src="phone.png" alt="Phone" />
            </div>

            {/* Details Box Section */}
            <div className="details-box w-[62%] h-full absolute right-[4vw] bottom-0">
                <h2 className="text-[50px] font-[250] absolute left-[10%] top-[8%] text-white">
                    Unleashing the power of
                </h2>
                <h2 className="text-[50px] font-[250] absolute left-[10%] top-[19%] text-[#0000009E]">
                    chat-based AI tools
                </h2>

                {/* Feature Boxes Container */}
                <div className="dcontainer absolute bottom-0 left-0 h-[70%] w-full flex justify-center items-center gap-[2%]">
                    {/* Box 1 */}
                    <div className="dbox h-[80%] w-[30%] bg-white border border-[#C3C1C1] rounded-[10px] transition-transform duration-100 hover:scale-105 shadow-[5px_5px_10px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-center items-center">
                        <div className="text-blue-500 mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Smart Scheduling</h3>
                        <p className="text-sm text-gray-600 text-center">Automate your posts across all platforms</p>
                    </div>

                    {/* Box 2 */}
                    <div className="dbox h-[80%] w-[30%] bg-white border border-[#C3C1C1] rounded-[10px] transition-transform duration-100 hover:scale-105 shadow-[5px_5px_10px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-center items-center">
                        <div className="text-blue-500 mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Analytics</h3>
                        <p className="text-sm text-gray-600 text-center">Track performance and engagement</p>
                    </div>

                    {/* Box 3 */}
                    <div className="dbox h-[80%] w-[30%] bg-white border border-[#C3C1C1] rounded-[10px] transition-transform duration-100 hover:scale-105 shadow-[5px_5px_10px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-center items-center">
                        <div className="text-blue-500 mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Engagement</h3>
                        <p className="text-sm text-gray-600 text-center">Respond to comments instantly</p>
                    </div>
                </div>
            </div>
        </div>
    );
}