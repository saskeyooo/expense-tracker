"use client"

import { GeldLogo1 } from "@/svg/LogoIcon";
import Link from "next/link";

export const Header=()=>{
    return(
       <div className="w-screen flex justify-between py-[16px] px-[120px] items-center bg-white text-black">
        <div className="flex gap-6">
            <GeldLogo1/>
             <Link 
             href="/dashboard"
             className={`text-6 leading-4 flex items-center `}
             > Dashbaordd</Link>

            <Link
            href=""
            className={`text-6 leading-4 flex items-center 
            records ? "font-[600]" : "font-[400]"
            `}
            >Records </Link>  
        </div>
        <div className="flex items-center gap-6">
            <p className="rounded-[30px] border text-white border-[#F3F4F6] py-1 px-3 items-center bg-[#0166FF]">
                + Record
            </p>
        </div>
       </div>
    );
};