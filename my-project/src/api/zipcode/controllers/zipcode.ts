/**
 * zipcode controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::zipcode.zipcode",
  ({ strapi }) => ({
    importCsvData: async (ctx) => {
      const path = require("path");
      const csvFilePath = path.join(
        __dirname,
        "../../../../public/assets/zip_code_sample.csv"
      ); // Specify the path to your CSV file
      console.log("CSV Constructed: ", csvFilePath);
      console.log("__dirname: ", __dirname);

      const { importCsv } = strapi.services["api::zipcode.zipcode"];
      // console.log(strapi.services["api::zipcode.zipcode"]);

      await importCsv(csvFilePath);
      ctx.send("Import completed");
    },
  })
);
