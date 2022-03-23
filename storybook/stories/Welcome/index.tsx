import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {text} from '@storybook/addon-knobs';

export default class Welcome extends React.Component<{showApp: () => void}> {
  showApp = event => {
    const {showApp} = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>Welcome to React Native Storybook</Text>
        <Text style={styles.content}>
          This is a UI Component development environment for your React Native
          app. Here you can display and interact with your UI components as
          stories. A story is a single state of one or more UI components. You
          can have as many stories as you want. In other words a story is like a
          visual test case.
        </Text>
        <Text style={styles.content}>
          We have added some stories inside the "storybook/stories" directory
          for examples. Try editing the value under ADDONS/KNOBS to
          {' ' + text('example', 'edit this message')}.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 18,
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 18,
  },
});
