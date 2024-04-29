import { StaticImageData } from "next/image";

export interface ordersDataProps {
  OrderID: number;
  CustomerName: string;
  TotalAmount: number;
  OrderItems: string;
  Location: string;
  Status: string;
  StatusBg: string;
  ProductImage: string | StaticImageData;
}
