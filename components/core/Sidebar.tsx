import React from "react";
// import { Link, NavLink } from "react-router-dom";

import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Link from "next/link";

// import { links } from "../data/dummy";
import { routes } from "@/utils/routes";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

// import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  // const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const activeMenu = true;

  // const handleCloseSideBar = () => {
  //   if (activeMenu && screenSize <= 900) {
  //     setActiveMenu(false);
  //   }
  // };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-md text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-md text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="flex justify-between items-center">
          <div className="w-full sticky ">
            <Link
              href="/"
              // onClick={handleCloseSideBar}
              className="items-center gap-3 py-2 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild >
                <Button
                  type="button"
                  // onClick={() => setActiveMenu(!activeMenu)}
                  style={{ color: "blue" }}
                  className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                >
                  <MdOutlineCancel />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Menu</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
          <>
            <div className="mt-  ">
              {routes.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {/* {item.links.map((link) => (
                    <Link
                      href={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? "blue" : "",
                      })}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </Link>
                  ))} */}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
