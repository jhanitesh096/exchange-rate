import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useState, useEffect } from "react";
import style from "./home.module.css";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);
function CompareGraph() {
  const [chartData, setChartData] = useState(null);
  const { exchangeRates } = useSelector((state) => state?.allExchangeList);

  useEffect(() => {
    let data = {
      labels: Object.keys(exchangeRates).slice(0,10),
      datasets: [
        {
          label: "rates",
          data: Object.values(exchangeRates).slice(0,10),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    console.log(data);
    setChartData(data);
  }, [exchangeRates]);
  return (
    <div className={style.wrap}>
      <div className={style.chart}>
        {chartData ? <Pie data={chartData} /> : null}
      </div>
    </div>
  );
}

export default CompareGraph;
