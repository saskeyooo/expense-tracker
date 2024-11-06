import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);
export const DoughnutChart = () => {
  const data = {
  
    datasets: [
      {
        label: "My First Dataset",
        data: [5000000, 5000000, 5000000, 5000000, 5000000],
        backgroundColor: [
          "#E74694",
          "#1C64F2",
          "#F2901C",
          "#16BDCA",
          "#FDBA8C",
        ],

        hoverOffset: 4,
      },
    ],
    labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],

  };

  return (
    <div className="flex flex-col w-[588px] h-[284px] rounded-xl bg-white">
      <div className="flex justify-between px-6 py-4 items-center border-b-2 border-b-[#E2E8F0]">
        <p className="text-[16px] font-extrabold text-black">Income-expense</p>
        <p className="text-[#6B7280] text-[16px] font-[400] leading-6">
          Jun 1 - Nov 30
        </p>
      </div>
      <div className="flex flex-row gap-10 w-[580px] h-[220px] px-3 py-2 justify-around">
      <Doughnut className="w-[156px] h-[156px] flex" data={data} />
      <div className="flex flex-col text-[14px] text-black justify-around">
        <p>5’000’000₮</p>
        <p>5’000’000₮</p>
        <p>5’000’000₮</p>
        <p>5’000’000₮</p>
        <p>5’000’000₮</p>
      </div>
      <div className="flex flex-col text-[14px] text-black justify-around">
        <p>15.50%</p>
        <p>15.50%</p>
        <p>15.50%</p>
        <p>15.50%</p>
        <p>15.50%</p>
      </div>
      </div>
      
      
    </div>
  );
};