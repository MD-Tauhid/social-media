import Image from 'next/image';
import React from 'react';
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FaRegFaceLaugh } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";

const CreatePost = () => {
    return (
        <div className='bg-gray-50 p-4 rounded-md'>
            <div className='flex gap-4 mb-4'>
                <Image className='h-9 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU" height={0} width={44} alt="" />
                <button className='bg-gray-100 flex-grow rounded-full hover:bg-gray-200'>what is in your mind today</button>
            </div>
            <hr />
            <div className='mt-4 grid grid-cols-3 gap-2'>
                <div className='flex gap-2 items-center hover:bg-gray-200 p-2 rounded-lg'><HiOutlineVideoCamera color='red'/>Live video</div>
                <div className='flex gap-2 items-center hover:bg-gray-200 p-2 rounded-lg'><IoMdPhotos color='green'/> Photo/video</div>
                <div className='flex gap-2 items-center hover:bg-gray-200 p-2 rounded-lg'><FaRegFaceLaugh color='#ede000'/>Feelings/activity</div>
            </div>
        </div>
    );
};

export default CreatePost;