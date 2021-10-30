import React from "react";
import { useTable, usePagination } from "react-table";

const Table = ({ columns, data }) => {
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

  return (
    <div className="min-w-full">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
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
      <div>
        <span>
          Page:{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}{" "}
          </strong>
        </span>
        <span>
          | Go To Page:{" "}
          <input
            type="number"
            min={1}
            max={pageCount}
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[1, 10, 25, 50, 100].map((pageSize) => (
            <option value={pageSize} key={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"⏮"}
        </button>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          Prev
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {"⏭"}
        </button>
      </div>
    </div>
  );
};

export default Table;
