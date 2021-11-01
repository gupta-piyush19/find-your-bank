import { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((val) => {
    setFilter(val || undefined);
  }, 300);

  return (
    <div className="mx-auto">
      <span className="text-lg">Search </span>
      <span>
        <input
          className="mx-auto border-2 border-blue-400 rounded-md h-11"
          type="search"
          value={value || " "}
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
