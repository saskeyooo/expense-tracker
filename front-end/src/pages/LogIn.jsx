"use client";

import { GeldLogo} from "@/svg/LogoIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const LogIn =()=>{
  const router =useRouter();
  const [errorMessage, setErrorMessage]=useState("");
  useEffect(()=>{
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn){
        toast.succes("Амжилттай нэвтэрлээ!");
        router.push("/dashboard");
    } 
 }, [router])
 return(
    <div className="w-full h-screen flex text-black">
      <div className="w-[50%] h-full flex justify-center items-center bg-white">
        <div className="w-[382px] flex flex-col items-center justify-center gap-[40px] ">
            <GeldLogo/>
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-[24px] leading-[32px] font-[600]">
                    Welcome back
                </h1>
                <p className="text=[16px] leading-[24px] font-400 ">
                    Welcome back, Please enter your details
                </p>
            </div>
            <form 
            //  onSubmit={formik.handleSubmit}
            className="w-full flex flex-col gap-[16px]">
                <input 
                type="email"
                name="email"
                className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
                placeholder="И-мэйл хаяг"
                // onChange={formik.handleChange}
                        // value={formik.values.email}
                />

                <input 
                type="password"
                name="password"
                className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6] "
                placeholder="Нууц үг"
                // onChange={formik.handleChange}
                 // value={formik.values.email}
               />

               <button
               type="submit"
               className="rounded-[20px] border text-white border-[#D1D5DB] px-[16px] py-[12px] bg-[#0166FF]"
               > Нэвтрэх</button>
            </form>
            <div className="flex gap-[8px]">
                 <p className="text-[16px] leading-[24px] font-[400]">
                 Бүртгэлгтэй хаяг байхгүй юу?
                 </p>
                 <Link href="/sign-up">
                 <button className="text-[16px] leading-[24px] font-[400] text-[#0166FF]">
                 Бүртгүүлэх
                 </button>
                 </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full bg-[#0166FF]"></div>
    </div>
 )
};