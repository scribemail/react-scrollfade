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
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                './lib/**/*.{ts,tsx}',
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            "extends": [
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
        },
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
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
