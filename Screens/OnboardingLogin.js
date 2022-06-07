import React from 'react';
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import backgroundMountain from "../assets/images/soulberMountain.jpeg";


const OnboardingLogin = ({navigation}) =>{
    return (
        <View style={styles.mainView}>
            <Ionicons
             onPress={() => navigation.navigate('OnboardingScreen', {name: 'OnboardingScreen'})}
             name="chevron-back-circle-sharp" 
             size={40} 
             style={{marginLeft:15 }} 
             color="#44cc9c" />
            <Text style={styles.Heading}> SIGN IN </Text>
            <View style={styles.formView}>
                <Text style={styles.usernameText}> Username </Text>
                <TextInput placeholder ={"Email address*"} secureTextEntry={false} placeholderTextColor={"gray"} style ={styles.TextInput}/>
                <Text style={styles.usernameText}> Password </Text>
                <TextInput placeholder ={"Password"} secureTextEntry={true} placeholderTextColor={"gray"} style ={styles.TextInput}/>
                <View style={styles.keepSignedInContainer}>  
                    <BouncyCheckbox 
                        style={{
                            marginTop: 7,
                        }}
                        fillColor="#44cc9c"
                        size={25}
                        text="Keep me Signed In"
                        textStyle={{
                            textDecorationLine: "none",
                            fontWeight: "700",
                            fontSize: "13",
                            color: "#000",
                          }}
                        />
                </View>
                <View style={styles.utilityRegisterFunction}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgetPassword', {name: 'ForgetPassword'})}

                    >
                        <Text style={styles.forgotPassword}>Forgot password?</Text>
                    </TouchableOpacity>   
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register', {name: 'Register'})} 
                    >
                        <Text style={styles.newUser}>New to Soulber?</Text>
                    </TouchableOpacity>   
                </View>
                <TouchableOpacity 
                    style={styles.signInButton}
                    onPress={() => navigation.navigate('TabNavigator', {name: 'TabNavigator'})}>
                    <Text style={styles.buttonText}> Login</Text>
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
    },  
    mainView: {
        flex:1,
        flexDirection: 'column',
        marginTop: 40,
    },
    Heading: {
        color: "#000",
        fontSize: 25,
        fontWeight: '500',
        alignSelf: 'center',
        paddingBottom: 40,
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