import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

const TablePulse = ({
  arrayLength,
  rows,
}: {
  arrayLength: number;
  rows: number;
}) => (
  <>
    {Array.from(Array(arrayLength).keys()).map((id) => (
      <TableRow key={id}>
        {Array.from(Array(rows).keys()).map((row) => (
          <TableCell key={row} className="px-3 py-[26px]">
            <div className="h-4 w-full animate-pulse rounded-md bg-slate-200" />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
);

export default TablePulse;
