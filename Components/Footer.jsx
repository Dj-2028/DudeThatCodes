import React from 'react'


const Footer = () => {
    return (
        <>
            <div class="footer bg-black text-[#616161] h-[30vh] w-[100%] flex px-[5vw]">
                <div className='w-[40%]'>
                    <video
                        src="footer_vid.webm"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-[30vh] w-full"
                    >
                    </video>


                </div>
                <footer className='flex  pt-[40px] flex-col justify-center items-center gap-[3vh] pb-[25px] w-[60%]'>

                    <div class="footer-txt2 flex justify-between gap-[8vw] items-center">
                        <p className='hover:scale-[1.1] hover:text-[#7e7e7e] transition-transform ease-in-out duration-150 text-sm'>Privacy Policy</p>
                        <p className='hover:scale-[1.1] hover:text-[#7e7e7e] transition-transform ease-in-out duration-150 text-sm'>Terms of Service</p>
                        <p className='hover:scale-[1.1] hover:text-[#7e7e7e] transition-transform ease-in-out duration-150 text-sm'>Contact Us</p>
                    </div>
                    <div class="footer-txt flex justify-between gap-[6vw] items-center">
                        <div className='hover:scale-[1.1] hover:text-[#7e7e7e] transition-transform ease-in-out duration-150'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                        </div>
                        <div className='hover:scale-[1.1] hover:text-[#7e7e7e] transition-transform ease-in-out duration-150'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>

                        </div>
                        <div className='hover:scale-[1.1] hover:text-[#7e7e7e] transition-transform ease-in-out duration-150'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>

                        </div>
                        <div className='hover:scale-[1.1] hover:text-[#7e7e7e] transition-transform ease-in-out duration-150'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </div>
                    </div>


                    <p className="text-xs mt-5"><i>@ All right reserved 2025</i></p>
                </footer>
            </div>

        </>
    )
}

export default Footer