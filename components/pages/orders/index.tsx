import React from "react";
import { AppContainer } from "@/components/core/AppContainer";
import Header from "@/components/core/Header";

import { Payment, columns } from "./columns";
import { DataTable } from "./dataTable";

type Props = {};

const Page: React.FC<Props> = (props) => {
  const data: Payment[] = []; // Define your data here

  return (
    <AppContainer className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <DataTable columns={columns} data={data} />
    </AppContainer>
  );
};

export default Page;
