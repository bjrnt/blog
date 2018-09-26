const withCss = require("@zeit/next-css");

const withMdx = require("@zeit/next-mdx")({
  options: {}
});

module.exports = withCss(withMdx({ pageExtensions: ["jsx", "mdx"] }));
