### Steps to setup eslint with create-reactp-app

```json
/**
  install dependencies
  npm i prettier eslint-config-prettier eslint-plugin-prettier -D
*/

/** Create .eslintrc, then add followings */
{
  "extends": ["react-app", "plugin:prettier/recommended"]
}

/**
  If you have not configured your vscode settings add eslint, prettier extensions,
  then add followings on your settings
*/
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "prettier.disableLanguages": [
    "js"
  ],
}
```

### Pre-commit setups

```json
/**
  1. Install pretty-quick,
  npm i pretty-quick -D

  2. add a line of script on your package.json
  "scripts": {
    "precommit": "pretty-quick --staged"
  }
*/

```
