
import { users, chatContainers, CustomOnlineBadge } from "./utils/utils"
import { useNavigate } from "react-router"
import { CirclePlus } from "lucide-react"

export function Chats() {
  return (
    <>
    <main className="p-4">
      <div className="mt-8 flex justify-between items-center">
        <h2 className="text-[24px] font-sans font-[500]">Chats</h2>
        <CirclePlus className="text-5xl"/>
      </div>

        <input 
             type="search"
             placeholder="Search"
             className="mb-10 p-2 text-[#B6B6B6] font-sans font-[400] bg-[#1E2126] w-full rounded-[8px] gap-[10px] h-[40px]"
       />
      <section className="flex items-center gap-5 overflow-x-auto scrollbar-hide">
        {users.map((user) => (
        <figure aria-labelledby={`caption-${user.username}`} key={user.username} className="cursor-pointer min-w-[72px] flex-shrink-0 text-center">
        <img src={user.img} alt="user dp" className="rounded-[78px] w-[58px] h-[58px]" />
        <CustomOnlineBadge className="relative bottom-14 left-11 rounded-full bg-[#34E449] w-[12px] h-[12px]"/>
        <figcaption className="font-[500] font-sans text-center text-[16px]">{user.username}</figcaption>
      </figure>
      ))}
      </section>
    </main>
    <ChatsContainer />
  </>
  )
}

export function ChatsContainer(){
  const navigate = useNavigate()
  return (
    <main className="p-4">
    <section className="flex flex-col items-center gap-7">
      {chatContainers.map((chat) => (
        <figure onClick={() => navigate("/chats/chat/1")}aria-labelledby={`caption-${chat.username}`} key={chat.username} className="cursor-pointer w-full flex justify-between items-center">
          
        <div className="flex items-center">
          <img src={chat.img} alt="user dp" className="mr-2 float-left rounded-[78px] w-[58px] h-[58px]"/>
         
         <div className="flex flex-col">
          <figcaption className="text-[#E2E2E2] inline-flex font-[500] font-sans text-[16px]">
            {chat.username} 
            </figcaption>
         
          <figcaption className="text-[#8C8A8A] font-[400] font-sans text-[12px]">
            What's for breakfast?
          </figcaption>
         </div>
         </div>

         <div className="text-[#8C8A8A] font-[500] text-[12px]">
          15:23
         </div>
      </figure>
      ))}
      </section>
    </main>
  )
}