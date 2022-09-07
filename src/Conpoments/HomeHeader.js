import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon, withBadge} from 'react-native-elements';
import {Colors, parameters} from '../global/styles';
const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View style={styles.navIcon}>
        <Icon
          type="material-community"
          name="menu"
          color={Colors.cardbackgroud}
          size={32}
        />
      </View>
      <View style={styles.ContainerView1}>
        <Text
          style={{
            color: Colors.cardbackgroud,
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          XpressFood
        </Text>
      </View>
      <View style={styles.ContainerView2}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={Colors.cardbackgroud}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.buttons,
    height: 50,
    justifyContent: 'space-between',
    padding: 5,
  },
  navIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  ContainerView1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerView2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
});
