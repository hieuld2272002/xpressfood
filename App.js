import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {Colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';
import SignInScreen from './src/Screens/authScreens/SignInScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.statusbar} />
      <RootNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
