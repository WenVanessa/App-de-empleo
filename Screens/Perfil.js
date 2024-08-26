import { Text, View, Button, StyleSheet, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import React, { Component } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

export const Perfil = () => {
    return(
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.incioPerfil}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', fontFamily: 'DMSerifText-Regular'}}>Wendy López</Text>
                        <Text>Diseñador web</Text>
                    </View>
                    <Image source={require('../img/Perfil3.png')} style={styles.imagenPerfil} />
                </View>
                <View style={{height: 5}}></View>
                <View style={styles.inter}>
                    <View style={styles.Encabezado}>
                        <Text style={styles.titulo}>ACERCA DE MI</Text>
                        <Feather name="edit" size={19} color="green" style={{marginLeft: 175}} />
                    </View>
                    <Text style={styles.texto}>
                        Soy técnico en programación de
                        software con experiencia en HTML, CSS
                        y PHP y preparación adicional en
                        Python y otras tecnologías, estoy
                        mejorando mis habilidades mientras
                        estudio un tecnólogo en análisis y
                        desarrollo de software.
                    </Text>
                </View>
                <View style={{height: 5}}></View>
                <View style={styles.inter}>
                    <View style={styles.Encabezado}>
                        <Text style={styles.titulo}>SKILLS</Text>
                        <Feather name="edit" size={19} color="green" style={{marginLeft: 175}} />
                    </View>
                    <Text style={styles.texto}>✓ HTML</Text>
                    <View style={styles.espacioSkills} />
                    <Text style={styles.texto}>✓ CSS</Text>
                    <View style={styles.espacioSkills} />
                    <Text style={styles.texto}>✓ PHP</Text>
                    <View style={styles.espacioSkills} />
                    <Text style={styles.texto}>✓ Python</Text>
                    <View style={styles.espacioSkills} />
                    <Text style={styles.texto}>✓ JavaScript</Text>
                    <View style={styles.espacioSkills} />
                    <Text style={styles.texto}>✓ MySQL</Text>
                    <View style={styles.espacioSkills} />
                    <Text style={styles.texto}>✓ Java</Text>
                </View>
                <View style={{height: 5}}></View>
                <View style={styles.inter}>
                    <View style={styles.Encabezado}>
                        <Text style={styles.titulo}>EDUCACIÓN</Text>
                        <Feather name="edit" size={19} color="green" style={{marginLeft: 175}} />
                    </View>
                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>
                        •TECNOLOGO EN ANALISIS Y DESARROLLO DE SOFTWARE
                    </Text>
                    <Text style={styles.texto}>
                        Servicio Nacional de Aprendizaje (SENA)
                    </Text>
                    <Text style={styles.texto}>
                        Bogotá D.C, Colombia | 01/2024 – presente
                    </Text>
                    <View style={styles.espacioEducacion} />

                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>
                        •TECNICO EN PROGRAMACIÓN DE SOFTWARE
                    </Text>
                    <Text style={styles.texto}>
                        Bogotá D.C, Colombia | 02/2022 - 11/2023
                    </Text>
                    <Text style={styles.texto}>
                        Servicio Nacional de Aprendizaje (SENA)
                    </Text>
                    <View style={styles.espacioEducacion} />

                    <Text style={[styles.texto, {fontWeight: 'bold'}]}>
                        •CURSO EN CODIFICACIÓN Y PROGRAMACIÓN EN PYTHON
                    </Text>
                    <Text style={styles.texto}>
                        Samsung Electronics Colombia, La Universidad del Rosario y La Escuela de administración
                    </Text>
                    <Text style={styles.texto}>
                        Bogotá D.C, Colombia | 11/2022 - 04/2023
                    </Text>
                </View>
                <View>
                    <View style={styles.botonGeneral}>
                        <TouchableOpacity style={styles.cajaBoton}>
                            <MaterialIcons name="create" size={20} color="white" />
                            <Text style={styles.textoBoton}>
                            Crear HDV</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.botonGeneral}>
                        <TouchableOpacity style={styles.cajaBoton}>
                            <AntDesign name="upload" size={20} color="white" />
                            <Text style={styles.textoBoton}>
                            Subir HDV</Text>
                        </TouchableOpacity>
                    </View>
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

    incioPerfil: {
        flexDirection: 'row', 
        display: 'flex',
        margin:'5px 5px 0 5px',  
        borderRadius: 20, 
        width: '90%',
        padding: '0 20px',
        alignContent: 'center', 
        alignItems: 'center', 
    },

    imagenPerfil: {
        width: 65, 
        height: 65, 
    },

    inter: {
        borderColor: '#10b11a', 
        borderWidth: 2, 
        flexDirection: 'column', 
        display: 'flex',
        margin: 0, 
        borderRadius: 5, 
        width: '90%',
        padding: '5px', 
        alignItems: 'flex-start',
    },

    Encabezado: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 5,
    },

    titulo: {
        fontSize: 15,
        color: '#10b11a',
        fontFamily: 'DMSerifText-Regular',
        fontWeight: 'bold'
    }, 

    texto: {
        color: 'black',
        fontSize: 12,
        textAlign: 'left'
    },

    espacioSkills: {
        marginTop: 2
    }, 

    espacioEducacion: {
        marginTop: 4
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



})

export default Perfil