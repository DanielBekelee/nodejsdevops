/** @type {import("eslint").FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        require: "readonly",
        module: "readonly",
        console: "readonly",
        test: "readonly",    // Jest globals
        expect: "readonly"
      }
    },
    rules: {
      // your rules
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];
