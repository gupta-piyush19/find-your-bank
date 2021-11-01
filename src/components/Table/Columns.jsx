const COLUMNS = [
  {
    Header: "Bank Name",
    accessor: "bank_name",
    width: "20%",
  },
  {
    Header: "Branch",
    accessor: "branch",
    width: "20%",
  },
  {
    Header: "IFSC",
    accessor: "ifsc",
    width: "20%",
    disableFilters: true,
  },
  //   {
  //     Header: "City",
  //     accessor: "city",
  //   },
  //   {
  //     Header: "District",
  //     accessor: "district",
  //   },
  //   {
  //     Header: "State",
  //     accessor: "state",
  //   },
  {
    Header: "Address",
    accessor: "address",
    width: "40%",
  },
];

export default COLUMNS;
