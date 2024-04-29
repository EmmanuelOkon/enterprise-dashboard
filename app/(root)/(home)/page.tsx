import Home from "@/components/pages/home";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const HomePage = (props: Props) => {
  return <div>
    <Home />
  </div>;
};

export default HomePage;
