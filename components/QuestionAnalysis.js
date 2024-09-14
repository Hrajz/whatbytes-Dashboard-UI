"use client"; // Client-side component

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysisDoughnutChart = () => {
  const totalQuestions = 15;
  const correctAnswers = 10;
  const incorrectAnswers = totalQuestions - correctAnswers;

  const [image, setImage] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [dataUpdated, setDataUpdated] = useState(false); // State to trigger re-render

  useEffect(() => {
    const img = new Image();
    img.src = "/istockphoto-1282050925-612x612.jpg";
    img.onload = () => {
      console.log("Image loaded successfully");
      setImage(img);
      setLoaded(true);
      setDataUpdated((prev) => !prev); // Trigger a re-render
    };
    img.onerror = (err) => {
      console.error("Image failed to load", err);
    };
  }, []);

  const centerImagePlugin = {
    id: "centerImage",
    afterDraw(chart) {
      if (loaded && image) {
        const { ctx, chartArea } = chart;
        if (ctx) {
          const centerX = (chartArea.left + chartArea.right) / 2;
          const centerY = (chartArea.top + chartArea.bottom) / 2;
          const imgSize = 50;

          ctx.drawImage(
            image,
            centerX - imgSize / 2,
            centerY - imgSize / 2,
            imgSize,
            imgSize
          );
        } else {
          console.log("Drawing context is not available");
        }
      } else {
        console.log("Image not available or not loaded");
      }
    },
  };

  const [doughnutData, setDoughnutData] = useState({
    labels: ["Correct Answers", "Incorrect Answers"],
    datasets: [
      {
        label: "Score Breakdown",
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ["#1a8cff", "#e6e6ff"],
        hoverBackgroundColor: ["#1a8cff", "#e6e6ff"],
        borderWidth: 1,
        cutout: "70%",
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md flex flex-col m-2 border border-slate-200">
      <h3 className="text-xl font-bold mb-4 text-black">Question Analysis</h3>
      <div className="">
        <p className="text-slate-600 font-medium">
          <strong>
            You scored {correctAnswers} questions correct out of{" "}
            {totalQuestions}.
          </strong>
          &nbsp;However, it still needs some improvements.
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-full md:w-52 md:h-52 m-4 mx-auto max-[750px]:w-40">
        <Doughnut
          data={doughnutData}
          options={options}
          plugins={[centerImagePlugin]}
        />
      </div>
    </div>
  );
};

export default QuestionAnalysisDoughnutChart;
