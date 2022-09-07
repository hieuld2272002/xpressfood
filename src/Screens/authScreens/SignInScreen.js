import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors, parameters, title} from '../../global/styles';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import Header from '../../Conpoments/Header';
import * as Animatable from 'react-native-animatable';
import {Button, SocialIcon} from 'react-native-elements';
const SignInScreen = ({navigation}) => {
  const [textInput2Fossued, settextInput2Fossued] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header type="arrow-left" title="MY ACCOUNT" navigation={navigation} />
      <View>
        <Text style={title}>Sign In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>Register with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.textInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>
        <View style={[styles.textInput2, styles.textInput1]}>
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              iconStyle={{color: Colors.grey3}}
              type="material"
            />
          </Animatable.View>
          <TextInput
            style={{width: '80%'}}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => {
              settextInput2Fossued(false);
            }}
            onBlur={() => {
              settextInput2Fossued(true);
            }}
          />
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{color: Colors.grey3}}
              type="material"
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{marginHorizontal: 20, marginTop: 10}}>
        <Button
          title="Sign in"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text1}}>Forgot Password ?</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10, marginBottom: 5}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
      </View>
      <View>
        <SocialIcon
          title="Sign In with facebook"
          button
          type="facebook"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View>
        <SocialIcon
          title="Sign In with google"
          button
          type="google"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{left: 21, marginTop: 15}}>
        <Text style={{...styles.text1}}>New on XpressFood ?</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginRight: 20}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: Colors.grey3,
    fontSize: 16,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  textInput2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    borderRadius: 12,
    height: 50,
    marginHorizontal: 20,
  },
  createButton: {
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
  },
  createButtonTitle: {
    color: Colors.buttons,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
