"use client";

import React from "react";
import { ReactQueryProvider } from "./reactQueryProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
