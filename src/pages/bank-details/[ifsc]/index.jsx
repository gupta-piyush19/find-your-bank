import axios from "axios";

const Bank = ({ bank, error }) => {
  if (error) return <h2 className="bg-gray-500 text-red-400">{error}</h2>;
  return (
    <div>
      Bank {JSON.stringify(bank, null, 2)} {error}
    </div>
  );
};

export default Bank;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { ifsc } = params;
  const regex = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}/g;
  const res = regex.test(ifsc);

  if (!res) {
    return {
      props: {
        error: "Please Enter a Valid IFSC Code",
      },
    };
  }

  let data = [];
  let err = "";

  try {
    const res = await axios.get(`https://ifsc.razorpay.com/${ifsc}`);
    data = res.data;
  } catch (error) {
    err = error.message;
  }

  return {
    props: {
      bank: data,
      error: err,
    },
  };
};
