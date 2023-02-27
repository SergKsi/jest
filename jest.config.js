/** @type {import('jest').Config} */
const config = {
   collectCoverageFrom: [
      '**/*.{js,jsx}',
      '!**/node_modules/**',
      '!**/coverage/**'
   ]
};

module.exports = config;
