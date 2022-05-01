import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {LoginForm} from '../login/LoginForm';

/**
 * Navigation parameters for {@link AuthNavigator}
 *
 * @typedef AuthStackParamsList
 */
export type AuthStackParamsList = {
  /**
   * Parameters for {@link LoginScreen}
   */
  Login: undefined;
  Confirm: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamsList>();

/**
 * Navigator for authentication screens.
 * 
 * Parameters are defined in {@link AuthStackParamsList}
 * 
 * ## Usage
 * Display `AuthNavigator` if the user is not logged in.
 * ```
  export const RootNavigator: React.FC = () => {
    const userContext = React.useContext(UserContext);

    return userContext?.user && userContext.uid ? (
      <MainNavigator>
    ) : (
      <AuthNavigator />
    );
  };
 * ```
 *
 * @typedef AuthNavigator
 * @returns Stack navigator with authentication flow
 */
export const AuthNavigator: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginForm} />
  </AuthStack.Navigator>
);
