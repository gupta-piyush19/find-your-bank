import { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((val) => {
    setFilter(val || undefined);
  }, 200);

  return (
    <div className="flex items-center gap-4 w-full dark:text-white">
      <span className="lg:text-xl text-lg ">Search: </span>
      <span className="w-full lg:w-3/4">
        <input
          className=" border-2 border-blue-400 rounded-md h-11 w-full my-4  px-2 dark:bg-gray-500"
          type="search"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      </span>
    </div>
  );
};

export default GlobalFilter;
