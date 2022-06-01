import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const OnboardingRegister = () =>{
    return (
        <View style={styles.mainView}>
            <View style={styles.topView}></View>
            <View style={styles.bottomView}>
                <Text style={styles.Heading}> Welcome {'\n'} Back! </Text>
                <View style={styles.formView}>
                    <Text style={styles.usernameText}> Username </Text>
                    <TextInput placeholder ={"Email address*"} secureTextEntry={false} placeholderText={"#fff"} style ={styles.TextInput}/>
                    <Text style={styles.usernameText}> Password </Text>
                    <TextInput placeholder ={"Password"} secureTextEntry={true} placeholderText={"#fff"} style ={styles.TextInput}/>
                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.ButtonText}> Sign-in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        marginTop:40,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topView: {
        width:'100%',
        height:'20%',
    },
    bottomView: {
        width:'100%',
        height:'80%',
        backgroundColor: "#11a24a",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        resizeMode: 'contain',
    },
    Heading: {
        color: "#fff",
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 30,
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
        width: '90%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        paddingLeft: 7,
        marginTop: 20,

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
        width:'90%',
        color: '#000',
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default OnboardingRegister;