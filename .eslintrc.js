module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended", "react-app"],

  plugins: [
    // prettier 규칙을 eslint에 적용시키게 해줌 ( eslint-plugin-prettier )
    "prettier",

    // ES2015의 import/export 구문 지원 ( eslint-plugin-import )
    "import",

    // React관련 eslint 설정 지원 ( eslint-plugin-react )
    "react",
  ],
  rules: {
    // 추가하고 싶은 rule을 더 추가해줍니다.
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        bracketSpacing: true,
        semi: true,
        useTabs: false,
        arrowParens: "avoid",
        endOfLine: "lf",
      },
    ],
  },
};
