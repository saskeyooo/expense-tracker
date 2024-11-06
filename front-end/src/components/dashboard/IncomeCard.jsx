import { GreenArrow } from "@/svg/GreenArrow";

export const IncomeCard=()=>{
    return(
        <div className="flex flex-col w-[384px] h-[216px] rounded-[18px] border-1 bg-white border-[#E5E7EB]">
            <div className="h-[50px] border-b-2 border-b-[#E2E8F0] flex flex-row justify-start gap-2 items-center">
                <p className="rounded-2xl w-[8px] h-[8px] bg-[#84CC16]  ml-6"></p>
                <p className="text-[16px] font-extrabold text-[#0F172A]">Your Income</p>
            </div>
            <div className="flex flex-col gap-5 my-3 justify-center ml-6">
                <div className="flex flex-col">
                <p className="text-[36px] text-black font-extrabold">7,700,000$</p>
                <p className="text-[18px] text-[#64748B]">Your Income Amount</p>
            </div>
            <div className="flex flex-row gap-2">
                <GreenArrow/>
                <p className="text-[18px] text-black">32% from last month</p>
            </div>
            </div>
        </div>
    );
};