import { Header } from "@/components/Header";
import { AddRecords } from "@/components/records/AddRecords";
import { SearchBar } from "@/components/records/SearchBar";

export const Records =()=>{
    return(
     <div className="w-full h-auto flex flex-col justify-center items-center bg-[#F3F4F6]">
        <Header/>
        <div className="flex flex-row w-[1200px] justify-between items-center  bg-[#F3F4F6] mt-6">
         <div className="flex flex-col w-[282px] bg-white gap-[24px] h-[1200px] rounded-2xl border items-center py-[24px] px-[16px]  ">
            <AddRecords/>
            <SearchBar/>
         </div>
         <div className="flex flex-col w-[894px] bg-[#F3F4F6] border-1 border-black text-red-700">k</div>
        </div>
     </div>
    );
};