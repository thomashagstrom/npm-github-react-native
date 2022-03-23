import {render} from '@testing-library/react-native';

import React from 'react';
import {LoginForm} from '../LoginForm';

describe('login', () => {
  describe('LoginForm', () => {
    test('Should have LoginForm title', () => {
      const {findByText} = render(<LoginForm onLogin={jest.fn()} />);
      expect(findByText('LoginForm')).toBeDefined();
    });
  });
});
