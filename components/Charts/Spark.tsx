import { SparklineAreaData } from "@/utils/static";
import React, { useEffect, useState } from "react";
import { LineChart, Line, Tooltip } from "recharts";

export default function Spark() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted && (
        <LineChart width={350} height={200} data={SparklineAreaData}>
          <Tooltip />
          <Line dataKey="yval" stroke="blue" activeDot={{ r: 4 }} />
        </LineChart>
      )}
    </div>
  );
}