import react from 'react'
import logo from '../src/assets/logo.png'

export default function Navbar() {
    return (
        <>
            <div className='max-w-7xl mx-auto' >

                <header className="flex items-center justify-between py-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img className='h-9' src={logo} alt="" />
                        <span className="text-white font-bold text-xl tracking-wide">SaveMyDay</span>
                    </div>



                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 text-gray-300 text-sm">
                        <a href="#" className="hover:text-white transition">About</a>
                        <a href="#" className="hover:text-white transition">Features</a>
                        <a href="#" className="hover:text-white transition">How it works</a>
                        <a href="#" className="hover:text-white transition">FAQ</a>
                    </nav>

                    {/* Action buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transition">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button className="px-6 py-2 bg-gray-800 text-gray-100 rounded-full hover:bg-gray-700 transition text-sm">
                            Log in
                        </button>
                    </div>
                </header>
            </div>
        </>
    )
}