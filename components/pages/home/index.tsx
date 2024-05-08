"use client";

import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FiSettings } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/core/Sidebar";
import Link from "next/link";

import { Route, RouteLink, routes } from "@/utils/routes";
import { Navbar } from "@/components/core";

type Props = {};



const Home = (props: Props) => {


  const currentColor = "#00FFFF";

  const activeMenu = true;

  return (
    <div>
      <div className="flex relative darkMode:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  //   onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor }}
                  className="text-3xl text-white p-3 rounded-full h-12 w-12 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          } `}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
        </div>
        <div>
          {routes.map((route: Route) => {
            return (
              <div key={route.title}>
                <h3 className="uppercase">{route.title}</h3>
                {route.links?.map((link: RouteLink) => {
                  if (!link) {
                    return null;
                  }

                  return (
                    <Link key={link.name} href={link.href} className="flex items-center flex-shrink-0" >
                      {link.icon}
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>

      </div>
      {/* <ul>
        {(data as any[]).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
