import axios from "axios";
import React, { useState } from "react";
import Filter from "../../../components/Filter";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const State = ({ cities }) => {
  const [data, setData] = useState(cities);
  const router = useRouter();

  const { state } = router.query;

  return (
    <div className="px-6 pt-4 w-1/2 mx-auto flex flex-col dark:text-white">
      <Head>
        <title>Find Your Bank - All Cities</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <p className=" text-5xl border-b-4 border-red-500 max-w-max px-2 pb-2 mb-4">
          All Cities
        </p>
      </div>
      <Filter dataList={cities} setData={setData} />
      <div className="my-2">
        <ul>
          {data?.map((city, idx) => (
            <li key={idx}>
              <Link href={`/all-banks/${state}/${city}`} passHref>
                <div className="pb-2 text-xl tracking-wider cursor-pointer border-b-2 border-transparent hover:border-black dark:hover:border-gray-100">
                  {city}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default State;

export const getStaticPaths = async () => {
  const config = {
    method: "post",
    url: "https://countriesnow.space/api/v0.1/countries/states",
    headers: {},
    data: {
      country: "India",
    },
  };

  const res = await axios(config);
  const states = res.data.data.states;

  const paths = states.map((state) => ({
    params: { state: `${state.name}` },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { state } = params;

  const config = {
    method: "post",
    url: "https://countriesnow.space/api/v0.1/countries/state/cities",
    headers: {},
    data: {
      country: "India",
      state: `${state}`,
    },
  };

  const res = await axios(config);
  return {
    props: {
      cities: res.data.data.map((city) =>
        city.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      ),
    },
  };
};
