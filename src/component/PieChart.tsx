import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChart({ data_add, option }: any): JSX.Element {
  return (
    <>
      <Pie data={data_add} options={option} />
    </>
  );
}
