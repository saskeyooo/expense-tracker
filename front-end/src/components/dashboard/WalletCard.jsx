import { GeldLogo, GeldLogo2 } from "@/svg/LogoIcon";
import { Wires } from "@/svg/Wires";

export const WalletCard =()=>{
    return(
        <div className="flex flex-col justify-between w-[384px] h-[216px] rounded-[18px] bg-[#0166FF] p-7">
        <GeldLogo2/>
        <div className="flex flex-col">
            <p className="opacity-50">Cash</p>
            <div className="flex flex-row justify-between">
            <p className="text-[24px] font-extrabold">10,000,000</p>
            <Wires/>
            </div>
        </div>
     </div> 
    );
};