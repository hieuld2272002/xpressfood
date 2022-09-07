import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {Colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements/dist/icons/Icon';
const Header = ({title, type, navigation}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20}} />
      <Icon
        type="material-community"
        name={type}
        color={Colors.headerText}
        size={28}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.buttons,
    height: 40,
  },
  headerText: {
    color: Colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
