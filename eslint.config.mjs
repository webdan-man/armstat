import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      prettier: "eslint-plugin-prettier",
      tailwindcss: "eslint-plugin-tailwindcss",
    },
    rules: {
      "prettier/prettier": "error",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-shorthand": "warn",
    },
  },
  ...prettier,
  globalIgnores([".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"]),
]);

export default eslintConfig;
