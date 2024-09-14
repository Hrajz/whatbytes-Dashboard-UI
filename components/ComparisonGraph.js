"use client"; // Client-side component

import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation"; // Import annotation plugin
import { useRef, useState, useEffect } from "react";

// Register the necessary components and scales
Chart.register(
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  annotationPlugin 
);

const ComparisonGraph = ({ percentile }) => {
  const chartRef = useRef();

  const [data, setData] = useState({
    labels: ["0", "17", "22", "30", "47", "55", "75", "85", "90", "95", "100"], // x-axis labels
    datasets: [
      {
        label: "Number of Students",
        data: [0, 25, 28, 50, 75, 91, 23, 12, 17, 4, 1], // y-axis data
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
        tension: 0.5, // Curved line
      },
    ],
  });

  const [weightedAverage, setWeightedAverage] = useState(0);


  useEffect(() => {
    const labels = data.labels.map(Number); 
    const students = data.datasets[0].data;

    const sumOfProducts = labels.reduce((sum, label, idx) => {
      return sum + label * students[idx];
    }, 0);

    const totalStudents = students.reduce(
      (sum, numStudents) => sum + numStudents,
      0
    );

    const weightedAvg = totalStudents > 0 ? sumOfProducts / totalStudents : 0;

    setWeightedAverage(weightedAvg.toFixed(2)); // Set the weighted average, rounded to 2 decimal places

  }, [data]);

  // Chart options with annotation
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y} students`;
            }
            return label;
          },
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yMin: 0, 
            yMax: 100, 
            xMin: percentile, 
            xMax: percentile,
            borderColor: "gray", 
            borderWidth: 1,
            label: {
              enabled: true,
              content: "Your Percentile",
              position: "start",
              backgroundColor: "rgba(255, 255, 255, 0.8)", 
              color: "black",
              font: {
                size: 10, 
              },
              padding: 4, 
              xAdjust: -10, 
              yAdjust: -20, 
            },
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        min: 0,
        max: 100,
        ticks: {
          callback: (value) => value + "%",
        },
      },
    },
  };

  return (
    <div className=" bg-white shadow-md rounded-md m-2 p-4 border border-slate-200 ">
      <h2 className="text-lg font-bold mb-4">Comparison Graph</h2>
      <div className="mb-4 p-3">
        <p className="text-l font-medium text-slate-600">
          <strong>You scored {percentile}% percentile</strong> which is{" "}
          {percentile < weightedAverage ? "lower" : "higher"} than the average
          percentile&nbsp;
          {weightedAverage}% of all the engineers who took this assessment.
        </p>
      </div>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ComparisonGraph;
