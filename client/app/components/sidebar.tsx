import { Home, MessageCircle, CircleUserRound, X } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"

export default function SideBar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }){
 return(
    <aside className={`bg-[#12171D] z-50 fixed h-full w-[248px] p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <X onClick={() => setIsOpen(!isOpen)} className="mb-10 cursor-pointer" size={40}/>
        
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