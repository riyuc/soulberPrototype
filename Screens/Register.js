import React from 'react';
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import backgroundMountain from '../assets/soulberMountain.jpeg';


const Signed = ({navigation}) =>{
    return (
        <ScrollView style={styles.mainView}>
            <Ionicons
             onPress={() => navigation.navigate('OnboardingLogin', {name: 'OnboardingLogin'})}
             name="chevron-back-circle-sharp" 
             size={40} 
             style={{marginLeft:15 }} 
             color="#44cc9c" />
            <Text style={styles.Heading}> Register </Text>
            <View style={styles.formView}>
                <Text style={styles.usernameText}> First Name </Text>
                <TextInput placeholder ={"First Name*"} secureTextEntry={false} placeholderTextColor={"gray"} style ={styles.TextInput}/>
                <Text style={styles.usernameText}> Last Name </Text>
                <TextInput placeholder ={"Last Name"} secureTextEntry={true} placeholderTextColor={"gray"} style ={styles.TextInput}/>
                <Text style={styles.usernameText}> Email </Text>
                <TextInput placeholder ={"ex: james@gmail.com*"} secureTextEntry={false} placeholderTextColor={"gray"} style ={styles.TextInput}/>
                <Text style={styles.usernameText}> Password </Text>
                <TextInput placeholder ={"Password*"} secureTextEntry={true} placeholderTextColor={"gray"} style ={styles.TextInput}/>
                <Text style={styles.usernameText}> Confirm Password </Text>
                <TextInput placeholder ={"Confirm Password *"} secureTextEntry={true} placeholderTextColor={"gray"} style ={styles.TextInput}/>
                <Text style={styles.usernameText}> Phone Number </Text>
                <TextInput placeholder ={"ex: 123-456-7890"} secureTextEntry={false} placeholderTextColor={"gray"} style ={styles.TextInput}/>
                <Text style={styles.usernameText}> Choose State </Text>
                <TextInput placeholder ={"Email address*"} secureTextEntry={false} placeholderTextColor={"gray"} style ={styles.TextInput}/>
                <View style={styles.keepSignedInContainer}>  
                    <BouncyCheckbox 
                        style={{
                            marginTop: 7,
                        }}
                        fillColor="#44cc9c"
                        size={25}
                        text="I Accept Terms & Conditions"
                        textStyle={{
                            textDecorationLine: "underline",
                            fontWeight: "700",
                            fontSize: "13",
                            color: "#000",
                          }}
                        />
                </View>
                <TouchableOpacity style={styles.signInButton}>
                    <Text style={styles.buttonText}> Proceed</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.alreadyAMemberButton}
                onPress={() => navigation.navigate('OnboardingLogin', {name: 'OnboardingLogin'})}
                >
                    <Text style={styles.buttonText}> Already a member?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
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
    alreadyAMemberButton: {
        width:'85%',
        height: 52,
        backgroundColor: '#2109e0',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 50,
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
        alignSelf: 'left', paddingLeft: 35, marginTop: 10, 

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
export default Signed;