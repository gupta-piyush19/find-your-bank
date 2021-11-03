import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Filter from "../../components/Filter";

const AllBanks = ({ states }) => {
  const [data, setData] = useState(states);

  return (
    <div className="md:px-6 pt-4 md:w-1/2 mx-auto flex flex-col dark:text-white">
      <Head>
        <title>Find Your Bank - All States</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <p className=" text-5xl border-b-4 border-red-500 max-w-max px-2 pb-2 mb-4">
          All States
        </p>
      </div>

      <Filter dataList={states} setData={setData} />

      <div className="my-2">
        <ul>
          {data?.map((state) => (
            <li key={state.state_code}>
              <Link href={`/all-banks/${state.name}`} passHref>
                <div className="pb-2 text-xl tracking-wider cursor-pointer border-b-2 border-transparent hover:border-black dark:hover:border-gray-100">
                  {state.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllBanks;

export const getStaticProps = async () => {
  const config = {
    method: "post",
    url: "https://countriesnow.space/api/v0.1/countries/states",
    headers: {},
    data: {
      country: "India",
    },
  };

  const res = await axios(config);
  return {
    props: {
      states: res.data.data.states,
    },
  };
};
