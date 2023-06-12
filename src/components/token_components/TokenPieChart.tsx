import React from "react";
// Chart Component
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
// ----------------------------------------------------------------------
ChartJS.register(ArcElement, Tooltip, Legend);

export const options: any = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom",
      labels: {
        // usePointStyle: true,

        font: {
          family: "sans-serif",
          size: 12,
        },
      },
    },
  },
};

export default function PieChart({ xLabels, values, color }: any) {
  const data = {
    labels: xLabels,
    datasets: [
      {
        label: "# of Votes",
        data: values,
        backgroundColor: color,
        borderColor: ["rgb(240,240,240)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} options={options} />;
}
