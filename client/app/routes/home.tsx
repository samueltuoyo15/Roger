import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Roger - Chat Application" },
    { name: "description", content: "Full Stack Chat Application" },
  ];
}

export default function ChatsField() {
  return(
    <>
      <section>Home Page</section>
    </>
  )
}
