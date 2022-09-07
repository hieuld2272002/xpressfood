import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Button, SocialIcon, Icon} from 'react-native-elements';
import Swiper from 'react-native-swiper';
const SignInWelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.ContainerText}>
        <Text style={styles.RestaurantText}>DISCOVER RESTAURANTS</Text>
        <Text style={styles.RestaurantText}>IN YOUR AREA</Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.Slider1}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://images.squarespace-cdn.com/content/v1/54b1510ce4b059ddb550bcff/1556330181601-ZRRM870OJJOFN0PJO2XJ/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/brooklyn-wedding-photographer-rob-allen-photography-TheGreenBuilding-LU-28.jpg',
              }}
            />
          </View>
          <View style={styles.Slider2}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/shoyu-ramen_20181227133143.jpg',
              }}
            />
          </View>
          <View style={styles.Slider3}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://a.cdn-hotels.com/gdcs/production18/d507/0d126a9e-7aac-4d81-831d-bfd4ff0c11db.jpg',
              }}
            />
          </View>
          <View style={styles.Slider3}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://static01.nyt.com/images/2019/12/11/dining/10best-rest-dish3/10best-rest-dish3-videoSixteenByNineJumbo1600.jpg',
              }}
            />
          </View>
        </Swiper>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: 'flex-end',
          marginHorizontal: 20,
          marginBottom: 20,
        }}>
        <Button
          title="Sign in"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => {
            navigation.navigate('SignInScreen');
          }}
        />
        <View style={{marginTop: 15}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ContainerText: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginTop: getStatusBarHeight(),
    paddingTop: 20,
  },
  RestaurantText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.buttons,
  },
  Slider1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  Slider2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  Slider3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
  },
  createButtonTitle: {
    color: Colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
