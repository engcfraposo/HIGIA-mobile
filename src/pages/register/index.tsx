import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, ScrollView, Picker } from 'react-native';
import { RectButton, TextInput, } from 'react-native-gesture-handler';
import { Dropdown } from '../../components/SelectBox'

const Home = () => {

  const img = require('../../assets/h-75.png');

  const [selectedValue, setSelectedValue] = useState();

  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate('Home');
  }

  // fontes
  // ROBOTO REGULAAR, MEDIUM E BOLD
  return (
    <>

      <View style={styles.container}>
        <View style={styles.main}>
          <Image source={img} style={styles.img} />
        </View>


        <View style={styles.form}>
          <ScrollView style={styles.scroll}>
            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Nome Completo :</Text>
              <TextInput style={styles.input} placeholder={"Carlota xuxu"} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Data de Nascimento :</Text>
              <TextInput style={styles.input} placeholder={"xuxu@gmail.com"} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>CPF :</Text>
              <TextInput style={styles.input} placeholder={"153.388.454-52"} />
            </View>

            <View style={styles.inputContainer}>

              <Text style={styles.Textlabel}>Gênero :</Text>
              <Picker style={styles.picker}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Selecione o gênero" value="" />
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Feminino" value="feminino" />
              </Picker>

            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Telefone :</Text>
              <TextInput style={styles.input} placeholder={"(99)99999-9999 "} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>CEP :</Text>
              <TextInput style={styles.input} placeholder={"99999-999"} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Rua :</Text>
              <TextInput style={styles.input} placeholder={"Rua do caoraçao"} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Bairro :</Text>
              <TextInput style={styles.input} placeholder={"JD. Europa"} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Número :</Text>
              <TextInput style={styles.input} placeholder={"160"} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Complemento :</Text>
              <TextInput style={styles.input} placeholder={"casa 04"} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Estado :</Text>
              <TextInput style={styles.input} placeholder={"São Paulo"} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Email :</Text>
              <TextInput style={styles.input} placeholder={"xuxu@gmail.com"} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Senha :</Text>
              <TextInput style={styles.input} placeholder={"*******"} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.Textlabel}>Onde nos conheceu :</Text>
              <Picker style={styles.picker}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Selecione a opção" value="" />
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Feminino" value="feminino" />
              </Picker>
            </View>
            <View style={styles.inputContainer}>
              <RectButton style={styles.registerButton} onPress={handleNavigateHome}>
                <Text style={styles.buttonText}>
                  CADASTRE-SE
                </Text>

              </RectButton>
            </View>
          </ScrollView>
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
  scroll: {
  },

  main: {
    flex: 1,
    marginTop: 25,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 8,
  },

  form: {
    flex: 2,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 100,
    borderTopStartRadius: 100,
    marginTop: 20,
    paddingTop: 15,
  },



  img: {
    marginTop: 30,
  },

  button: {
    justifyContent: 'center',
    backgroundColor: '#28407C',
    height: 60,
    width: 250,
    flexDirection: 'row',
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 250,
    margin: 5,
    marginTop: 15,
  },

  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 18,
    borderColor: 'black',
  },

  input: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 18,
    borderColor: 'black',
    paddingHorizontal: 24,
    fontSize: 12,
  },
  Textlabel: {
    color: 'black',
    marginBottom: 11,
  },

  buttonText: {
    flex: 1,
    height: 55,
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 44,
    color: '#FAFAFA',
    borderRadius: 25,
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;