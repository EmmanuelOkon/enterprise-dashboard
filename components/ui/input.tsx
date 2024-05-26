// import * as React from "react"

// import { cn } from "@/lib/utils"

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Input.displayName = "Input"

// export { Input }

import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startContent?: React.ReactElement;
  endContent?: React.ReactElement;
  startContentAction?: () => void;
  endContentAction?: () => void;
  error?: boolean;
}

const startIconPadding = "pl-4"; // Default padding when only StartIcon is present
const endIconPadding = "sm:pr-4"; // Additional padding when only EndIcon is present
const bothIconsPadding = "pl-10 pr-10"; // Padding when both StartIcon and EndIcon are present

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startContent, endContent, error, ...props }, ref) => {
    const combinedPadding =
      startContent && endContent
        ? bothIconsPadding
        : startContent
        ? startIconPadding
        : endContent
        ? endIconPadding
        : "";
    return (
      <div
        className={cn(
          "flex h-max w-full items-center rounded-xl border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grayscale-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-base  focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          combinedPadding,
          {
            " border-red-600 bg-white focus-visible:ring-red-500": error,
          }
        )}
      >
        {startContent}
        <input
          type={type}
          className="h-full w-full flex-grow rounded-xl px-5 py-4 focus-within:outline-none focus-within:ring-transparent"
          ref={ref}
          {...props}
        />
        {endContent}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };


