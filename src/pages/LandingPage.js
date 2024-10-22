import React from "react";
import { Link } from "react-router-dom";
import { addImage, getAllImages } from "../utils/idb";
import { FiUploadCloud } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  const onUpload = async (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const imageBase64Promises = uploadedFiles.map((file) => toBase64(file));
    const imageBase64List = await Promise.all(imageBase64Promises);

    await Promise.all(
      imageBase64List.map((val) => addImage({ data: val, flag: 0 }))
    );
    navigate("/home");
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await getAllImages();
        if (images.length > 0) {
          navigate("./home");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages(); // Call the async function
  }, [navigate]);
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
        <div className="flex flex-col items-center justify-center p-5">
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center px-4 py-2 text-purple-600 transition border border-gray-400 border-dashed rounded-md cursor-pointer hover:bg-purple-50 hover:border-purple-400">
            <FiUploadCloud className="mr-2" />
            Upload photos
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={onUpload}
          />
        </div>
      </div>
    </div>
  );
}
