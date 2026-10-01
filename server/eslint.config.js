// eslint.config.js (in a CJS project) or eslint.config.cjs
module.exports = [
  {
    // Target all .js files in the project
    files: ['**/*.js'],
    // Define language options for CommonJS
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 5, // Or a later version if you use newer JS features but still CJS modules
      globals: {
        // Add Node.js globals if your code runs in Node.js environment
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __filename: 'readonly',
        __dirname: 'readonly',
      },
    },
    // Extend recommended rules for general best practices
    extends: ['eslint:recommended'],
    rules: {
      // Add specific CommonJS related rules or other preferences
      // e.g., to report require calls in ESM files
      // "import/no-commonjs": "error"
    },
  },
];