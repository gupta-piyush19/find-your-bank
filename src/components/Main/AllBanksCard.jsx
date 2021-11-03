import React from "react";
import Link from "next/link";

const AllBanksCard = () => {
  return (
    <div className="card w-96 dark:text-black">
      <div className="card-container rounded-lg bg-gray-200">
        <div className="card-info pb-4 border-b-2 border-gray-400">
          <div className="text-3xl p-4">All Banks</div>
        </div>
        <div className="card-base p-3 ">
          <Link href="/all-banks">
            <a className="border-2 block border-black py-2 px-4 rounded-md mx-auto w-1/2 text-lg hover:bg-gray-400 hover:text-white whitespace-nowrap text-center">
              All Banks
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllBanksCard;
