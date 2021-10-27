import axios from "axios";

const City = ({ banks }) => {
  return <div>City Test</div>;
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
