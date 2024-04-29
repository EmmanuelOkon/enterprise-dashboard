import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["user"],
    queryFn: async () => await .(),
  });
  return <div>layout</div>;
};

export default Layout;
