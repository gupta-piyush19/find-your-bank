import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchBank = (ifsc) => {
  return axios.get(`https://ifsc.razorpay.com/${ifsc}`);
};

const Bank = ({ bank }) => {
  // const [isValid, setIsValid] = useState(true);
  // const [ifsc, setIfsc] = useState("");

  // const router = useRouter();
  // const { query } = router;
  // const { ifsc } = query;

  // const checkRegex = (ifsc) => {
  //   const regex = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}/g;
  //   const res = regex.test(ifsc);
  //   console.log(res);
  //   if (res) {
  //     const IFSC = ifsc.toUpperCase();
  //     setIfsc(IFSC);
  //     setIsValid(true);
  //   } else {
  //     // setIsValid(false);
  //   }
  //   return res;
  // };

  // const { data, isLoading, isError, error } = useQuery(
  //   "bank-ifsc",
  //   () => fetchBank(ifsc),
  //   {
  //     enabled: !!ifsc && checkRegex(ifsc),
  //   }
  // );

  // if (!isValid) return <h1>Please enter valid IFSC Code</h1>;
  // if (isLoading) return <h1>Loading ...</h1>;
  // if (isError) return <h1>{error.message}</h1>;

  return <div>Bank {JSON.stringify(bank, null, 2)}</div>;
};

export default Bank;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { ifsc } = params;

  const res = await axios.get(`https://ifsc.razorpay.com/${ifsc}`);
  console.log(res.data);
  return {
    props: {
      bank: res.data,
    },
  };
};
