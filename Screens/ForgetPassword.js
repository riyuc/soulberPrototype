import React from 'react';
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import backgroundMountain from '../assets/images/soulberMountain.jpeg';


const OnboardingLogin = ({navigation}) =>{
    return (
        <View style={styles.mainView}>
            <Ionicons
             onPress={() => navigation.navigate('OnboardingScreen', {name: 'OnboardingScreen'})}
             name="chevron-back-circle-sharp" 
             size={40} 
             style={{marginLeft:20 }} 
             color="#44cc9c" />
            <Text style={styles.Heading}> Forgot Password? </Text>
            <View style={styles.formView}>
                <Text style={styles.usernameText}> Email Address </Text>
                <TextInput placeholder ={"Email address*"} secureTextEntry={false} placeholderTextColor={"gray"} style ={styles.TextInput}/>
                <TouchableOpacity style={styles.signInButton}>
                    <Text style={styles.buttonText}> Submit</Text>
                </TouchableOpacity>
            </View>
            <ImageBackground
                resizeMode="cover"
                source={backgroundMountain}
                style={styles.backgroundImage}>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
                
    },  
    mainView: {
        flex:1,
        flexDirection: 'column',
        marginTop: 40,
    },
    Heading: {
        color: "#000",
        fontSize: 25,
        fontWeight: '900',
        alignSelf: 'left',
        paddingLeft: 20,
        paddingTop: 80,
    },
    formView: {
        width: '100%',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        marginTop: 10,

    },
    TextInput: {
        height: 52,
        width: '85%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 7,
        marginTop: 10,

    },
    usernameText: {
        color: '#000',
        fontSize: 14,
        alignSelf: 'left',
        paddingLeft: 25,
        fontWeight :'600',
        marginTop: 20,
    },
    signInButton: {
        width:'85%',
        color: '#44cc9c',
        height: 52,
        backgroundColor: '#44cc9c',
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    keepSignedInContainer: {
        alignSelf: 'left', paddingLeft: 40, marginTop: 10, 

    },
    keepSignedInText: {
        fontWeight: '600',
        paddingRight: 100,
    },
    utilityRegisterFunction: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'left', paddingLeft: 30, marginTop: 15, 

    },
    forgotPassword:{
        color: '#9cadac',
        marginHorizontal: 10,

    },
    newUser:{
        color: '#9cadac',
        marginHorizontal: 10,

    },

});
export default OnboardingLogin;