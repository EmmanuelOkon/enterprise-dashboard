"use client";

import { Btn, Stacked } from "@/components/core";
import { AppContainer } from "@/components/core/AppContainer";
import { earningData } from "@/components/data/earningData";

import React from "react";
import { BsCurrencyDollar, BsDot } from "react-icons/bs";
import Spark from "@/components/Charts/Spark";

type Props = {};

const Page = (props: Props) => {
  return (
    <AppContainer >
      <div className="flex flex-wrap justify-between center gap-4 w-full ">
        <div className="bg-white block dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 lg:mx-4 mx[10px] bg-hero-pattern bg-no-repeat bg-cover bg-center ">
          <div className="w-full ">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">Earnings</p>
                <p className="text-2xl">$63,448.78</p>
              </div>
              <button
                type="button"
                // style={{ backgroundColor: currentColor }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <BsCurrencyDollar />
              </button>
            </div>

            <div className="mt-6">
              <Btn
                color="white"
                bgColor="blue"
                // bgColor={currentColor}
                text="Download"
                borderRadius="10px"
                size="md"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex p-4 mx4 mx[10px] flex-wrap justify-center lg:justify-between gap-4 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className={`bg-white h-44 max-[425px]:w-full dark:text-gray-200 dark:bg-secondary-dark-bg w-[40%] md:w-56 p-3 pt-9 rounded-xl hover:bg-purple500/80 hover:bg[#41edf9] hover:bg-${item.iconBg} transform ease-in-out duration-700 hover:cursor-pointer`}
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* revenue */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg my-4 mx-[16px] p-4 rounded-xl md:w780 w-full   ">
          <div className="flex justify-between">
            {" "}
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <BsDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <BsDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-4 justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5 flex bg-slate-100 w-1/2 md:w-full ">
                <Spark />
              </div>
              <div className="mt-10">
                <Btn
                  color="white"
                  bgColor="blue"
                  // bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            {/* here you go!! */}

            <div>
              <Stacked />
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default Page;
