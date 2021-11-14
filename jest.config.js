module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest-setup.js'],
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
  transformIgnorePatterns: [],
};
