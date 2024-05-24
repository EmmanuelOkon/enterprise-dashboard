import React from "react";
import { TiChartBar } from "react-icons/ti";
import { Button } from "../ui/button";

interface StackedLegendProps {
  toggleBudget: () => void;
  toggleExpense: () => void;
  showBudget: boolean;
  showExpense: boolean;
}

const StackedLengend = ({
  toggleBudget,
  toggleExpense,
  showBudget,
  showExpense,
}: StackedLegendProps) => {
  return (
    <div
      className="flex items-center gap-4 my-10 justify-center"
      style={{ marginBottom: 20 }}
    >
      <Button
        onClick={toggleBudget}
        className="p-4 text-white border-0 cursor-pointer flex items-center gap-2"
        style={{
          backgroundColor: showBudget ? "#8884d8" : "#ccc",
        }}
      >
        <TiChartBar /> Budget
      </Button>
      <Button
        onClick={toggleExpense}
        className="p-4 text-white border-0 cursor-pointer flex items-center gap-2"
        style={{
          backgroundColor: showExpense ? "#82ca9d" : "#ccc",
        }}
      >
        <TiChartBar /> Expense
      </Button>
    </div>
  );
};

export default StackedLengend;
