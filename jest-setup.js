global.__reanimatedWorkletInit = () => {};

const FRAME_TIME = 10;

global.requestAnimationFrame = cb => {
  setTimeout(cb, FRAME_TIME);
};

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('sentry-expo', () => ({
  init: () => jest.fn(),
  Native: {
    captureException: jest.fn(),
  },
}));

jest.useFakeTimers('modern');
