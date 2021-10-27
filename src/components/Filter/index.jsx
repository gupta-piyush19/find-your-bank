import { useState } from "react";

const Filter = ({ dataList, setData }) => {
  const [filter, setFilter] = useState("");

  const handleDataChange = (filterVal) => {
    const newData = dataList.filter((data) => {
      return data.name
        ? data.name.toLowerCase().indexOf(filterVal.toLowerCase()) > -1
        : data.toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
    });
    setData(newData);
  };

  return (
    <div>
      <input
        type="text"
        className="border-2 border-black rounded-md px-2 outline-none py-2 w-full focus:border-2 focus:border-purple-700"
        placeholder="Start Typing to find..."
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          handleDataChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Filter;
