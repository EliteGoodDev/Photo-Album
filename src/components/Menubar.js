import React from "react";
import { useState } from "react";
import { FaImage, FaTable, FaBook, FaSyncAlt } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { setTab } from "../features/tabSlice";

import Modal from "./Modal";

export default function Menubar() {
  const tab = useSelector((state) => state.tab.value);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className=" fixed bg-[#f0ecf4] top-0 left-0 h-screen w-[100px] flex flex-col items-center pt-[100px]">
        <div className="flex flex-col items-center ">
          <FaImage
            className={`w-[100px] h-[100px] text-gray-500 ${
              tab === 0 && "bg-white"
            } p-8 hover:cursor-pointer hover:bg-[#ddb5a9]`}
            onClick={() => dispatch(setTab(0))}
          />
          <FaTable
            className={`w-[100px] h-[100px] text-gray-500 ${
              tab === 1 && "bg-white"
            } p-8 hover:cursor-pointer hover:bg-[#ddb5a9]`}
            onClick={() => dispatch(setTab(1))}
          />
          <FaBook
            className={`w-[100px] h-[100px] text-gray-500 ${
              tab === 2 && "bg-white"
            } p-8 hover:cursor-pointer hover:bg-[#ddb5a9]`}
            onClick={() => dispatch(setTab(2))}
          />
        </div>
        <FaSyncAlt
          className={`w-[100px] h-[100px] text-gray-500 p-8 hover:cursor-pointer hover:bg-[#ddb5a9] mt-auto`}
          onClick={openModal}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
