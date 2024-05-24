import { stackedChartDataProps } from "@/interface/chart/stackedChartsDataProps";

export const budgetData: stackedChartDataProps[] = [
  { x: "Jan", y: 111.1 },
  { x: "Feb", y: 127.3 },
  { x: "Mar", y: 143.4 },
  { x: "Apr", y: 109.0 },
  { x: "May", y: 119.0 },
  { x: "Jun", y: 129.0 },
  { x: "Jul", y: 139.0 },
];

export const expenseData: stackedChartDataProps[] = [
  { x: "Jan", y: 90.1 },
  { x: "Feb", y: 127.3 },
  { x: "Mar", y: 143.4 },
  { x: "Apr", y: 160.0 },
  { x: "May", y: 150.0 },
  { x: "Jun", y: 140.0 },
  { x: "Jul", y: 130.0 },
];

export const combinedData = budgetData.map((item, index) => ({
  x: item.x,
  budget: item.y,
  expense: expenseData[index].y,
}));
