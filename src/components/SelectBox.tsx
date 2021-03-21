import RNPickerSelect from 'react-native-picker-select';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
export const Dropdown = () => {
    return (
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Masculino', value: 'masculino' },
                { label: 'Feminino', value: 'feminino' },
            ]}
            
        >
            <Text style={styles.text}>
                Selecione o seu genero
            </Text>

        </RNPickerSelect>
    );
};

const styles = StyleSheet.create({

    text:{
        color:"#a7a2a2",
        borderWidth: 1,
        width:"115%",
        padding:5,
    },
    
})