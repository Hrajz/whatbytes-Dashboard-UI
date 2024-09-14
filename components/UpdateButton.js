import React from "react";

const UpdateButton = ({ onClick }) => {
  return (
    <div className="flex items-center cursor-pointer max-[750px]:flex-col justify-between align-middle">
      <div>
        <img className="w-16 mr-5" src="/images.png" alt="LOGO" />
      </div>
      <div className="mr-5 text-md flex items-center">
        <strong className="p-2 text-black">Hyper Text Markup Language</strong>
        <p className="text-gray-500">
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </p>
      </div>
      <button
        onClick={onClick}
        className="text-sm m-5 py-2 px-6 bg-blue-900 text-white rounded hover:bg-blue-800"
      >
        Update
      </button>
    </div>
  );
};

export default UpdateButton;
