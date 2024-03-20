"use client"
import CreatePost from "@/components/home/CreatePost";
import ModalLayout from "@/components/reusable/ModalLayout";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  // let showModal = true;
  // const setShowModal = () =>{
  //   showModal = !showModal;
  //   return showModal;
  // }
  return (
    <main className="p-4">
      <div className="mx-10 space-x-6">
        <CreatePost />
      </div>
      <div>
        {
          showModal &&
          (<ModalLayout modalTitle="Create Post" setShowModal={setShowModal}>
            <form action="">
              <div className="flex gap-2">
                <Image className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU" height={0} width={60} alt="" />
                <div>
                  <h1>User Name</h1>
                  <p className="text-[12px]">public</p>
                </div>
              </div>
            </form>
          </ModalLayout>)
        }
      </div>
    </main>
  );
}
