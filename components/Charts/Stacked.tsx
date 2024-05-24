import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import StackedLengend from "./StackedLengend";
import { combinedData } from "../data/customers/StackedChartsData";
// {combinedData}

const Stacked = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showBudget, setShowBudget] = useState(true);
  const [showExpense, setShowExpense] = useState(true);

  const toggleBudget = () => setShowBudget(!showBudget);
  const toggleExpense = () => setShowExpense(!showExpense);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted && (
        <div className="text-center">
          <BarChart
            id="stack chart"
            width={500}
            height={400}
            data={combinedData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barGap={4}
            barCategoryGap={6}
          >
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 150, backgroundColor: "#ccc" }} />

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            {showBudget && <Bar dataKey="budget" stackId="a" fill="#8884d8" />}
            {showExpense && (
              <Bar dataKey="expense" stackId="a" fill="#82ca9d" />
            )}
          </BarChart>
          <StackedLengend
            toggleBudget={toggleBudget}
            toggleExpense={toggleExpense}
            showBudget={showBudget}
            showExpense={showExpense}
          />
        </div>
      )}
    </div>
  );
};

export default Stacked;
