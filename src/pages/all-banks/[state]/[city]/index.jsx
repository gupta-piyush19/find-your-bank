import axios from "axios";
import { useMemo } from "react";
import Table from "../../../../components/Table";
import COLUMNS from "../../../../components/Table/Columns";

const City = ({ banks }) => {
  const data = useMemo(() => banks, []);
  const columns = useMemo(() => COLUMNS, []);

  return (
    <div className="mx-6 py-6">
      <Table data={data} columns={columns} />
    </div>
  );
};

export default City;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { city } = params;

  const res = await axios.get(
    `https://vast-shore-74260.herokuapp.com/banks?city=${city.toUpperCase()}`
  );

  return {
    props: {
      banks: res.data,
    },
  };
};
