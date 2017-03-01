module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "rules": {
    "no-var": ["error"],
    "comma-dangle": ["error"],
    "semi": ["error", "always"],
    "space-infix-ops": ["error"],
    "eqeqeq": ["error", "always"],
    "eol-last": ["error", "always"],
    "newline-before-return": ["error"],
    "linebreak-style": ["error", "unix"],
    "spaced-comment": ["error", "always"],
    "indent": ["error", 2, {"SwitchCase": 1}],
    "camelcase": ["error", {"properties": "never"}],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "quotes": ["error", "single", {"allowTemplateLiterals": true}],
    "valid-jsdoc": ["warn", {"requireReturn": false, "requireParamDescription": false, "requireReturnDescription": false}],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react/jsx-uses-react": ["error"],
    "react/jsx-uses-vars": ["error"]
  }
}
