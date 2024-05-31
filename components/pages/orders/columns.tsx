"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { toast, useToast } from "@/components/ui/use-toast";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ordersDataProps } from "@/interface/orders/ordersDataProps";
import Image from "next/image";

export const columns: ColumnDef<ordersDataProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorFn: (row) => ({
      productImage: row.ProductImage,
      orderItem: row.OrderItems,
    }),
    header: "Image",
    cell: ({ row }) => {
      const { ProductImage, OrderItems } = row.original;
      return (
        <div className="flex justify-start">
          <Image src={ProductImage} alt={OrderItems} width={50} height={50} className="rounded-[4px] " />
        </div>
      );
    },
  },
  {
    accessorKey: "OrderItems",
    header: "Item",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("OrderItems")}</div>
    ),
  },
  {
    accessorKey: "CustomerName",
    header: "Customer Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("CustomerName")}</div>
    ),
  },
  {
    accessorKey: "TotalAmount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("TotalAmount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorFn: (row) => ({ status: row.Status, statusBg: row.StatusBg }),
    header: "Status",
    cell: ({ row }) => {
      const { Status, StatusBg } = row.original;
      return (
        <div
          className="capitalize p-1 rounded-lg text-white text-center w-20 font-medium"
          style={{ backgroundColor: StatusBg }}
        >
          {Status}
        </div>
      );
    },
  },
  {
    accessorKey: "OrderID",
    header: "Order ID",
    cell: ({ row }) => (
      <div className="capitalize">#{row.getValue("OrderID")}</div>
    ),
  },
  {
    accessorKey: "Location",
    header: "Location",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Location")}</div>
    ),
  },

  // hey
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-slate-100">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="cursor-pointer bg-white"
              onClick={() => {
                navigator.clipboard.writeText(order.OrderID.toString());
                toast({
                  title: "Link Copied",
                });
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
