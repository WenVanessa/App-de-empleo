import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Login() {

    const navigation = useNavigation();

    return (
      <View style={styles.body}>

        <View>
            <Image source={require('../img/Logo.png')} style={styles.Logo}/>
        </View>
        <View style={styles.Tarjeta}>
            <View style={styles.cajaTexto}>
                <TextInput placeholder='correo@gmail.com' style={{paddingHorizontal:15}} />
            </View>
            <View style={styles.cajaTexto}>
                <TextInput placeholder='Constraseña' style={{paddingHorizontal:15}} secureTextEntry={true} />
            </View>
            <View style={styles.botonGeneral}>
                <TouchableOpacity style={styles.cajaBoton}>
                    <Text style={styles.textoBoton} onPress={() => navigation.navigate('HomeScreen')}>
                        Ingresar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cajaBoton}>
                    <Text style={styles.textoBoton} onPress={() => navigation.navigate('Registro')}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d7dbdd'
    },

    Logo:{
        width: 130,
        height: 130,
        borderRadius: 60,
    },

    Tarjeta:{
        margin:20, 
        backgroundColor: 'white',
        borderRadius: 20, 
        width: '90%',
        padding: 20,
        shadowColor: '#000', 
        shadowOffset: {
            width: 0, 
            height: 2, 
        }, 
        shadowOpacity: 0.25, 
        shadowRadius: 4, 
        elevation: 5, 
    },

    cajaTexto:{
        paddingVertical: 15,
        backgroundColor: '#cccccc50', 
        borderRadius: 30,
        marginVertical: 10,
    }, 

    botonGeneral:{
        alignItems: 'center', 
    },

    cajaBoton: {
        backgroundColor: '#10b11a', 
        borderRadius: 30, 
        paddingVertical: 15,
        width: 110, 
        marginTop: 15,
    },

    textoBoton: {
        textAlign: 'center', 
        color: 'white'
    }
}); 
