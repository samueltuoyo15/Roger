import { Mic, Smile, ImagePlus, MoreHorizontal, Phone, Send, Video } from "lucide-react"
import { users, chatContainers, CustomOnlineBadge } from "../chats/utils/utils"
import { useRef, useEffect } from "react"

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
            <Phone className="cursor-pointer"/>
            <Video className="cursor-pointer"/>
            <MoreHorizontal className="cursor-pointer"/>
        </div>

         </header>

         <ChatContainer />
         <SendMessageArea />
        </section>
    )
}

export function ChatContainer(){
    return (
       <section className="mt-14">
         <div className="mb-5">
            <img src={chatContainers[0].img} alt="user dp" className="mr-5 float-left rounded-[78px] w-[58px] h-[58px]"/>
            <p className="p-2 inline-flex w-[242px] font-sans font-[500] rounded-[8px] h-auto text-[12px] text-[#ffffff] bg-[#12171D]">Hi User G, I noticed you mentioned needing someone to walk your dog. I love dogs and can help with that. Let's coordinate a time to meet your furry friend.</p>
        </div>
         <div>
            <img src={chatContainers[0].img} alt="user dp" className="mr-5 float-left rounded-[78px] w-[58px] h-[58px]"/>
            <p className="p-2 inline-flex w-[242px] font-sans font-[500] rounded-[8px] h-auto text-[12px] text-[#ffffff] bg-[#12171D]">Consider this feature for the next subsequent updates</p>
        </div>
         
         {/* other user - you */}
         <div className="float-right mb-20">
            <div className="mt-7 mb-5">
                <p className="p-2 inline-flex w-[242px] font-sans font-[500] rounded-[8px] h-auto text-[12px] text-[#ffffff] bg-[#12171D]">Hey there! I've been feeling quite overwhelmed lately with work and personal commitments. Do you have any advice on how to manage stress and find a better work-life balance?</p>
            </div>

            <div>
                <p className="p-2 inline-flex w-[242px] font-sans font-[500] rounded-[8px] h-auto text-[12px] text-[#ffffff] bg-[#12171D]">Consider this feature for the next subsequent updates</p>
            </div>
        </div>
       </section>
    )
}


export function SendMessageArea(){
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }, [])
    return (
        <div className="bg-[#12171D] h-[50px] max-w-screen-md mx-auto left-4 right-4 rounded-[8px] fixed bottom-1 p-0">
          <div className="relative">
            <Mic className="cursor-pointer absolute bottom-1 left-2"/>
           <input 
           type="text" 
           autoFocus
           ref={inputRef}
           className="bg-transparent focus:outline-none focus:ring-0 focus:border-transparent p-3 pl-10 text-2xl rounded-[8px] w-full h-full font-[500] text-[#A4A2A2] font-sans text-[12px]"
           placeholder="Send a message..."
           />
            <ImagePlus className="mr-8 cursor-pointer absolute bottom-1 right-2"/>
            <Smile className="mr-17 cursor-pointer absolute bottom-1 right-2"/>
            <Send className="cursor-pointer absolute bottom-1 right-2"/>
          </div>
        </div>
    )
}