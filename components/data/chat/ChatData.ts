import { StaticImageData } from "next/image";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";

interface ChatDataProps {
  image: StaticImageData;
  message: string;
  description: string;
  time: string;
}

export const chatData: ChatDataProps[] = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    description: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    description: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    description: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    description: "Assign her new tasks",
    time: "1:12 AM",
  },
];
