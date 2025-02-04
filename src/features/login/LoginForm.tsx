import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

import FeatureTestIds from '../FeatureTestIds';

/**
 * Props for {@link LoginForm}
 * @typedef LoginFormProps
 */
export type LoginFormProps = React.PropsWithChildren & {
  /**
   * Occurs when the user successfully submits login.
   * @prop
   */
  onLogin: () => void;
  /**
   * Determines `mode` for the button. Optional.
   */
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  /**
   * `true` to use compact button style. Default is `false`. Optional.
   */
  compact?: boolean;
  childre?: React.ReactNode;
};

/**
 * Styled login form.
 * 
 * ## Usage
```
import React from 'react';
import {LoginForm} from 'npm-github-react-native';

export const MyComp: React.FC = () => (
<LoginForm mode="outlined" onLogin={console.log('clicked-emoji')}>
      😀 😎 👍 💯
</LoginForm>);
```
 * @param {LoginFormProps} param0 - see {@link LoginFormProps}
 * @returns {React.FC<LoginFormProps>} stateless component 
 * @typedef LoginForm
 */
export const LoginForm: React.FC<LoginFormProps> = ({
  children,
  onLogin,
  mode,
  compact,
}) => {
  return (
    <View>
      <Text testID={FeatureTestIds.LoginForm.TEXT_LOGIN}>LoginForm</Text>
      <Button
        testID={FeatureTestIds.LoginForm.BUTTON_SUBMIT}
        onPress={onLogin}
        accessibilityLabel="Login"
        mode={mode}
        compact={compact}>
        {children || 'Login'}
      </Button>
    </View>
  );
};
