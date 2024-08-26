import { Text, View, StyleSheet, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesone5 } from '@expo/vector-icons'

export const Acerca = () => {
    return(
        <View style={styles.body}>
            <View style={styles.cuadroPrincipal}>
                <Text style={styles.titulo}>NOSOTROS</Text>
                <View style={styles.contenido}>
                    <Image source={require('../img/logoSena.png')} style={styles.imagenNosotros}/> 
                    <Text style={styles.texto}>Somos una empresa dedicada a conectar aprendices del SENA con oportunidades 
                        laborales que les permitan aplicar y desarrollar sus habilidades en el mundo real. 
                    </Text>
                </View>
            </View>
            <View style={styles.espaciado}></View>
            <View style={styles.cuadroPrincipal}>
                <Text style={styles.titulo}>MISIÓN</Text>
                <View style={styles.contenido}>
                    <Image source={require('../img/Mision.jpg')} style={styles.imagenMision}/> 
                    <Text style={styles.texto}>Nuestra misión es ser el puente entre el talento emergente 
                    y las empresas que buscan innovación, fomentando el crecimiento profesional de jóvenes 
                    que están listos para contribuir al éxito de las organizaciones. 
                    </Text>
                </View>
            </View>
            <View style={styles.espaciado}></View>
            <View style={styles.cuadroPrincipal}>
                <Text style={styles.titulo}>VISIÓN</Text>
                <View style={styles.contenido}>
                    <Image source={require('../img/Vision.jpg')} style={styles.imagenMision}/> 
                    <Text style={styles.texto}>Ser la plataforma líder en Colombia para la inserción laboral 
                        de aprendices del SENA, brindando oportunidades equitativas y de calidad que impulsen 
                        el crecimiento profesional de jóvenes talentos. 
                    </Text>
                </View>
            </View>
            <View style={styles.espaciado}></View>
            <View style={styles.cuadroPrincipal}>
                <Text style={styles.titulo}>¡TE AYUDAMOS A ENCONTRAR UN EMPLEO MEJOR!</Text>
                <View style={styles.contenido}>
                    <Text style={styles.texto2}>✓ Registro gratuito. </Text>
                    <Text style={styles.texto3}>Encuentra tu próximo trabajo hoy.</Text>
                </View>
                <View style={styles.contenido}>
                    <Text style={styles.texto2}>✓ Ofertas cada día. </Text>
                    <Text style={styles.texto3}>Empleos que se ajustan a tu perfil.</Text>
                </View>
                <View style={styles.contenido}>
                    <Text style={styles.texto2}>✓ Alertas personalizadas. </Text>
                    <Text style={styles.texto3}>Tú crea alertas de empleo y nosotros te avisaremos.</Text>
                </View>
                <View style={styles.contenido}>
                    <Text style={styles.texto2}>✓ Completa tu perfil. </Text>
                    <Text style={styles.texto3}>Muéstrate profesional y ganarás visibilidad.</Text>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d7dbdd'
    },

    cuadroPrincipal: {
        backgroundColor: '#10b11a', 
        flexDirection: 'column', 
        display: 'flex',
        margin: 0, 
        borderRadius: 8, 
        width: '90%',
        padding: '5px', 
        alignItems: 'center',
        justifyContent: 'center'
    },

    imagenNosotros: {
        height: 90,
        width: 90, 
        marginRight: 10,
    },

    contenido: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center', 
    },

    titulo: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'DMSerifText-Regular',
        fontWeight: 'bold', 
        alignSelf: 'center'
    },

    texto: {
        color: 'white',
        fontSize: 12,
        marginLeft: 10
    },

    imagenMision: {
        height: 90,
        width: 90, 
        marginRight: 10,
        borderRadius: 10, 
    },

    espaciado: {
        height: 12
    }, 

    texto2: {
        fontWeight: 'bold', 
        color: 'white',
        fontSize: 12,
    },

    texto3: {
        color: 'white',
        fontSize: 12,
    }

})

export default Acerca