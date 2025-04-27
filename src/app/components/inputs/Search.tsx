import Image from "next/image";

export default function Search () {
    return(
        <div className="flex w-80 focus-within:border-b-1 focus-within:border-[#a09e9e]">
            <Image src="/icons/icon-pesquisa.svg" alt="Search Icon" width={24} height={24}/>
            <input 
            name="search"
            type="search"
            placeholder="Search..."
            className={`p-2 text-[#f5f1f1] flex-1 focus:outline-none`} 
        />
        </div>
    );
};