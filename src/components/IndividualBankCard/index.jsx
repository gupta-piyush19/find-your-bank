import Head from "next/head";

const IndividualBankCard = ({ bank }) => {
  const {
    BANK,
    BANKCODE,
    IFSC,
    MICR,
    BRANCH,
    CONTACT,
    ADDRESS,
    UPI,
    CITY,
    CENTRE,
    DISTRICT,
    STATE,
    SWIFT,
    NEFT,
    RTGS,
    IMPS,
  } = bank;

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Pridi:wght@500"
          rel="stylesheet"
        />
      </Head>
      <div className="md:mx-auto md:w-3/4 lg:w-1/2 m-4 shadow-lg">
        <div className="content p-6">
          <div className="title md:text-4xl text-3xl border-b-2 md:border-b-4 mx-auto border-red-400 md:pb-3 max-w-max font-pridi mb-3 md:mb-6 ">
            {BANK}
          </div>
          <div className="mb-2 text-lg">
            <span className="font-bold">BANKCODE:</span> {BANKCODE}
          </div>
          <div className="mb-2 text-lg">
            <span className="font-bold">IFSC:</span> {IFSC}
          </div>
          <div className="mb-2 text-lg">
            <span className="font-bold">MICR:</span> {MICR}
          </div>
          <div className="mb-2 text-lg">
            <span className="font-bold">BRANCH:</span> {BRANCH}
          </div>
          <div className="mb-2 text-lg">
            <span className="font-bold">ADDRESS:</span>{" "}
            {`${ADDRESS}, ${CENTRE}, ${CITY}, ${DISTRICT}, ${STATE}`}
          </div>
          {CONTACT && (
            <div className="mb-2 text-lg">
              <span className="font-bold">CONTACT:</span> {CONTACT}
            </div>
          )}
          {SWIFT && (
            <div className="">
              <span className="font-bold">SWIFT:</span>
              {SWIFT}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IndividualBankCard;
