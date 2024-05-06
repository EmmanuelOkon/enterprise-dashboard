import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

interface SparkLineProps {
  id: number;
  height: string;
  width: string;
  color?: string;
  data?: string;
  type?: string;
  currentColor?: string;
  fill?: string;
  valueType?: string;
  lineWidth?: number;

  children?: React.ReactNode;
}

const SparkLine = ({
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
  return (
    <SparkLine
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
    >
      SparkLine
    </SparkLine>
  );
};

export default SparkLine;
