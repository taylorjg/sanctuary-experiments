module.exports = {
  extends: "eslint:recommended",
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": "off",
    "no-unexpected-multiline": "off"
  }
}
