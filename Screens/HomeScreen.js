import React, {useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, ScrollView, Dimensions, FlatList, KeyboardAvoidingView} from 'react-native';
import { Input, Button,Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {db} from "../firebase";
import {useNavigation} from "@react-navigation/native";
export default function HomeScreen({info}) {
    const [datos, setDatos] = useState([])
    const navigation = useNavigation()
    //obtener datos de la base de datos
    console.log(datos)
    useEffect(()=>{
        db.collection('Inventario').onSnapshot(querySnapshot=>{
            const lista = []
            querySnapshot.docs.forEach(doc=>{
                const {name, description, tags, nickname} = doc.data()
                lista.push({
                    id:doc.id,name,description,tags, nickname
                })

            })
            setDatos([...lista])
        })

    },[])
    const renderItem = ({item})=>{
        return(
            <View>

                <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{backgroundColor: '#e1e1e1'}}>
                                <Card containerStyle={{marginLeft:30, marginRight:30, marginTop:35, height:300, marginBottom:35}} wrapperStyle={{}}>
                                    <Card.Title onPress={()=>{navigation.navigate('PostScreen',{userId: item.id})}}>{item.name}</Card.Title>
                                    <Card.Divider />
                                    <View
                                        style={{
                                            position: "relative",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Image
                                            style={{ width: "100%", height: 200 }}
                                            resizeMode="contain"
                                            source={require("../assets/icon.png")}
                                        />
                                        <Text>{item.nickname}</Text>
                                    </View>
                                </Card>

                            </View>

                </ScrollView>

            </View>
        )
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={{marginBottom:40} }>
            <View>

           <FlatList data={datos} renderItem={renderItem} keyExtractor={x=>x.id} showsVerticalScrollIndicator={false}
           />
            </View>
            <View style={{marginTop:-20}}>
                <Button title='hola' onPress={()=>{navigation.navigate('CrearBlogScreen')}} />
            </View>

        </KeyboardAvoidingView>
    );

}
