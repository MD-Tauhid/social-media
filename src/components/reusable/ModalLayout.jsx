import React, { ReactNode } from "react";
import { CgClose } from "react-icons/cg";


function ModalLayout({ children, setShowModal, modalTitle = "" }) {
    // console.log(setShowModal);
    return (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none border-none focus:outline-none bg-black/40 backdrop-blur-sm">
            <div className="relative w-auto my-6 ">
                <div className="border-0  shadow-lg relative flex flex-col lg:w-[40vw] w-[95vw] max-h-[500px] overflow-y-auto bg-white border-none outline-none focus:outline-none">
                    <div className="bg-white dark:bg-darkPrimary p-3 border-b border-gray-200">
                        <div className="relative">
                            <h1 className="text-center text-gray-700 dark:text-gray-400 font-semibold border-none">
                                {" "}
                                {modalTitle}
                            </h1>
                            <button
                                type="button"
                                className="absolute -top-1 right-1  bg-gray-100 rounded-full text-black  dark:text-darkTextPrimary p-2 border-none"
                                onClick={() => setShowModal(false)}
                            >
                                <CgClose size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="relative p-8 flex-auto dark:bg-darkTertiary border-none">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalLayout;