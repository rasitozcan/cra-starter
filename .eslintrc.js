module.exports = {
  extends: ["airbnb", "prettier"],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "class-methods-use-this": 0,
    "eslint arrow-body-style": [0]
  }
};
