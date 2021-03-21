import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
//import { Footer } from './style';

const Home = () => {

  const img = require('../../assets/h.png');

  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate('Home');
  }

  function handleNavigateToRegister() {
    navigation.navigate('Register');
  }

  return (
    <>
      <View style={styles.container} >
        <View style={styles.main}>
          <Image source={img} style={styles.img} />
        </View>

        <View style={styles.footer}>
          <RectButton style={styles.loginButton} onPress={handleNavigateHome}>
            <Text style={styles.buttonText}>
              LOGIN
            </Text>

          </RectButton>

          <View style={styles.centerContent}>
            <Text style={styles.text}>
               OU 
          </Text>
          </View>

          <RectButton style={styles.registerButton} onPress={handleNavigateToRegister}>
            <Text style={styles.buttonText}>
              CADASTRE-SE
          </Text>

          </RectButton>
        </View>


      </View>
    </>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#04B7D9',
  },
  text:{
    color: 'black',
    fontWeight: 'bold',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  box: {
    backgroundColor: '#28407C',
    width: '100%',
    height: 20,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },

  centerContent: {
    marginTop: 15,
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 50,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderTopEndRadius: 100,
    borderTopStartRadius: 100,
  },

  img: {
    marginTop: 0,
  },

  background: {
    backgroundColor: '#0E0E0E',
  },

  registerButton: {
    justifyContent: 'center',
    backgroundColor: '#04B7D9',
    height: 60,
    width: 250,
    flexDirection: 'row',
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  loginButton: {
    justifyContent: 'center',
    backgroundColor: '#0770E6',
    height: 60,
    width: 250,
    flexDirection: 'row',
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FAFAFA',
    fontFamily: 'Roboto_500Medium',
    fontSize: 15,
  }


});

export default Home;