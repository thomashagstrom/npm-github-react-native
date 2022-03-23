import {View} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';

export type LoginFormProps = {
  onLogin: () => void;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  compact?: boolean;
};

/**
 * Styled login form
 * @example
<LoginForm mode="outlined" onLogin={console.log('clicked-emoji')}>
      😀 😎 👍 💯
</LoginForm>
 * @param param0 children, mode, compact, onLogin
 * @returns {React.FC}
 */
export const LoginForm: React.FC<LoginFormProps> = ({
  children,
  onLogin,
  mode,
  compact,
}) => {
  return (
    <View>
      <Text>LoginForm</Text>
      <Button
        onPress={onLogin}
        accessibilityLabel="Login"
        mode={mode}
        compact={compact}>
        {children || 'Login'}
      </Button>
    </View>
  );
};
