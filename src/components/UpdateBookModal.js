import React from "react";
import { useDispatch } from "react-redux";
import { setPaper } from "../features/bookSlice";
import { setTab } from "../features/tabSlice";

const UpdateBookModal = ({ isOpen, onClose, bookFormat }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-8 bg-white rounded-lg w-[600px]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="mx-auto text-2xl font-semibold">Re-arrange photos</h2>
        </div>
        <hr className="mb-4 border-t-4" />
        <p className="mb-6 text-gray-700 text-center text-[18px]">
          To change the format of your book we need to re-arrange your photos so
          they fit as best as possible in the new format. Do you want us to
          re-arrange your photos?
        </p>
        <div className="flex justify-center space-x-10">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-900">
            Cancel
          </button>
          <button
            className="px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-200"
            onClick={() => {
              dispatch(setPaper({ paper: bookFormat }));
              dispatch(setTab(0));
            }}>
            Re-arrange
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookModal;
