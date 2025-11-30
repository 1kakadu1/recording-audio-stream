import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import unusedImports from "eslint-plugin-unused-imports";
import cspellEslintPlugin from "@cspell/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
  {
    ignores: [
      ".prettierrc",
      ".lintstagedrc.js",
      "vite.config.*",
      "webpack.config.*",
      "tsconfig.json",
      "**/.husky/",
      "postcss.config.*",
      "eslint.config.mjs",
      "**/node_modules/",
      "**/dist/",
      "**/build/",
      "**/public/",
      "package-lock.json",
      "package.json",
      "src/mock/*"
    ]
  },

 {
    languageOptions: {
      globals: {
        React: "readonly",
        JSX: "readonly",
        HTMLAudioElement: "readonly",
        ...globals.browser
      }
    }
  },

  // Основные правила JS
  js.configs.recommended,

  // TypeScript
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      "@typescript-eslint": ts
    },
    rules: {
      ...ts.configs.recommended.rules
    }
  },

  // React
  {
    files: ["**/*.jsx", "**/*.tsx"],
    plugins: {
      react,
      "react-hooks": reactHooks
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off"
    }
  },

  // Prettier
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error"
    }
  },

  // unused-imports + cspell
  {
    plugins: {
      "unused-imports": unusedImports,
      "@cspell": cspellEslintPlugin
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],
      "@cspell/spellchecker": "error",

      // остальное из вашей конфигурации
      "max-len": [
        2,
        {
          code: 300,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true
        }
      ],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "linebreak-style": ["error", "unix"],
      "no-debugger": "off"
    }
  }
];
