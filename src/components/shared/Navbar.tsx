import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between px-10 py-5 items-center bg-[#f0b1b1]">
            <div className="flex items-center gap-5">
                <h1 className="text-xl text-gray-800 font-bold">LoGo</h1>
                <div className="flex items-center bg-white font-light px-2 py-1 rounded-full w-44">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="ml-2 outline-none bg-transparent" type="text" name="search" id="search" placeholder="Search..." />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <ul className='flex items-center gap-3'>
                    <li className="font-semibold text-gray-700">Home</li>
                    <li className="font-semibold text-gray-700">Articles</li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <ul className="flex items-center gap-3">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </li>
                </ul>
                <div className="flex items-center gap-x-4">
                    <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full" />
                    <div>
                        <span className="block text-gray-700 text-sm font-semibold">Alivika tony</span>
                        <a
                            href="javascript:void(0)"
                            className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
                        >
                            View profile
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;