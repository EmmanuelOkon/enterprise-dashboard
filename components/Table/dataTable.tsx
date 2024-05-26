"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  FilterFn,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import { useRouter } from "next/navigation";
import { DataTablePagination } from "./dataTablePagination";
import TablePulse from "./dataTablePulse";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  showSearchBar?: boolean;
  showFilterBar?: boolean;
  filterName?: string;
  refetch?: any;
  link?: string;
  isPagination?: boolean;
  queryString?: string;
}

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (
  row: { getValue: (arg0: any) => any },
  columnId: any,
  value: any,
  addMeta: (arg0: { itemRank: any }) => void
) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export function DataTable<TData, TValue>({
  isLoading,
  columns,
  data,
  link,
  queryString,
  isPagination = true,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      globalFilter,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="w-full space-y-4">
      <div className=" rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="bg-[#FAFAFA] pl-3 " key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="py-4" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TablePulse arrayLength={10} rows={columns.length} />
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => {
                    // Check if queryString is not empty, then push the URL with query string
                    if (queryString) {
                      router.push(
                        `${link}/${row.original.id}?${queryString}` as never
                      );
                    } else if (link) {
                      router.push(`${link}/${row.original.id}` as never);
                    }
                  }}
                  className="relative"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      className="relative mx-0 flex-shrink-0 cursor-pointer truncate py-4 "
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className=" hover:bg-transparent">
                <TableCell
                  colSpan={columns.length}
                  className="h-72 text-center sm:h-96 md:h-[500px]"
                >
                  <div className="flex w-full flex-col items-center justify-center">
                    {/* <EmptyTableIcon />{' '} */}
                    <span className="-mt-5 ml-5"> No results.</span>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {isPagination && <DataTablePagination table={table} />}
    </div>
  );
}
