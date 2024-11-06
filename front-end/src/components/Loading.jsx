import { GeldLogo, LoadingLogo } from "@/svg/LogoIcon";

export const Loading =()=>{

    return(
        <div className="h-screen w-screen flex text-black">
        <GeldLogo/>
        <div className="flex flex-col gap-4 justify-center items-center">
        <LoadingLogo/>
        <p className="text-[16px]">Түр хүлээнэ үү...</p>
        </div> 

        </div>
    )
};