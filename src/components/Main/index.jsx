import AllBanksCard from "./AllBanksCard";
import IndividualBankCard from "./IndividualBankCard";

const Main = () => {
  return (
    <div className="flex w-full md:flex-row flex-col justify-center items-center h-full gap-10">
      <AllBanksCard />
      <IndividualBankCard />
    </div>
  );
};

export default Main;
