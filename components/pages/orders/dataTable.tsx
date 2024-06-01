"use client";
import * as React from "react";

import { useRouter } from "next/navigation";

import useAppState from "@/store";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import TablePulse from "../../Table/dataTablePulse";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  showSearchBar?: boolean;
  showFilterBar?: boolean;
  filterName?: string;
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
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const { isLoading, setIsLoading } = useAppState();

  const [startPageIndex, setStartPageIndex] = React.useState<number>(0);

  React.useEffect(() => {
    setIsLoading();
  }, [setIsLoading]);

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter items..."
          value={
            (table.getColumn("OrderItems")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("OrderItems")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-slate-100">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-72 text-center sm:h-96 md:h-[500px]"
                >
                  <div className="flex w-full flex-col items-center justify-center">
                    <MdOutlineHourglassEmpty className="h-5 w-5" />{" "}
                    <span className="font-medium text-sm "> No results.</span>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const currentPageIndex =
                      table.getState().pagination.pageIndex;
                    if (currentPageIndex > 0) {
                      table.setPageIndex(currentPageIndex - 1);
                      router.push(`?page=${currentPageIndex}`);
                      if (currentPageIndex - 1 < startPageIndex) {
                        setStartPageIndex(startPageIndex - 1);
                      }
                    }
                  }}
                  disabled={!table.getCanPreviousPage()}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
              </PaginationItem>
              {Array.from({ length: table.getPageCount() })
                .slice(startPageIndex, startPageIndex + 3)
                .map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href={`?page=${index + 1}`}
                      onClick={(e) => {
                        e.preventDefault();
                        table.setPageIndex(startPageIndex + index);
                        router.push(`?page=${startPageIndex + index + 1}`);
                        if (index === 2) {
                          setStartPageIndex(startPageIndex + 1);
                        }
                      }}
                      isActive={
                        table.getState().pagination.pageIndex ===
                        startPageIndex + index
                      }
                    >
                      {startPageIndex + index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              <PaginationItem>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const currentPageIndex =
                      table.getState().pagination.pageIndex;
                    table.setPageIndex(currentPageIndex + 1);
                    router.push(`?page=${currentPageIndex + 2}`);
                    if (currentPageIndex + 1 >= startPageIndex + 3) {
                      setStartPageIndex(startPageIndex + 1);
                    }
                  }}
                  disabled={!table.getCanNextPage()}
                  className="gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
