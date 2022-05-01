import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import * as React from 'react';

import {AuthNavigator} from '../AuthNavigator';

jest.mock('../../login', () => ({LoginForm: 'View'}));

describe('navigation', () => {
  describe('<AuthNavigator />', () => {
    test('should render', () => {
      render(
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>,
      );
    });
  });
});
