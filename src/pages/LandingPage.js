import React from "react";
import { Link } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
export default function LandingPage() {
  return (
    <div className="w-screen h-screen bg-[url('assets/background.jpg')] flex flex-col">
      <div className="p-8 bg-white rounded-lg w-[600px] m-auto">
        <div className="flex">
          <div className="flex-1"></div>
          <Link to="/home">
            <button className="text-gray-500 hover:text-black text-[18px]">
              Skip this
            </button>
          </Link>
        </div>
        <div className="items-center justify-between mb-6">
          <h2 className="mx-auto text-4xl font-semibold text-center">
            Load some photos
          </h2>
        </div>
        <hr className="mb-4 border-t-4" />
        <p className="mb-6 text-gray-700 text-center text-[18px] px-10">
          Choose a few photos from your computer to get you started. We will add
          these photos straight to your book to help you on your way.
        </p>
        <div className="flex justify-center space-x-10">
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:shadow-md hover:border-gray-400 hover:text-indigo-500">
            <FiUploadCloud className="text-xl" />
            <span>Upload photos</span>
          </button>
        </div>
      </div>
    </div>
  );
}
