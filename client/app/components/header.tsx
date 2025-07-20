import { Menu, CirclePlus } from "lucide-react"
import SideBar from "./sidebar"
import { useState } from "react"
import { Link } from "react-router"

export default function Header(){
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)
    return (
        <>
        {<SideBar isOpen={sideBarOpen} setIsOpen={setSideBarOpen}/>}
        <header className="bg-[#12171D] font-[500] font-sans  p-4 w-full">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src="/logo.png" alt="logo" className="w-[23.56px] h-[32px] cursor-pointer" />
                </Link>
                <Menu onClick={() => setSideBarOpen(!sideBarOpen)} className="text-6xl cursor-pointer"/>
            </div>

            <div className="mt-8 flex justify-between items-center">
                <h2 className="text-[24px] font-sans font-[500]">Chats</h2>
                <CirclePlus className="text-5xl"/>
            </div>

            <input 
             type="search"
             placeholder="Search"
             className="shadow-mt-5 p-2 text-[#B6B6B6] font-sans font-[400] bg-[#1E2126] w-full rounded-[8px] gap-[10px] h-[40px]"
             />
        </header>
        </>
    )
}