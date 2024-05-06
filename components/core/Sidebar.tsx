import React from "react";
import Link from "next/link";

import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

import { Route, RouteLink, routes } from "@/utils/routes";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  // const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const activeMenu = true;

  // const handleCloseSideBar = () => {
  //   if (activeMenu && screenSize <= 900) {
  //     setActiveMenu(false);
  //   }
  // };

  const pathname = usePathname();


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
              <TooltipTrigger asChild>
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
            <div className="pb-10">
              {routes.map((route: Route) => {
                return (
                  <div key={route.title}>
                    <h3 className="text-gray-400 dark:text-gray-400 m-3 my-4 uppercase">
                      {route.title}
                    </h3>
                    {route.links?.map((link: RouteLink) => {
                      if (!link) {
                        return null;
                      }
                      const activePage = pathname === link.href;

                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          // onClick={handleCloseSideBar}
                          className={`flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-md text-md text-gray-700 m-2 ${
                            activePage
                              ? "bg-red-800 text-white"
                              : "dark:text-gray-200 dark:hover:text-black hover:bg-light-gray"
                          } `}
                        >
                          {link.icon}
                          <span className="capitalize">{link.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
