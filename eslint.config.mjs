import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "node_modules/**", "next-env.d.ts", "public/**"]),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "react/no-unescaped-entities": "off",
    },
  },
  {
    // Componentes generados por shadcn/ui: los tratamos como código de terceros.
    files: ["components/ui/**/*.{ts,tsx}", "hooks/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
      "react-hooks/refs": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
])
