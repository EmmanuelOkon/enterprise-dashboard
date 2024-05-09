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

import { Navbar } from "@/components/core";

import useAppState from "@/store";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { activeMenu } = useAppState();
  const currentColor = "#00FFFF";

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
                  className="text-2xl text-white p-2.5 rounded-full h-10 w-10 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-100">
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
          <div className="fixe md: static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
