"use client";

import { GeldLogo } from "@/svg/LogoIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export const SignUp =
()=>{
    const router = useRouter();
    const [errorMessage, setErrorMessage]=useState("");
    useEffect(()=>{
        const isRegistered = localStorage.getItem("isRegistered");
        if (isRegistered){
            toast.succes("Registered succesfully");
            router.push("/LogIn");
        }
    }, [router])

    return(
        <div className="w-screen h-screen flex text-black" >
            <div className="w-[50%] h-full flex justify-center items-center bg-white">
                <div className="w-[382px] flex flex-col items-center justify-center  gap-[40px] ">
                    <GeldLogo/>
                    <div className="flex flex-col gap-2 items-center">
                        <h1 className="text-[24px] leading-[32px] font-[600] ">
                            Greate Geld account
                        </h1>
                        <p className="text-[16px] leading-[24px] font-[400] ">
                        Sign up below to create your Wallet account
                        </p>
                    </div>
                    <form 
                    // onSubmit={formik.handleSubmit}
                    className="w-full flex flex-col gap-[16px]">

                        
                        <input
                        type="text"
                        name="name"
                        className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
                        placeholder="Нэр"
                        // onChange={formik.handleChange}
                        // value={formik.values.name}
                        />
        
                        <input 
                        name="mail"
                        className="rounded-lg border border-[#D1D55DB] px-[16px] py-[12px] bg-[#F3F4F6]"
                        placeholder="И-мэйл хаяг"
                        type="email"
                        // onChange={formik.handleSubmit}
                        // value={formik.values.email}
                        />
        
                        <input 
                        name="password"
                        className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
                        placeholder="Нууц үг"
                        // onChange={formik.handleChange}
                        // value={formik.values.email}
                        type="password" />

                        <input
                        name="password"
                        className="rounded-lg border border-[#D1D5DB] px-[16px] py-[12px] bg-[#F3F4F6]"
                        placeholder="Нууц үг давтах"
                        type="password"
                        // onChange={formik.handleChange}
                        // value={formik.values.pass}
                        />
        
                        <button
                        type="submit"
                        className="rounded-[20px] border text-white border-[#F3F4F6] px-[16px] py-[12px] bg-[#0166FF]">
                        Бүртгүүлэх</button>
                    </form>
                    <div className="flex gap-[8px]">
                        <p className="text-[16px] leading-[24px] font-[400]">
                            Бүртгэлтэй хаяг байгаа юу?
                        </p>
                        <Link href="/log-in"> 
                        <button className="text-[16px] leading-[24px] font-[400] text-[#0166FF]">Нэвтрэх</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-full bg-[#0166FF]"></div>
        </div>
        );
 
};
 
