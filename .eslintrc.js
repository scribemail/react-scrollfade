module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "overrides": [
        {
            "files": ["lib/*.{ts,tsx}"],
        }
    ],
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version": "detect"
        },
    },
    "rules": {
    },
}
