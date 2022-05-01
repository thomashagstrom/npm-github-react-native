import {fireEvent, render} from '@testing-library/react-native';

import React from 'react';
import FeatureTestIds from '../../FeatureTestIds';
import {LoginForm} from '../LoginForm';

describe('login', () => {
  describe('LoginForm', () => {
    test('Should have LoginForm title', async () => {
      const {findByTestId} = render(<LoginForm onLogin={jest.fn()} />);
      const child = await findByTestId(FeatureTestIds.LoginForm.TEXT_LOGIN);
      expect(child).toBeDefined();
    });

    test('should call onLogin', async () => {
      const press = jest.fn();
      const {findByTestId} = render(<LoginForm onLogin={press} />);
      const child = await findByTestId(FeatureTestIds.LoginForm.BUTTON_SUBMIT);
      await fireEvent.press(child);
      expect(press).toHaveBeenCalled();
    });
  });
});
