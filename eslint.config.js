import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
export default tseslint.config(
  { ignores: ["build/**", ".react-router/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: [
      "app/**/*.{ts,tsx}",
      "api/**/*.ts",
      "tests/**/*.ts",
      "scripts/**/*.mjs",
    ],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["app/**/*.{ts,tsx}"],
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-hooks/set-state-in-effect": "off",
    },
  },
);
