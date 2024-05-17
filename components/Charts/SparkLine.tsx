import React from "react";

import { Sparklines } from "react-sparklines";

interface SparklineAreaDataItem {
  x: number;
  yval: number;
}

interface SparkLineProps {
  id: string;
  height: string;
  width: string;
  color?: string;
  data?: SparklineAreaDataItem[];
  type?: string;
  currentColor?: string;
  fill?: string;
  valueType?: string;
  lineWidth?: number;

  children?: React.ReactNode;
}

const SparkLineComponent = ({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
  fill,
  valueType,
  lineWidth,
  children,
}: SparkLineProps) => {
  const numericHeight = parseInt(height);
  const numericWidth = parseInt(width);

  return (
    <Sparklines
      data={[5, 10, 5, 20, 8, 15]}
      limit={5}
      width={100}
      height={20}
      margin={5}
    >
      SparkLine
    </Sparklines>
  );
};

export default SparkLineComponent;
