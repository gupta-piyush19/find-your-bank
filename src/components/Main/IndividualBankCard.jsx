import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";

const IndividualBankCard = () => {
  const [ifsc, setIfsc] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/bank-details/[ifsc]",
      query: { ifsc: ifsc },
    });
  };

  return (
    <div className="card w-96 md:w-auto ">
      <div className="card-container rounded-lg bg-gray-200">
        <div className="card-info pb-4 border-b-2 border-gray-400">
          <div className="text-3xl p-4">Enter IFSC Code</div>
        </div>
        <div className="card-base p-4">
          <form
            onSubmit={handleSubmit}
            className="flex items-center md:justify-between gap-6"
          >
            <input
              type="text"
              className="outline-none rounded-md h-10 pl-3 focus:border-green-300 border-2 border-blue-300"
              value={ifsc}
              onChange={(e) => setIfsc(e.target.value)}
              required
              pattern="[A-Za-z]{4}0[A-Z0-9a-z]{6}"
              title="Please Enter a Valid IFSC Code"
            />
            <button
              type="submit"
              className="text-lg border-2 border-gray-600 px-4 py-1 rounded-md hover:bg-gray-400 hover:text-white"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndividualBankCard;
