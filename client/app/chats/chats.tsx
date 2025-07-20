
import { users, chatContainers, CustomOnlineBadge } from "./utils/utils"

export function Chats() {

  return (
    <main className="p-4">
      <section className="flex items-center gap-5 overflow-x-auto scrollbar-hide">
        {users.map((user) => (
        <figure aria-labelledby={`caption-${user.username}`} key={user.username} className="min-w-[72px] flex-shrink-0 text-center">
        <img src={user.img} alt="user dp" className="mb-2 rounded-[78px] w-[58px] h-[58px]" />
        <CustomOnlineBadge />
        <figcaption className="font-[500] font-sans text-center text-[16px]">{user.username}</figcaption>
      </figure>
      ))}
      </section>
      <ChatsContainer />
    </main>
  )
}

export function ChatsContainer(){
  return (
    <main className="mt-10">
    <section className="flex flex-col items-center gap-7">
      {chatContainers.map((chat) => (
        <figure aria-labelledby={`caption-${chat.username}`} key={chat.username} className="w-full flex justify-between items-center">
          
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