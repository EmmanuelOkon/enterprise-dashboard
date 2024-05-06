import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown, MdOutlineCancel } from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// import avatar from "";
import { Btn, Cart, Chat, Notification, UserProfile } from "./";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
// import { useStateContext } from "../contexts/ContextProvider";

interface NavButtonProps {
  title: string;
  customFunc: () => void;
  icon: React.ReactNode;
  color: string;
  dotColor: string;
}

const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
}: NavButtonProps) => (
  <>
    {/* <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent> */}
    <TooltipProvider>
      <Tooltip>
        <button
          type="button"
          onClick={() => customFunc()}
          style={{ color }}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
          <span
            style={{ background: dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
          />
          {icon}
        </button>
        <TooltipContent>
          <p>User profile</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </>
);

const Navbar = () => {
  // const {
  //   activeMenu,
  //   setActiveMenu,
  //   isClicked,
  //   setIsClicked,
  //   handleClick,
  //   screenSize,
  //   setScreenSize,
  // } = useStateContext();

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   if (screenSize <= 900) {
  //     setActiveMenu(false);
  //   } else {
  //     setActiveMenu(true);
  //   }
  // }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:ml6 md:mr6 relative">
      <NavButton
        title="Menu"
        // customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        customFunc={() => {}}
        // color={currentColor}
        icon={<AiOutlineMenu />}
        color=""
        dotColor=""
      />
      <div className="flex">
        <NavButton
          title="Cart"
          // customFunc={() => handleClick("cart")}
          customFunc={() => {}}
          // color={currentColor}
          icon={<FiShoppingCart />}
          color=""
          dotColor=""
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          // customFunc={() => handleClick("chat")}
          customFunc={() => {}}
          // color={currentColor}
          icon={<BsChatLeft />}
          color=""
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          // customFunc={() => handleClick("notification")}
          customFunc={() => {}}
          // color={currentColor}
          icon={<RiNotification3Line />}
          color=""
        />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                // onClick={() => handleClick("userProfile")}
              >
                <Image
                  className="rounded-full w-8 h-8"
                  src="/images/avatar.jpg"
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

        {/* <TooltipComponent content="User profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            // onClick={() => handleClick("userProfile")}
          >
            <Image
              className="rounded-full w-8 h-8"
              src="/images/avatar.jpg"
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
        </TooltipComponent> */}

        {/* {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} */}
      </div>
    </div>
  );
};

export default Navbar;
