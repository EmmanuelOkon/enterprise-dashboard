import { FiShoppingBag, FiEdit, FiPieChart } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineCalendar,
  AiOutlineStock,
  AiOutlineAreaChart,
  AiOutlineBarChart,
} from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { BsKanban, BsBarChart } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { GiLouvrePyramid } from "react-icons/gi";
import { URLS } from "./urls";

export interface Route {
  title: string;
  links?: RouteLink[];
}

export interface RouteLink {
  name: string;
  icon?: React.ReactNode;
  href: string;
}

export const routes: Route[] = [
  {
    title: "Dashboard",
    links: [
      {
        name: "e-commerce",
        icon: <FiShoppingBag />,
        href: URLS.ECOMMERCE,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "orders",
        icon: <AiOutlineShoppingCart />,
        href: URLS.ORDERS,
      },
      {
        name: "employees",
        icon: <IoMdContacts />,
        href: URLS.EMPLOYEES,
      },
      {
        name: "customers",
        icon: <RiContactsLine />,
        href: URLS.CUSTOMERS,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
        href: URLS.CALENDAR,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
        href: URLS.KANBAN,
      },
      {
        name: "editor",
        icon: <FiEdit />,
        href: URLS.EDITOR,
      },
      {
        name: "color-picker",
        icon: <BiColorFill />,
        href: URLS.COLOR_PICKER,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
        href: URLS.LINE,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
        href: URLS.AREA,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
        href: URLS.BAR,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
        href: URLS.PIE,
      },
      {
        name: "financial",
        icon: <RiStockLine />,
        href: URLS.FINANCIAL,
      },
      {
        name: "color-mapping",
        icon: <BsBarChart />,
        href: URLS.COLOR_MAPPING,
      },
      {
        name: "pyramid",
        icon: <GiLouvrePyramid />,
        href: URLS.PYRAMID,
      },
      {
        name: "stacked",
        icon: <AiOutlineBarChart />,
        href: URLS.STACKED,
      },
    ],
  },
];
