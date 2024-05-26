"use client";

import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown, MdOutlineCancel } from "react-icons/md";
import useAppState from "@/store";

import avatar from "../../public/images/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "./";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { SiShopware } from "react-icons/si";
import { URLS } from "@/utils/urls";

interface NavButtonProps {
  title: string;
  customFunc: () => void;
  icon: React.ReactNode;
  color: string;
  dotColor: string;
  onClick?: () => void;
}

const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
  onClick,
}: NavButtonProps) => (
  <>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray outline-0 "
            data-state=""
            // data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
          >
            <span
              style={{ background: dotColor }}
              className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            {icon}
          </button>
        </TooltipTrigger>
        <TooltipContent className="bg-slate-100">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
  } = useAppState();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const slideBar = "transform translate-x64 md:translate-x72 bg-red-500";

  //  ${
  //        activeMenu
  //          ? "transform translate-x-64 md:translate-x-72 w-full translate-x0 bg-red-500"
  //          : "direction-alternate-reverse translate-x-0 bg-yellow-500"
  //      }

  return (
    <div
      className={`flex justify-between p-2 md:px-6 bg-white shadow-sm relative transition-transform duration-1000 ease-in-out 
      `}
    >
      <div className="flex items-center gap-3">
        {!activeMenu && (
          <div className="w-full sticky  ">
            <Link
              href={URLS.HOME}
              className="items-center py-2 flex text-2xl dark:text-white text-slate-900"
            >
              <SiShopware />
            </Link>
          </div>
        )}
        <NavButton
          title="Toggle menu"
          // customFunc={() => {
          //   ` ${
          //     activeMenu
          //       ? "transform translate-x-64 md:translate-x-72 w-full translate-x0 bg-red-500"
          //       : "direction-alternate-reverse translate-x-0 bg-yellow-500"
          //   }`;
          // }}
          customFunc={() => setActiveMenu(!activeMenu)}
          icon={<AiOutlineMenu />}
          color=""
          dotColor=""
        />
      </div>

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => setIsClicked({ cart: !isClicked.cart })}
          // color={currentColor}
          icon={<FiShoppingCart />}
          color=""
          dotColor=""
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => setIsClicked({ chat: !isClicked.chat })}
          // color={currentColor}
          icon={<BsChatLeft />}
          color=""
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() =>
            setIsClicked({ notification: !isClicked.notification })
          }
          // color={currentColor}
          icon={<RiNotification3Line />}
          color=""
        />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                onClick={() =>
                  setIsClicked({ userProfile: !isClicked.userProfile })
                }
              >
                <Image
                  className="rounded-full w-8 h-8"
                  src={avatar}
                  alt="user-profile"
                  width={40}
                  height={40}
                />
                <p>
                  <span className="text-gray-400 text-14">Hi,</span>{" "}
                  <span className="text-gray-400 font-semibold ml-1 text-14">
                    Michael
                  </span>
                </p>
                <MdKeyboardArrowDown className="text-gray-400 text-14" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-slate-100">
              <p>User profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
