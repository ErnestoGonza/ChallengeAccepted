module.exports = {
  routes: [
    {
      method: "POST",
      path: "/import-csv",
      handler: "zipcode.importCsvData",
      config: {
        auth: false,
      },
    },
  ],
};
