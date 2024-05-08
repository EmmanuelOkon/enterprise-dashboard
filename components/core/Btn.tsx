import React from "react";
import { Button } from "@/components/ui/button";

export interface ButtonProps {
  bgColor?: string;
  color: string;
  text?: string;
  size?: string;
  borderRadius: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  bgHoverColor?: string;
  width?: string;
}

const Btn = ({
  bgColor,
  color,
  text,
  size,
  borderRadius,
  onClick,
  icon,
  bgHoverColor,
  width,
}: ButtonProps) => {
  return (
    <Button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl `}
    >
      {text}
    </Button>
  );
};

export default Btn;
