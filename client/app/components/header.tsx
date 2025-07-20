import { Menu, CirclePlus} from "lucide-react"
export default function Header(){
    return (
        <header className="font-[500] font-sans  p-4 w-full">
            <div className="flex justify-between items-center">
                <img src="/logo.png" alt="logo" className="w-[23.56px] h-[32px]" />
                <Menu className="text-6xl"/>
            </div>

            <div className="mt-8 flex justify-between items-center">
                <h2>Chats</h2>
                <CirclePlus className="text-5xl"/>
            </div>

            <input 
             type="search"
             placeholder="Search"
             className="mt-5 p-2 text-[#B6B6B6] font-sans font-[400] bg-[#1E2126] w-full rounded-[8px] gap-[10px] h-[40px]"
             />
        </header>
    )
}