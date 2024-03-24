import React from 'react';

const CreatePostForm = () => {
    return (
        <form action="">
            <div className="flex gap-2">
                <Image className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU" height={0} width={60} alt="" />
                <div>
                    <h1>User Name</h1>
                    <p className="text-[12px] flex gap-1 items-center"><BiWorld />public</p>
                </div>
            </div>
            <textarea className="w-full focus:outline-none resize-none m-2" name="post_description" id="post_description" rows="5" placeholder="What is in your mind?"></textarea>
            <input className="bg-[#f0b1b1] w-full py-1 text-white rounded-lg" type="submit" value="Post" disabled />
        </form>
    );
};

export default CreatePostForm;