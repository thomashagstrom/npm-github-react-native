module.exports = {
  preset: 'jest-expo',
  cacheDirectory: '.jest/cache',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  bail: false,
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '<rootDir>/dist',
    '<rootDir>/storybook',
  ],
  transformIgnorePatterns: ['\\.snap$', '<rootDir>/dist'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testMatch: null,
  moduleDirectories: ['node_modules'],
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/firebase-functions',
    '<rootDir>/node_modules/firebase-admin',
    '<rootDir>/node_modules/firebase-functions-test',
  ],
  restoreMocks: true,
  automock: false,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/vendor/**',
    '!**/__mocks__/**',
    '!**/storybook/**',
    '!**/__snapshots__/**',
    '!**/index.ts',
  ],
  reporters: [
    'default',
    'jest-junit',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Unit Test Report',
        includeConsoleLog: false,
        sort: 'titleAsc',
      },
    ],
  ],
};
