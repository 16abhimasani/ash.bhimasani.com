const path = require("path");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/ash.bhimasani.com/" : "",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
