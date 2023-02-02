module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: "latest", // Allows the use of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  plugins: [
    "@typescript-eslint"
  ],
  extends: ["plugin:@typescript-eslint/recommended", "prettier"], // Uses the linting rules from @typescript-eslint/eslint-plugin
  env: {
    node: true, // Enable Node.js global variables
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "warn"
  },
};