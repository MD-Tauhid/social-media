import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between px-10 py-2 items-center bg-[#f0b1b1]">
            <div className="flex items-center gap-5">
                <h1 className="text-xl text-gray-800 font-bold">Eyebook</h1>
                <div className="flex items-center bg-white font-light px-2 py-1 rounded-full w-44">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="ml-2 outline-none bg-transparent" type="text" name="search" id="search" placeholder="Search..." />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <ul className='flex items-center gap-1'>
                    <li className="px-8 py-2 rounded-lg hover:bg-[#e29c9c]">
                        <svg className='h-6 w-6' fill="none" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    </li>
                    <li className="px-8 py-2 rounded-lg hover:bg-[#e29c9c]">
                        <svg className='h-6 w-6' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 11" id="Layer_11"><path d="M29.73,9.9A5,5,0,0,0,25.1,5.36a115.19,115.19,0,0,0-18.2,0A5,5,0,0,0,2.27,9.9a69,69,0,0,0,0,12.2A5,5,0,0,0,6.9,26.64c3,.24,6.06.36,9.1.36s6.08-.12,9.1-.36a5,5,0,0,0,4.63-4.54A69,69,0,0,0,29.73,9.9Zm-2,12A3,3,0,0,1,25,24.65a113.8,113.8,0,0,1-17.9,0,3,3,0,0,1-2.78-2.72,65.26,65.26,0,0,1,0-11.86A3,3,0,0,1,7.05,7.35C10,7.12,13,7,16,7s6,.12,9,.35a3,3,0,0,1,2.78,2.72A65.26,65.26,0,0,1,27.73,21.93Z" /><path d="M21.45,15.11l-8-4A1,1,0,0,0,12,12v8a1,1,0,0,0,.47.85A1,1,0,0,0,13,21a1,1,0,0,0,.45-.11l8-4a1,1,0,0,0,0-1.78ZM14,18.38V13.62L18.76,16Z" /></g></svg>
                    </li>
                    <li className="px-8 py-2 rounded-lg hover:bg-[#e29c9c]">
                        <svg className='h-6 w-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h24v24H0z" fill="none" /><path d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm0 2H7a4 4 0 0 0-3.995 3.8L3 10v4a4 4 0 0 0 3.8 3.995L7 18h10a4 4 0 0 0 3.995-3.8L21 14v-4a4 4 0 0 0-3.8-3.995L17 6zm-7 3v2h2v2H9.999L10 15H8l-.001-2H6v-2h2V9h2zm8 4v2h-2v-2h2zm-2-4v2h-2V9h2z" fill-rule="nonzero" /></g></svg>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <ul className="flex items-center gap-3">
                    <li className='p-2 bg-[#e29c9c] rounded-full hover:bg-[#d59595]'>
                        <svg className='w-5 h-5' fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="currentColor" /><path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="currentColor" /><path d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z" fill="currentColor" /><path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="currentColor" /><path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" /><path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="currentColor" /><path d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z" fill="currentColor" /><path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="currentColor" /><path d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z" fill="currentColor" /></svg>
                    </li>
                    <li className='p-2 bg-[#e29c9c] rounded-full hover:bg-[#d59595]'>
                        <svg className='2-5 h-5' viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg"><path d="M9.61,18.82l5.91-6.53a.42.42,0,0,1,.61,0l3.51,3.45a.44.44,0,0,0,.51.07l4.69-2.6a.43.43,0,0,1,.52.66L19.41,20.4a.43.43,0,0,1-.61,0l-3.52-3.48a.42.42,0,0,0-.5-.07l-4.65,2.6A.42.42,0,0,1,9.61,18.82Z" /><path d="M8.05,34a2.27,2.27,0,0,1-2.26-2.26V27A15.22,15.22,0,0,1,1,15.94C1,7.29,8.42.25,17.5.25S34,7.29,34,15.94,26.58,31.63,17.5,31.63a17.09,17.09,0,0,1-4-.48L9.2,33.67A2.24,2.24,0,0,1,8.05,34ZM17.5,2.75c-7.7,0-14,5.92-14,13.19a12.74,12.74,0,0,0,4.06,9.29,2.24,2.24,0,0,1,.7,1.63v4.45l4-2.36A2.22,2.22,0,0,1,14,28.7a14.88,14.88,0,0,0,3.52.43c7.7,0,14-5.92,14-13.19S25.2,2.75,17.5,2.75ZM5.87,27h0Z" /></svg>
                    </li>
                    <li className='p-2 bg-[#e29c9c] rounded-full hover:bg-[#d59595]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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