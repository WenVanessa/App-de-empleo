import { Text, View, Button, StyleSheet, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo';
import { TextInput } from 'react-native-gesture-handler'
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function HomeScreen(){
    return(
        <ScrollView>
            <View style={styles.body}>
                <View style={{marginTop: 10}}></View>
                <Text style={styles.titulo}>¡BIENVENIDO!</Text>
                <View style={styles.espacio}></View>
                <Text>Hoy hay mas de 1.876 empresas esperando por ti</Text>
                <View style={styles.buscador}> 
                    <View style={styles.cajaTexto}>
                        <FontAwesome5 name="suitcase" size={22} color="green" style={styles.icon} />
                        <TextInput placeholder='Cargo o categoria' style={styles.textInput} />
                    </View>
                    <View style={styles.cajaTexto}>
                        <Entypo name="location" size={22} color="green" style={styles.icon} />   
                        <TextInput placeholder='Lugar' style={styles.textInput} />
                    </View>
                    <View style={styles.botonGeneral}>
                        <TouchableOpacity style={styles.cajaBoton}>
                            <FontAwesome name="search" size={20} color="white" style={styles.icon} />
                            <Text style={styles.textoBoton}>
                                Buscar empleo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.texto}>Últimos empleos publicados de tu interes</Text>
                <View style={styles.empleo1}>
                    <Text style={{fontSize: 15, color: 'green'}}>Desarrollador front-end Junior</Text>
                    <Text>Sigma Studios</Text>
                    <Image source={require('../img/Sigma.png')} style={{ width: 50, height: 50 }} />
                    <Text style={{fontSize: 10}}>$1.5 a $2.0</Text>
                </View>
                <View style={styles.empleo1}>
                    <Text style={{fontSize: 15, color: 'green'}}>Desarrollador back-end Junior</Text>
                    <Text>Expiey</Text>
                    <Image source={require('../img/Expiey.webp')} style={{ width: 50, height: 50, marginTop: 5 }} />
                    <Text style={{fontSize: 10, marginTop: 3}}>$1.5 a $2.0</Text>
                </View>
                <View style={{height: 10}}></View>
                <Text style={styles.texto}>Envia tu hoja de vida a las mejores empresas</Text>
                <View style={styles.empleos}> 
                    <Image source={require('../img/AMD.png')} style={styles.imagenEmpleos} />
                    <Image source={require('../img/Design.png')} style={styles.imagenEmpleos} />
                    <Image source={require('../img/Blue.png')} style={styles.imagenEmpleos} />
                    <Image source={require('../img/Pixelpro.png')} style={styles.imagenEmpleos} />
                    <TouchableOpacity style={styles.botonEmpleo}>
                    <Text style={styles.textoBotonEmpleo}>
                        Ver todas las empresas</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d7dbdd'
    }, 

    buscador: {
        borderColor: '#10b11a',
        borderWidth: 2, 
        margin:20, 
        backgroundColor: 'white',
        borderRadius: 20, 
        width: '90%',
        padding: 20,
        alignContent: 'center', 
        alignItems: 'center', 
        shadowColor: '#000', 
        shadowOffset: {
            width: 0, 
            height: 2, 
        }, 
        shadowOpacity: 0.25, 
        shadowRadius: 4, 
        elevation: 5, 
    }, 

    titulo: {
        fontFamily: 'DMSerifText-Regular',
        fontSize: 25,
    },

    texto: {
        fontFamily: 'DMSerifText-Regular',
        fontSize: 23,
        textAlign: 'center', 
    },

    espacio: {
        height: 5, 
    },

    cajaTexto:{
        borderColor: '#10b11a',
        borderWidth: 2,
        flex: 1,
        alignItems: 'stretch', 
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 30,
        marginVertical: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: 300,
    }, 

    icon: {
        marginLeft: 5,
    },

    textInput: {
        flex: 1,
        paddingHorizontal: 10,
    },

    botonGeneral:{
        alignItems: 'center', 
    },

    cajaBoton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#10b11a', 
        borderRadius: 30, 
        paddingVertical: 15,
        width: 300, 
        marginTop: 10,
    },

    textoBoton: {
        textAlign: 'center', 
        color: 'white', 
        paddingHorizontal: 10
    },

    empleo1: {
        margin:5, 
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

    empleos: {
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent:'space-between', 
        alignItems: 'center',
        alignContent: 'center', 
        margin:5, 
        backgroundColor: 'white',
        borderRadius: 20, 
        width: '90%',
        padding: 30,
        shadowColor: '#000', 
        shadowOffset: {
            width: 0, 
            height: 2, 
        }, 
        shadowOpacity: 0.25, 
        shadowRadius: 4, 
        elevation: 5, 
    }, 

    imagenEmpleos: {
        width: '90px', 
        height: '90px', 
        marginTop: 5, 
    }, 

    botonEmpleo: {
        borderColor: '#10b11a',
        borderWidth: 2, 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'white', 
        borderRadius: 30, 
        paddingVertical: 15,
        width: 265, 
        marginTop: 10,
        alignSelf: 'center', 
    }, 

    textoBotonEmpleo: {
        textAlign: 'center', 
        color: '#10b11a', 
        paddingHorizontal: 10,  
    },
    
})

