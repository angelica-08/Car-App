module.exports = {
  root: true,
  env: {
      node: true,
  },
  extends: [
      "plugin:vue/essential",
      "@vue/airbnb",
  ],
  rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "max-len": [2, {
          code: 250,
          tabWidth: 4,
          ignoreUrls: true,
      }],
      indent: ["error", 4, {
          SwitchCase: 1,
      }],
      "vue/html-indent": ["error", 4, {
          alignAttributesVertically: true,
      }],
      "import/extensions": ["error", "never"],
      "import/newline-after-import": 0,
  },
  parserOptions: {
      parser: "babel-eslint",
  },
  overrides: [
      {
          files: [
              "**/__tests__/*.{j,t}s?(x)",
          ],
          env: {
              mocha: true,
          },
      },
  ],
};