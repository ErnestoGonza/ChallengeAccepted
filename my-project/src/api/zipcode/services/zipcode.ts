/**
 * zipcode service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::zipcode.zipcode",
  ({ strapi }) => ({
    importCsv: async (csvFilePath) => {
      const fs = require("fs");
      const { parse } = require("csv-parse/sync");

      // console.log(strapi);
      const zipcodes = strapi.entityService;

      // console.log(zipcodes);
      const csvData = fs.readFileSync(csvFilePath, "utf8");
      const records = parse(csvData, { columns: true });

      for (const record of records) {
        await zipcodes.create(record);
      }
    },
  })
);
