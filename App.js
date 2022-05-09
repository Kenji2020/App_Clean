import React, {useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import PostScreen from "./Screens/PostScreen"
import AreaPsicologia from "./Screens/AreaPsicologia";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CrearBlogScreen from "./Screens/CrearBlogScreen";
import DescripcionPsicologos from "./Screens/DescripcionPsicologos";

const Stack = createNativeStackNavigator();
export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
                <Stack.Screen options={{headerShown: false}} name="RegisterScreen" component={RegisterScreen}/>
                <Stack.Screen options={{headerShown: false}} name="PostScreen" component={PostScreen}/>
                <Stack.Screen options={{headerShown: false}} name="CrearBlogScreen" component={CrearBlogScreen}/>
                <Stack.Screen options={{headerShown: false}} name="AreaPsicologia" component={AreaPsicologia}/>
                <Stack.Screen options={{headerShown: false}} name="DescripcionPsicologos" component={DescripcionPsicologos}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
