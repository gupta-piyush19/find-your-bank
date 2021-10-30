import React from "react";
import { useTable, usePagination } from "react-table";
import classes from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Table = ({ columns, data }) => {
  const router = useRouter();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  const handleRowClick = (row) => {
    router.push(`/bank-details/${row.original.ifsc}`);
  };

  return (
    <div className={`w-full ${classes.table}`}>
      <table {...getTableProps()} className={`w-full ${classes.dataTable}`}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} width={column.width}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => handleRowClick(row)}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className={`grid grid-cols-5 items-center justify-between ${classes.toolbar} text-center`}
      >
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"⏮"}
          </button>
        </div>
        <div>
          <button onClick={previousPage} disabled={!canPreviousPage}>
            ⬅️ Prev
          </button>
        </div>
        <div className="flex justify-between flex-col gap-1 lg:flex-row lg:px-4 items-center">
          <span>
            Page:{" "}
            <strong>
              <input
                type="number"
                className="outline-none w-10 bg-gray-300 text-center"
                min={1}
                max={pageCount}
                value={pageIndex + 1}
                // defaultValue={pageIndex + 1}
                onChange={(e) => {
                  if (e.target.value) {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }
                }}
              />
              of {pageOptions.length}{" "}
            </strong>
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="border-2 border-black"
          >
            {[1, 10, 25, 50, 100].map((pageSize) => (
              <option value={pageSize} key={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={nextPage} disabled={!canNextPage}>
            Next ➡️
          </button>
        </div>
        <div>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {"⏭"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
