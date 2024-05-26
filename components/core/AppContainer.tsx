import { cn } from "@/lib/utils";
import { FC } from "react";

type AppContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const AppContainer: FC<AppContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("mt-8 px-5 py-4", className)}>
      {children}
    </div>
  );
};
