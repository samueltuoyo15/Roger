import { MoreHorizontal, Phone, Video } from "lucide-react"
import { users, chatContainers, CustomOnlineBadge } from "../chats/utils/utils"

export default function Chat(){
    return (
        <section className="p-4">
         <header className="flex justify-between items-center">
                    
        <div className="flex items-center relative">
          <img src={chatContainers[0].img} alt="user dp" className="mr-5 float-left rounded-[78px] w-[58px] h-[58px]"/>
         <CustomOnlineBadge className="absolute top-2 left-12 rounded-full bg-[#34E449] w-[12px] h-[12px]"/>
         <figure>
         <div className="flex flex-col">
          <figcaption className="text-[#E2E2E2] inline-flex font-[500] font-sans text-[16px]">
            {chatContainers[0].username} 
            </figcaption>
         
          <figcaption className="font-[500] font-sans text-[#34E449] text-[12px]">
            online
          </figcaption>
         </div>
         </figure>
      </div>

        <div className="flex items-center gap-8">
            <Phone />
            <Video />
            <MoreHorizontal />
        </div>

         </header>
        </section>
    )
}