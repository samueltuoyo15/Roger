import type { Route } from "./+types/chats";
import { Chats } from "../chats/chats";
import Header from "~/components/header"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Roger - Chat Application" },
    { name: "description", content: "Full Stack Chat Application" },
  ];
}

export default function ChatsField() {
  return(
    <>
      <Header />
      <section className="md:ml-34">
      <Chats />
      </section>
    </>
  )
}
