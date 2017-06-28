module.exports = {
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "airbnb-base"],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "after-used"
    }],
    // For global variable definitions.
    "no-var": "off",
    // Keeps erroring linter.
    "import/no-extraneous-dependencies": "off"
  }
};
