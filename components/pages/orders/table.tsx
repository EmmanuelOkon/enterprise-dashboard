"use client";

import React, { useEffect, useRef, useState } from "react";

import { DataTable } from "@/components/Table/dataTable";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import { SearchIcon } from "lucide-react";

import CustomPagination from "@/components/Table/asyncPagination";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/Table/dataTableColumnHeader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const Table = () => {
  const [, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [start, setStart] = useState<number>(0);
  const length = 9;

  const [key, setKey] = useState<number>(+new Date());

  const form = useForm();

  const adminArticleTableColumn: ColumnDef<any>[] = [
  
    {
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Article Name" />
      ),
      cell: ({ row }) => (
        <div className="wrap-article-column font-medium">
          {row.getValue("title")}
        </div>
      ),
    },
    {
      accessorKey: "author",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Author" />
      ),
      cell: ({ row }) => <span>{row.getValue("author") ?? "--"}</span>,
    },
    {
      accessorKey: "reviewer",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Reviewer" />
      ),
      cell: ({ row }) => <span>{row.original.reviewer?.name ?? "--"}</span>,
    },
    // {
    //   accessorKey: "amount_paid",
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title="Amount Paid" />
    //   ),
    //   cell: ({ row }) => (
    //     <span className="">{row.getValue("amount_paid") ?? "--"}</span>
    //   ),
    // },
    // {
    //   accessorKey: "date",
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title="Date" />
    //   ),
    //   cell: ({ row }) => {
    //     return (
    //       <div className="w-40">
    //         <span>{row.getValue("date")}</span>
    //       </div>
    //     );
    //   },
    // },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = String(row.getValue("status")).toLowerCase();
        let color = "";

        switch (status) {
          case "approved":
            color = "bg-[#E7F7EF] text-[#0CAF60]"; // Green for approved
            break;
          case "rejected":
            color = "bg-[#FFEDEC] text-[#E03137]"; // Red for rejected
            break;
          case "submitted":
            color = "bg-[#FFF6D3] text-[#E6BB20]"; // Yellow for draft
            break;
          case "under_review":
            color = "bg-[#F4F0FF] text-[#8C62FF]"; // Purple for under review
            break;
          default:
            color = "bg-zinc-100 text-black"; // Default color
        }
        

        return (
          <div className="flex w-56 items-center gap-2">
            <span
              className={cn(
                "flex w-full items-center justify-center rounded-[10px] p-3 text-center text-[10px] font-bold uppercase",
                color
              )}
            >
              {status.split("_").join(" ")}
            </span>
            <Form {...form}>
              <form>
                <FormField
                  control={form.control}
                  name={`status_${row.original?.id}`}
                  defaultValue={row.original?.status.toUpperCase() ?? ""}
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        key={key}
                      >
                        <FormControl>
                          <SelectTrigger
                            
                            className={cn("h-10 w-10 rounded-xl ring-0", {
                              "text-text": !row.original?.status,
                            })}
                          />
                        </FormControl>

                        <SelectContent className="w-[190px]">
                          {[
                            { value: "APPROVED", label: "APPROVE" },
                            { value: "REJECTED", label: "REJECT" },
                            { value: "PUBLISHED", label: "PUBLISH" },
                          ]?.map((item: any, index: number) => (
                            <SelectItem
                              className="capitalize"
                              key={index}
                              value={item.value}
                            >
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        );
      },
    },
    {
      id: "action",
      header: () => (
        <span className="flex w-full justify-end text-xs">Action</span>
      ),
      cell: ({ row }) => <div>DataTableRowActions</div>,
    },
  ];

  const valueRef = useRef(searchValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(valueRef.current);
    }, 500);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueRef.current]);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="flex w-full flex-col gap-6 p-5 md:p-6">
        <div className="flex w-full items-center justify-start text-primary">
          <h1 className="text-2xl font-semibold">All Articles</h1>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Input
            type="text"
            placeholder="Search all articles"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              valueRef.current = e.target.value; // Update the ref with the latest value
            }}
            endContent={<SearchIcon className="" />}
          />

          <Select>
            <SelectTrigger className="w-[302px]">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="under_review">Under Review</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DataTable
          data={[]}
          columns={adminArticleTableColumn}
          isPagination={false}
        />
        <CustomPagination
          start={start}
          setStart={setStart}
          length={length}
          justifyEnd
        />
      </div>
    </>
  );
};

export default Table;
