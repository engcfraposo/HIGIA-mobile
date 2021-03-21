import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
//import { Footer } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {

  const img = require('../../assets/h.png');

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('');
  }

  function handleNavigateToRegister() {
    navigation.navigate('');
  }

  return (
    <>
      <View style={styles.container} >
        <View style={styles.main}>
        </View>

        <View style={styles.footer}>
          <Icon style={styles.icon} name="home" size={50} color="#FAFAFA"/>
          <Icon style={styles.icon} name="home" size={50} color="#FAFAFA"/>
          <Icon style={styles.icon} name="home" size={50} color="#FAFAFA"/>
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
  icon:{
    flex:1,
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin:5,
    marginLeft:15,
  },
  main: {
    flex: 5,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderBottomEndRadius:50,
    borderBottomStartRadius:50
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
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
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