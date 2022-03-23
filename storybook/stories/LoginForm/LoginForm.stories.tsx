import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';

import {LoginForm} from '../../../src/features/login/LoginForm';
import CenterView from '../CenterView';

storiesOf('LoginForm', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <LoginForm mode="contained" onLogin={action('onLogin')}>
      {text('Text', 'Login')}
    </LoginForm>
  ))
  .add('with some emoji', () => (
    <LoginForm mode="outlined" onLogin={action('clicked-emoji')}>
      😀 😎 👍 💯
    </LoginForm>
  ));
