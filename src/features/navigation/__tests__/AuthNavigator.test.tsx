import {NavigationContainer} from '@react-navigation/native';
import {describe, test} from '@jest/globals';
import {render} from '@testing-library/react-native';
import * as React from 'react';

import {AuthNavigator} from '../AuthNavigator';

jest.mock('../../login', () => ({LoginForm: 'View'}));

describe('navigation', () => {
  describe('<AuthNavigator />', () => {
    test.skip('should render', () => {
      render(
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>,
      );
    });
  });
});
