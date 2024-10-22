import React, { useState } from "react";
import { useSelector } from "react-redux";

import UpdateBookModal from "../components/UpdateBookModal";

export default function BookFormat() {
  const formats = [
    "Square 21x21cm",
    "Landscape A4",
    "Portrait A4",
    "Square 30x30cm",
  ];
  const paperType = useSelector((state) => state.book.paper);
  const [selectedFormat, setSelectedFormat] = useState(paperType);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFormatChange = (e) => {
    const val = parseInt(e.target.value);
    setSelectedFormat(val);
  };

  return (
    <div className="flex w-full h-full px-8 py-12 mx-auto">
      <div className="w-[60%] pl-[130px] m-auto pr-[50px]">
        <h1 className="font-bold text-[60px]">Book format</h1>
        <p className="text-gray-600 text-[24px] my-10">
          Find your perfect book in our range. We use specially formulated paper
          to give you HD quality photo printing for a premium finish.
        </p>
        <div>
          <h2 className="mb-6 text-4xl font-semibold">Format</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                value={0}
                checked={selectedFormat === 0}
                onChange={handleFormatChange}
                className="w-5 h-5 text-purple-600 form-radio"
              />
              <span className="text-lg">{formats[0]}</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                value={1}
                checked={selectedFormat === 1}
                onChange={handleFormatChange}
                className="w-5 h-5 text-purple-600 form-radio"
              />
              <span className="text-lg">{formats[1]}</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                value={2}
                checked={selectedFormat === 2}
                onChange={handleFormatChange}
                className="w-5 h-5 text-purple-600 form-radio"
              />
              <span className="text-lg">{formats[2]}</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                value={3}
                checked={selectedFormat === 3}
                onChange={handleFormatChange}
                className="w-5 h-5 text-purple-600 form-radio"
              />
              <span className="text-lg">{formats[3]}</span>
            </label>
          </div>

          <button
            className="w-full px-6 py-6 mx-auto mt-10 text-white bg-black rounded-lg hover:bg-gray-800 text-[18px]"
            onClick={openModal}>
            Update your book
          </button>
        </div>
      </div>
      <div className="flex-1 m-auto">
        <div className="flex mb-8">
          <img
            src="/assets/images/bg1.jpg"
            alt="Book example 1"
            style={{ width: "calc((100% - 32px) / 2)" }}
            className="h-auto mr-8 rounded-lg"
          />
          <img
            src="/assets/images/bg2.jpg"
            alt="Book example 2"
            style={{ width: "calc((100% - 32px) / 2)" }}
            className="h-auto rounded-lg"
          />
        </div>
        <img
          src="/assets/images/bg3.jpg"
          alt="Book example 3"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <UpdateBookModal
        isOpen={isModalOpen}
        onClose={closeModal}
        bookFormat={selectedFormat}
      />
    </div>
  );
}
