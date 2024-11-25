// https://docs.expo.dev/guides/using-eslint/

module.exports = {
  extends: ["expo", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "react/display-name": "off",
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "@typescript-eslint/no-inferrable-types": "warn",
    // я два дня решал проблему unresloved import (хотя алиасы импортов работают)
    // установил кучу пакетов (в том числе eslint-import-resolver-typescript)
    // перечитал кучу статей на stackoverflow и github
    // в том числе официальную документацию по ссылке вверху
    // но линтер меня не слушался, поэтому пришлось утсановить правило ниже
    "import/no-unresolved": "off",
  },
};
