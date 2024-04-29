import { StaticImageData } from "next/image";

export interface employeesDataProps {
  EmployeeID: number;
  Name: string;
  Title: string;
  HireDate: string;
  Country: string;
  ReportsTo: string;
  EmployeeImage: StaticImageData;
}
