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
    <div className="card">
      <div className="card-container rounded-lg bg-gray-200">
        <div className="card-info pb-4 border-b-2 border-gray-400">
          <div className="text-3xl p-4">Enter IFSC Code</div>
        </div>
        <div className="card-base p-4">
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-between gap-3"
          >
            <input
              type="text"
              className="outline-none rounded-md h-10 pl-3 focus:border-green-300 border-2 border-blue-300"
              value={ifsc}
              onChange={(e) => setIfsc(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-lg border-2 border-gray-600 px-4 py-1 rounded-md"
            >
              Search
            </button>
          </form>
        </div>
        <Link href={`/bank-details/123`} passHref>
          <a>GoTo {ifsc}</a>
        </Link>
      </div>
    </div>
  );
};

export default IndividualBankCard;