"use client"; // Client-side component

import React, { useState } from "react";

const UpdateModal = ({
  isOpen,
  onClose,
  rank,
  setRank,
  percentile,
  setPercentile,
  correctAnswers,
  setCorrectAnswers,
  onSave,
}) => {
  const [tempRank, setTempRank] = useState(rank);
  const [tempPercentile, setTempPercentile] = useState(percentile);
  const [tempCorrectAnswers, setTempCorrectAnswers] = useState(correctAnswers);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateInputs = () => {
    const newErrors = {};
    if (!tempRank || isNaN(tempRank) || tempRank <= 0)
      newErrors.rank = "Rank must be a positive number and cannot be empty.";
    if (
      !tempPercentile ||
      isNaN(tempPercentile) ||
      tempPercentile < 0 ||
      tempPercentile > 100
    )
      newErrors.percentile =
        "Percentile must be between 0 and 100 and cannot be empty.";
    if (!tempCorrectAnswers || !/^\d+\/\d+$/.test(tempCorrectAnswers))
      newErrors.correctAnswers =
        'Correct Answers must be in the format "x/y" and cannot be empty.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveClick = () => {
    if (validateInputs()) {
      setRank(tempRank);
      setPercentile(tempPercentile);
      setCorrectAnswers(tempCorrectAnswers);
      onSave();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/5 max-[1100px]:w-11/12">
        <div className="flex justify-between p-4">
          <h2 className="text-lg font-bold mb-4">Update Score</h2>
          <img className="w-12 mr-5" src="/images.png" alt="LOGO" />
        </div>
        <div className="mb-7 flex items-center justify-between max-[1100px]:flex-col">
          <div className="flex max-[1100px]:mb-2">
            <p className="bg-blue-900 rounded-full w-6 h-6 font-bold text-white mr-2 text-center">
              1
            </p>
            <p>
              Update your <strong>Rank</strong>
            </p>
          </div>
          <div className="flex flex-col w-2/5 max-[1100px]:w-4/5">
            <input
              type="number"
              value={tempRank}
              onChange={(e) => setTempRank(e.target.value)}
              className="p-2 rounded w-full border border-blue-700"
            />
            {errors.rank && (
              <p className="text-red-500 text-xs mt-1">{errors.rank}</p>
            )}
          </div>
        </div>
        <div className="mb-7 flex items-center justify-between max-[1100px]:flex-col">
          <div className="flex max-[1100px]:mb-2">
            <p className="bg-blue-900 rounded-full w-6 h-6 font-bold text-white mr-2 text-center">
              2
            </p>
            <p>
              Update your <strong>Percentile</strong>
            </p>
          </div>
          <div className="flex flex-col w-2/5 max-[1100px]:w-4/5">
            <input
              type="number"
              value={tempPercentile}
              onChange={(e) => setTempPercentile(e.target.value)}
              className="p-2 rounded w-full border border-blue-700"
            />
            {errors.percentile && (
              <p className="text-red-500 text-xs mt-1">{errors.percentile}</p>
            )}
          </div>
        </div>
        <div className="mb-7 flex items-center justify-between max-[1100px]:flex-col">
          <div className="flex max-[1100px]:mb-2">
            <p className="bg-blue-900 rounded-full w-6 h-6 font-bold text-white mr-2 text-center">
              3
            </p>
            <p>
              Update your <strong>Current Score</strong>
            </p>
          </div>
          <div className="flex flex-col w-2/5 max-[1100px]:w-4/5">
            <input
              type="text"
              value={tempCorrectAnswers}
              onChange={(e) => setTempCorrectAnswers(e.target.value)}
              className="p-2 rounded w-full border border-blue-700"
            />
            {errors.correctAnswers && (
              <p className="text-red-500 text-xs mt-1">
                {errors.correctAnswers}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-4 text-black rounded border border-black mr-4"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveClick}
            className="py-2 px-8 bg-blue-800 text-white rounded hover:bg-blue-600 "
          >
            Save →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
