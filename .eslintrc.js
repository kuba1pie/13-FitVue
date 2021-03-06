module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": 0,
    //"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    //"no-console": "off",
    //"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    "prettier/prettier": {"useTabs": false}
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
