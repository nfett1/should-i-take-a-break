module.exports = {
    // Specifies the test environment
    testEnvironment: "node",
    
    // Specifies the glob patterns Jest should use to detect test files
    testMatch: [
      "**/__tests__/**/*.test.js",
      "**/?(*.)+(spec|test).js"
    ],
    
    // Sets up Jest to automatically detect and mock modules
    automock: false,
    
    // Sets up Jest to use a specific coverage reporter
    coverageReporters: ["text", "lcov"],
    
    // Sets up Jest to exclude specific directories from coverage analysis
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "/__tests__/"
    ],

  };