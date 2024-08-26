import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native'; 
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import { DrawerActions } from '@react-navigation/native';

// SCREEN 
import HomeScreen from './Screens/HomeScreen'; 
import Login from "./Screens/Login";
import Registro from "./Screens/Registro";
import Perfil from "./Screens/Perfil";
import Acerca from "./Screens/Acerca";
import Ofertas from "./Screens/Ofertas";
import CustomDrawerContent from "./CustomDrawerContent";

const Stack = createNativeStackNavigator(); 

function MyStack() {
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Ingresar" 
                component={Login} 
                options={{
                    fontFamily: 'DMSerifText-Regular',
                    title: "TRABAJASENA - INGRESAR",
                    headerTintColor: "white", 
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#10b11a'},
                }} 
            />
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    fontFamily: 'DMSerifText-Regular',
                    title: "HOME",
                    headerTintColor: "white", 
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#10b11a'},
                    headerLeft: () => {
                        return(
                            <AntDesign  
                            name="menu-fold" 
                            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
                            size={24} 
                            color="white" 
                            style={{ marginLeft: 15 }} 
                            />
                        )
                    }
                }}
            />
            <Stack.Screen 
                name="Registro" 
                component={Registro}
                options={{
                    fontFamily: 'DMSerifText-Regular',
                    title: "TRABAJASENA - REGISTRO",
                    headerTintColor: "white", 
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#10b11a'},
                }} 
            />

            <Stack.Screen 
                name="Perfil" 
                component={Perfil}
                options={{
                    fontFamily: 'DMSerifText-Regular',
                    title: "PERFIL",
                    headerTintColor: "white", 
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#10b11a'},
                    headerLeft: () => {
                        return(
                            <AntDesign  
                            name="menu-fold" 
                            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
                            size={24} 
                            color="white" 
                            style={{ marginLeft: 15 }} 
                            />
                        )
                    }
                }} 
            />     

            <Stack.Screen 
                name="Acerca" 
                component={Acerca}
                options={{
                    fontFamily: 'DMSerifText-Regular',
                    title: "ACERCA DE NOSOTROS",
                    headerTintColor: "white", 
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#10b11a', fontSize: '12px'},
                    headerLeft: () => {
                        return(
                            <AntDesign  
                            name="menu-fold" 
                            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
                            size={24} 
                            color="white" 
                            style={{ marginLeft: 15 }} 
                            />
                        )
                    }
                }} 
            /> 

            <Stack.Screen 
                name="Ofertas" 
                component={Ofertas}
                options={{
                    fontFamily: 'DMSerifText-Regular',
                    title: "OFERTAS",
                    headerTintColor: "white", 
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#10b11a'},
                    headerLeft: () => {
                        return(
                            <AntDesign  
                            name="menu-fold" 
                            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
                            size={24} 
                            color="white" 
                            style={{ marginLeft: 15 }} 
                            />
                        )
                    }
                }} 
            /> 

        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator 
        drawerContent={props => <CustomDrawerContent {...props}/>}
        screenOptions={{
            headerShown: false
        }}> 
            <Drawer.Screen name="Home" component={MyStack}/>
        </Drawer.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
        {/*             <MyStack /> */}
            <MyDrawer />
        </NavigationContainer>
    );
}
