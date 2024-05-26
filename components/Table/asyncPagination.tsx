import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface CustomPaginationProps {
  start: number;
  length: number;
  status?: {
    recordsFiltered: number;
    totalRecords: number;
  };
  setStart: (arg0: number) => void;
  justifyEnd?: boolean;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  start,
  length,
  status,
  setStart,
  justifyEnd,
}) => {
  if (!status || status.totalRecords === 0) {
    return null;
  }

  const totalPages = Math.ceil(status.totalRecords / length);
  const currentPage = Math.ceil(start / length) + 1;

  let isPageNumberOutOfRange = false;

  const pageNumbers = [...new Array(totalPages)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === totalPages;
    const isCurrentPageWithinTwoPageNumbers =
      Math.abs(pageNumber - currentPage) <= 1;

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false;
      return (
        <PaginationItem key={pageNumber}>
          <PaginationLink
            href="#"
            onClick={() => setStart((pageNumber - 1) * length)}
            isActive={pageNumber === currentPage}
          >
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <PaginationEllipsis key={pageNumber} className="muted" />;
    }

    return null;
  });

  return (
    <Pagination
      className={cn(
        "flex w-full items-center rounded-xl p-2",
        {
          " justify-end ": justifyEnd,
        },
        {
          " justify-start ": !justifyEnd,
        }
      )}
    >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={cn("cursor-pointer", {
              "pointer-events-none opacity-50": start === 0,
            })}
            onClick={() => setStart(start - length)}
          />
        </PaginationItem>

        {pageNumbers}

        <PaginationItem>
          <PaginationNext
            className={cn("cursor-pointer", {
              "pointer-events-none opacity-50 ":
                start + length >= status.totalRecords,
            })}
            onClick={() => setStart(start + length)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
