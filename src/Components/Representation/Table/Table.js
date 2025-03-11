import { useMemo, useEffect } from "react";
import { COLUMNS } from "./Column";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { GlobalFilter } from "./GlobalFilter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Table = ({ mockData }) => {
  const columns = useMemo(() => COLUMNS, []); // memoize before adding to useTable hook
  const data = useMemo(() => [...mockData], [mockData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      initialState: { pageSize: 5, pageIndex: 8 }, // useTable hook takes in memoized columns and data to be displayed
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  useEffect(() => {}, [AOS.init()]);

  return (
    <>
      {/* apply the table props */}
      {/* <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      /> */}
      <table {...getTableProps()} data-aos="fade-in" data-aos-duration="1500">
        {/* <div className="col-6"> */}
        {function SelectColumnFilter({
          column: { filterValue, setFilter, preFilteredRows, id },
        }) {
          // Calculate the options for filtering
          // using the preFilteredRows
          const options = useMemo(() => {
            const options = new Set();
            preFilteredRows.forEach((row) => {
              options.add(row.values[id]);
            });
            return [...options.values()];
          }, [id, preFilteredRows]);

          // Render a multi-select box
          return (
            <select
              value={filterValue}
              onChange={(e) => {
                setFilter(e.target.value || undefined);
              }}
            >
              <option value="">All</option>
              {options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        }}
        {/* </div> */}
        <thead className="d-none">
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows

            page.map((row, i) => {
              {
              }

              // Prepare the row for display
              prepareRow(row);
              return (
                <>
                  <tr
                    className="d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-center"
                    {...row.getRowProps()}
                  >
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        {
                          {
                            if (cell.row.id < 49) {
                              // Apply the cell props
                              return (
                                <td
                                  className="passed me-0"
                                  {...cell.getCellProps()}
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            } else {
                              return (
                                <td className="me-0" {...cell.getCellProps()}>
                                  {cell.render("Cell")}
                                </td>
                              );
                            }
                          }
                        }
                      })
                    }
                  </tr>
                </>
              );
            })
          }
        </tbody>
      </table>
      <div
        className="pagination d-flex justify-content-center"
        style={{ marginTop: "1rem" }}
      >
        <button
          onClick={() => previousPage()}
          title="previousPage"
          className="me-3"
        >
          <ArrowBackIcon className="svg--representation" />
        </button>
        {/* <span>{pageIndex + 1}</span> */}
        <button onClick={() => nextPage()} title="nextPage" className="ms-3">
          <ArrowForwardIcon className="svg--representation" />
        </button>{" "}
        {/* <button onClick={() => gotoPage(pageCount - 1)}>{">>"}</button>{" "} */}
        {/* <span>
          Page{" "}
          <strong>
            {pageIndex + 1} sur {pageOptions.length}
          </strong>{" "}
        </span> */}
      </div>
    </>
  );
};

export default Table;
