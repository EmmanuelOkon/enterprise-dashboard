import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart, FiStar } from "react-icons/fi";

interface weeklyStatsProps {
  icon: React.ReactNode;
  amount: string;
  title: string;
  description: string;
  iconBg: string;
  pcColor: string;
}

export const weeklyStats: weeklyStatsProps[] = [
  {
    icon: <FiShoppingCart />,
    amount: "-$560",
    title: "Top Sales",
    description: "Johnathan Doe",
    iconBg: "#FB9678",
    pcColor: "red-600",
  },
  {
    icon: <FiStar />,
    amount: "-$560",
    title: "Best Seller",
    description: "MaterialPro Admin",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "red-600",
  },
  {
    icon: <BsChatLeft />,
    amount: "+$560",
    title: "Most Commented",
    description: "Ample Admin",
    iconBg: "#00C292",
    pcColor: "green-600",
  },
];
