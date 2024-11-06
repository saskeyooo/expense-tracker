"use client"

import { BarChart } from "@/components/dashboard/BarChart";
import { DoughnutChart } from "@/components/dashboard/DoughtnutChart";
import { IncomeCard } from "@/components/dashboard/IncomeCard";
import { TotalCard } from "@/components/dashboard/TotalCard";
import { WalletCard } from "@/components/dashboard/WalletCard";
import { Header } from "@/components/Header";
 

export const Dashboard =()=>{
     

    return(
      <div className="w-full h-auto flex flex-col justify-center items-center bg-[#F3F4F6] gap-8 ">
       <Header/>
       <div className="flex flex-col w-[1200px] justify-center items-center  bg-[#F3F4F6] gap-[24px]">
       <div className="flex flex-row w-[1200px] bg-[#F3F4F6] justify-between">
          <WalletCard/>
          <IncomeCard/>
          <TotalCard/>
        </div>
        <div className="flex flex-row w-[1200px] bg-[#F3F4F6] justify-between">
          <BarChart/>
          <DoughnutChart/>
        </div>
       </div>  
      </div>
    );
};