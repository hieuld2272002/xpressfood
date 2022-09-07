import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import HomeHeader from '../Conpoments/HomeHeader';
import {Colors} from '../global/styles';
import {filterData} from '../global/Data';
const HomeScreen = () => {
  const [delivery, setdelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setdelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? Colors.buttons : Colors.grey5,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setdelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? Colors.grey5 : Colors.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View style={styles.mapMarkerView}>
              <Icon
                type="material-community"
                name="map-marker"
                color={Colors.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5}}>22 beessie Street</Text>
            </View>
            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={Colors.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="tune"
              color={Colors.grey1}
              size={26}
            />
          </View>
        </View>
        {/* Categories */}
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelected}
                      : {...styles.smallCard}
                  }>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source={{uri: item.image}}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardTextSelected}
                          : {...styles.smallCardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free delivery now</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  addressView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: Colors.cardbackgroud,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  mapMarkerView: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  headerText: {
    color: Colors.grey1,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  headerTextView: {
    backgroundColor: Colors.grey5,
    paddingVertical: 2,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: Colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: Colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: Colors.cardbackgroud,
  },
  smallCardText: {
    fontWeight: 'bold',
    color: Colors.grey2,
  },
});
