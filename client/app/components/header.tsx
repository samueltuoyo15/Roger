import { Menu } from "lucide-react"
import { Home, MessageCircle, CircleUserRound, X } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"
import { Link } from "react-router"

export default function Header(){
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(true)
    return (
        <>
        <header className="font-[500] md:fixed md:left-0 md:h-full md:w-34 font-sans p-4 w-full">
        {<SideBar isOpen={sideBarOpen} setIsOpen={setSideBarOpen}/>}
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src="/logo.png" alt="logo" className="hidden md:inline-block w-[23.56px] h-[32px] cursor-pointer" />
                </Link>
                <Menu onClick={() => setSideBarOpen(!sideBarOpen)} className="md:hidden text-6xl cursor-pointer"/>
            </div>
        </header>
        </>
    )
}


export  function SideBar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }){
 return(
    <aside className={`md:mt-16 bg-[black] md:bg-transparent z-50 md:absolute fixed md:h-auto h-full md-w-auto w-[248px] md:p-0 p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <X onClick={() => setIsOpen(!isOpen)} className="md:hidden mb-10 cursor-pointer" size={40}/>
        
        <div className="cursor-pointer flex mb-6 items-center gap-5">
            <Home /> <span className="font-[500] font-sans text-[12px]">Home</span>
        </div>
        <div className="cursor-pointer flex mb-6 items-center gap-5">
            <MessageCircle /> <span className="font-[500] font-sans text-[12px]">Messages</span>
        </div>
        <div className="cursor-pointer flex items-center gap-5">
            <CircleUserRound /> <span className="font-[500] font-sans text-[12px]">Profile</span>
        </div>
    </aside>
 )   
}