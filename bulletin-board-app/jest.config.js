module.exports = {
  testEnvironment: "node",

  // Always collect coverage
  collectCoverage: true,

  // Collect from all JS files in backend, regardless of whether they're tested
  collectCoverageFrom: ["backend/**/*.js"],

  // Enforce minimum threshold
  coverageThreshold: {
    "backend/": {
      lines: 80
    }
  },

  // Tell Jest where tests live
  testMatch: ["**/__tests__/**/*.test.js"]
};
