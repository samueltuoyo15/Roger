import type { Route } from "./+types/home";
import { Chats } from "../chats/chats";
import Header from "~/components/header"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Roger - Chat Application" },
    { name: "description", content: "Full Stack Chat Application" },
  ];
}

export default function Home() {
  return(
    <>
      <Header />
      <Chats />
    </>
  )
}
