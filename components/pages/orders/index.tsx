import React from "react";
import { AppContainer } from "@/components/core/AppContainer";
import Header from "@/components/core/Header";

type Props = {};

const Page = (props: Props) => {
  return (
    <AppContainer className="flex w-full items-start bg-lime-700 text-black">
      <Header />
      <p>hll</p>
    </AppContainer>
  );
};

export default Page;
