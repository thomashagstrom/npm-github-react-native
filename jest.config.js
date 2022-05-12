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
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest-setup.js',
  ],
  transformIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/dist',
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@thomashagstrom/.*)',
  ],
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
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    // To make exceptions:
    // './src/features/login/LoginForm.tsx': {
    //   branches: 87,
    //   functions: 100,
    //   lines: 100,
    //   statements: 100,
    // },
  },
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
