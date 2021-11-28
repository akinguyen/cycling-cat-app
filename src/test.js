import React, { useState } from "react";
import { Text, View, Image, TextInput, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from './Welcome/index';
import { login } from './login/index';
export function test ({ navigation }) {
    return (

                <View style = {{ flex:1, justifyContent:"space-around", alignItems:"center"}}>
                    <Button title = "Enter" onPress={()=>navigation.navigate('Welcome')}/>
                    <Button title = "Another" onPress={()=>navigation.navigate('login')}/>
                </View>

    )
        
}   