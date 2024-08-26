import { Text, View, Button, StyleSheet, Image } from 'react-native'
import { ScrollView,TouchableOpacity } from 'react-native-gesture-handler'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesone5 } from '@expo/vector-icons'

export const Ofertas = () => {
    return(
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.contenedorPrincipal}> 
                    <View style={styles.subContenedor}>
                        <Text style={styles.titulo}>Diseñador Grafico</Text>
                        <Text style={styles.texto}>Tres Pi Medios</Text>
                        <Image source={require('../img/Tres.webp')} style={{ width: 100, height: 100, marginTop: 5 }} />
                        <TouchableOpacity style={styles.cajaBoton}>
                            <Text style={styles.textoBoton}>
                            Postularse</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subContenedor}>
                        <Text style={styles.titulo}>Analista de datos</Text>
                        <Text style={styles.texto}>Softcell</Text>
                        <Image source={require('../img/Softcell.png')} style={{ width: 100, height: 100, marginTop: 5 }} />
                        <TouchableOpacity style={styles.cajaBoton}>
                            <Text style={styles.textoBoton}>
                            Postularse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.espaciado}></View>
                <View style={styles.contenedorPrincipal}> 
                    <View style={styles.subContenedor}>
                        <Text style={styles.titulo}>Desarrollador Front-end</Text>
                        <Text style={styles.texto}>Intuitiva Web</Text>
                        <Image source={require('../img/Intuitiva.png')} style={{ width: 100, height: 100, marginTop: 5 }} />
                        <TouchableOpacity style={styles.cajaBoton}>
                            <Text style={styles.textoBoton}>
                            Postularse</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subContenedor}>
                        <Text style={styles.titulo}>Tecnologo en Software Backend</Text>
                        <Text style={styles.texto}>Foonkie Monkey</Text>
                        <Image source={require('../img/Foonkie.jpg')} style={{ width: 140, height: 100, marginTop: 5 }} />
                        <TouchableOpacity style={styles.cajaBoton}>
                            <Text style={styles.textoBoton}>
                            Postularse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.espaciado}></View>
                <View style={styles.contenedorPrincipal}> 
                    <View style={styles.subContenedor}>
                        <Text style={styles.titulo}>Desarrollador React-Native</Text>
                        <Text style={styles.texto}>MAS Global Consulting</Text>
                        <Image source={require('../img/MAS.png')} style={{ width: 100, height: 100, marginTop: 5 }} />
                        <TouchableOpacity style={styles.cajaBoton}>
                            <Text style={styles.textoBoton}>
                            Postularse</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subContenedor}>
                        <Text style={styles.titulo}>Desarrollador Front-end y Back-end</Text>
                        <Text style={styles.texto}>Koombea</Text>
                        <Image source={require('../img/Koombea.webp')} style={{ width: 100, height: 100, marginTop: 5 }} />
                        <TouchableOpacity style={styles.cajaBoton}>
                            <Text style={styles.textoBoton}>
                            Postularse</Text>
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
        backgroundColor: '#d7dbdd',
        margin: 5
    },

    contenedorPrincipal: {
        flexDirection: 'row',
        justifyContent:'space-between', 
        display: 'flex',
        margin:'5px 5px 0 5px',  
        borderRadius: 20, 
        width: '100%',
        padding: '0 20px',
        alignContent: 'center', 
        alignItems: 'center', 
    },

    subContenedor: {
        borderColor: '#10b11a', 
        borderWidth: 2, 
        flexDirection: 'column', 
        display: 'flex',
        margin: 0, 
        borderRadius: 5, 
        padding: '5px', 
        alignItems: 'flex-start',
        width: '47%',
        justifyContent: 'center', 
        alignItems: 'center'
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
    },

    cajaBoton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#10b11a', 
        borderRadius: 30, 
        paddingVertical: 15,
        width: 100, 
        marginTop: 10,
    },

    textoBoton: {
        textAlign: 'center', 
        color: 'white', 
        paddingHorizontal: 10
    },

    espaciado: {
        height: 8
    }
})

export default Ofertas