import React from "react";
import { AppContainer } from "@/components/core/AppContainer";

import { BsCurrencyDollar } from "react-icons/bs";
// import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";

type Props = {};

const Page = (props: Props) => {
  return (
    <AppContainer className="flex w-full items-start bg-lime-700 mt-12 ">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <h1>Employees Page</h1>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default Page;
