"use client"
import CreatePost from "@/components/home/CreatePost";
import ModalLayout from "@/components/reusable/ModalLayout";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiWorld } from "react-icons/bi";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm()
  // let showModal = true;
  // const setShowModal = () =>{
  //   showModal = !showModal;
  //   return showModal;
  // }

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <main className="p-4">
      <div className="mx-10 space-x-6">
        <CreatePost setShowModal={setShowModal} />
      </div>
      <div>
        {
          showModal &&
          (<ModalLayout modalTitle="Create Post" setShowModal={setShowModal}>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
              <div className="flex gap-2">
                <Image className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU" height={0} width={60} alt="" />
                <div>
                  <h1>User Name</h1>
                  <select {...register("privacy")} className="text-xs" >
                    <option className="text-[12px] flex gap-1 items-center" value="public"><BiWorld />Public</option>
                    <option className="text-[12px] flex gap-1 items-center" value="only_me"><BiWorld />Only me</option>
                    <option className="text-[12px] flex gap-1 items-center" value="friend"><BiWorld />Friend</option>
                  </select>
                </div>
              </div>
              <textarea {...register("post_description")} className="w-full focus:outline-none resize-none m-2"  rows="5" placeholder="What is in your mind?"></textarea>
              <input className="bg-[#f0b1b1] w-full py-1 text-white rounded-lg" type="submit" value="Post" />
            </form>
          </ModalLayout>)
        }
      </div>
    </main>
  );
}
