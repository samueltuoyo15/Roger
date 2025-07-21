import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("chats", "./routes/chats.tsx"),
    route("chats/chat/:id", "./routes/chat.tsx")
] satisfies RouteConfig;
