import React from 'react';
import { FcHighPriority } from "react-icons/fc";


const ErrorModal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded-lg z-10 shadow-lg">
                <FcHighPriority className="size-20 mb-2 mx-auto opacity-60"/>
                <h1 className="text-center text-red-600 text-4xl font-bold font-markazi" >Error</h1>
                <p className="text-center text-gray-400 font-karla text-lg">{message}</p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded font-karla w-full"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default ErrorModal;