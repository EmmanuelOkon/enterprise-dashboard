"use client";

import { AppContainer } from "@/components/core/AppContainer";
import Header from "@/components/core/Header";

import { columns } from "./columns";
import { DataTable } from "./dataTable";
import { ordersData } from "@/components/data/orders/ordersData";

type Props = {};

const Page: React.FC<Props> = (props) => {
  return (
    <AppContainer className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <DataTable columns={columns} data={ordersData} />
    </AppContainer>
  );
};

export default Page;
