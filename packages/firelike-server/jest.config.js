module.exports = {
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(js|ts)',
    '<rootDir>/src/**/?(*.)(spec|test).(js|ts)',
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|ts)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  // `node` extension is for `uws` to start its binary
  moduleFileExtensions: ['js', 'ts', 'node'],
};
