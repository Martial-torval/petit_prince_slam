import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { useTable, useSortBy, useGlobalFilter } from "react-table";

export const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <>
      <input
        className="w-100 p-2 bg-transparent text-white btn-search"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Rechercher par mot clé : date lieu ou type de représentation`}
        style={{
          fontSize: "1.1rem",
          margin: "1rem 0",
        }}
      />
    </>
  );
};
