"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FiSettings } from "react-icons/fi";
import { Button } from "@/components/ui/button";

type Props = {};

const POSTS = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
];

const fetchPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(POSTS);
    }, 1000);
  });
};

const Home = (props: Props) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const currentColor = "#00FFFF";

  return (
    <div>
      <div className="flex relative darkMode:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
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
          {/* <Tooltip content="Settings" position="Top">
            <Button
              type="button"
            //   onClick={() => setThemeSettings(true)}
            //   style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </Button>
          </Tooltip> */}
        </div>
      </div>
      <ul>
        {(data as any[]).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
