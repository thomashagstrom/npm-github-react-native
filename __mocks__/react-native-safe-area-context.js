import { jest } from '@jest/globals';

const inset = { top: 0, right: 0, bottom: 0, left: 0 };

module.exports = {
  SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
  SafeAreaConsumer: jest.fn().mockImplementation(({ children }) => children(inset)),
  SafeAreaView: jest.fn().mockImplementation(({ children }) => children),
  useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
};
