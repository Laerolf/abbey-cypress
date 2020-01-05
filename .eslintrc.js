module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'semi': ['warn', 'always'],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-undef": "off",
    "htmlWhitespaceSensitivity": 0,
  },
  extends: [
    'plugin:cypress/recommended'
  ],
  plugins: [
    'cypress'
  ],
  parserOptions: {
    parser: "babel-eslint"
  }
};
