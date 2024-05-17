import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { MdOutlineSupervisorAccount } from "react-icons/md";

interface earningData {
  icon: React.ReactNode;
  amount: string;
  percentage: string;
  title: string;
  iconColor: string;
  iconBg: string;
  pcColor: string;
}

export const earningData: earningData[] = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "#FFF4E5",
    iconBg: "#FEC90F",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "#E46A76",
    iconBg: "#FFF4E5",
    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "#00C292",
    iconBg: "#EBFAF2",
    pcColor: "red-600",
  },
];
