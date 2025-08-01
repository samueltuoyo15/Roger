  export const users = [
    { img: "/user1.png", username: "Swag"},
    { img: "/user2.png", username: "David"},
    { img: "/user3.png", username: "Kingsley"},
    { img: "/user4.png", username: "James"},
    { img: "/user5.png", username: "Paul"},
    { img: "/user6.png", username: "Billy"}
  ]

 export const chatContainers = [
    { img: "/user1.png", username: "Swag"},
    { img: "/user2.png", username: "David"},
    { img: "/user3.png", username: "Kingsley"},
    { img: "/user4.png", username: "James"},
    { img: "/user5.png", username: "Paul"},
    { img: "/user6.png", username: "Billy"}
  ]

  export function CustomOnlineBadge({ className } : {className?: string}) {
    return (
       <div className={`${className}`}></div>
    )
  }