import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import profileImage from '../assets/images/profileImage.png';
import functionData from '../assets/data/functionData';
import sobrietyData from '../assets/data/sobrietyData';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';





Feather.loadFont();


const Home = ({navigation}) => {
    const [loaded] = useFonts({
        Lato: require('../assets/fonts/Lato-Bold.ttf'),
      });
    const renderFunctionData = ({item}) => {
        return(
        <View style={styles.functionItemWrapper}>
            <TouchableOpacity style={styles.functionItemCard}
                onPress={() => navigation.navigate(item.title)}
            >
                <Entypo name={item.id} size={30} color="black" style ={styles.functionItemIcon}/>
                <Text style ={styles.functionText}>{item.title}</Text>
            </TouchableOpacity>
        </View>
        );
    };
    const renderSobrietyData = ({item}) => {
        return (    
            <View style={styles.mySobrietyCardWrapper}>
                <View style={styles.mySobrietyItemCard}>
                    <FontAwesome5 name={item.icon} size={100} color="black" style ={styles.sobrietyIcon}/>
                    <View style={styles.mySobrietyText}>
                        <Text style ={styles.mySobrietyHeader}>{item.header}</Text>
                        <Text style ={styles.mySobrietyDescription}>{item.description}</Text>
                        <Text style ={styles.mySobrietyFootNote}>{item.footNote}</Text>
                    </View>
                 </View>    
            </View>

        );
    };
    
    
    return (
        <View style= {styles.container}>
            <ScrollView>
                <SafeAreaView>
                    {/* Header */}
                    <View style= {styles.menuWrapper}>
                        <Feather 
                            name ="menu"
                            size = {26}
                            color="#000000"
                            style= {styles.menuIcon}
                        /> 
                        <Feather 
                            name="bell"
                            size={22} 
                            color="black"
                            style= {styles.bellIcon} />
                    </View>
                    <View style={styles.welcomeWrapper}>
                        <Text style={styles.welcomeText}>
                            Good Morning, {'\n'}John!
                        </Text>
                        <Image source={profileImage} style = {styles.profileImage} />
                    </View>
                    {/* appFunctions */}
                    <View style= {styles.functionApp}>
                        <View style= {styles.functionAppWrapper}>
                            <View style={styles.functionWrapper}>
                                <FlatList
                                    onpress={() => navigation.navigate(item.title)}
                                    data = {functionData}
                                    renderItem = {renderFunctionData}
                                    keyExtractor = {(item) => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator = {false}
                                />
                            </View>
                        </View>
                    </View>
                    {/* MySobriety */}
                    <View style={styles.sobrietyWrapper}>
                        <View style={styles.mySobietyTextWrapper}>
                            <Text style={styles.mySobietyText}>My Sobriety</Text>
                            <Text 
                                onPress={()=> navigation.navigate('OnboardingLogin', {name: 'Login'})} 
                                style={styles.viewAllSobrietyText}
                            >
                                View All
                            </Text>
                        </View>
                    </View>
                    <View style= {styles.functionApp}>
                        <View style= {styles.functionAppWrapper}>
                            <View style={styles.functionWrapper}>
                                <FlatList
                                    data = {sobrietyData}
                                    renderItem = {renderSobrietyData}
                                    keyExtractor = {(item) => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator = {false}
                                />
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{

    },
    menuWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    menuIcon: {
        paddingLeft: 25,
    },
    bellIcon: {
        alignSelf: 'flex-end',
        paddingRight: 25,
    },
    profileImage: {
        height: 75,
        width: 75,
        marginRight: 30,
        marginTop: 40,
    },
    welcomeText: {
        fontFamily: 'Lato',
        fontWeight: 'bold',
        fontSize: 30,
        paddingLeft: 25,
        paddingTop: 35,
        lineHeight: 50,
        color: '#02154d'
    },
    welcomeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    functionApp:{
        marginTop: 30,
        marginLeft: 30,
        
    },
    functionWrapper:{
        
        
    },
    functionAppWrapper:{
        
    },

    functionItemWrapper:{
        paddingRight: 10,
        

    },
    functionItemIcon:{

    },
    functionText:{
        fontSize: 15,
        color: '#1b378c',
        fontWeight: '500',
    },
    functionItemCard:{
        height: 125,
        width: 100,
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        backgroundColor :'#e3e3e8',
        opacity: 0.9,
        borderRadius: 20,
        padding: 0,
        margin: 0,
    },
    sobrietyWrapper:{

    },
    mySobietyText:{
        fontFamily: 'Lato',
        fontSize: 20,

    },
    daysSoberBox:{
        
    },
    mySobietyTextWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginTop: 30,
    },
    viewAllSobrietyText:{
        color: 'gray',
        marginTop: 5,
    },
    mySobrietyHeader:{
        fontSize: 50,
        fontWeight: 'bold',
    },
    mySobrietyCardWrapper:{},
    mySobrietyItemCard:{
        paddingRight: 30,
        marginRight: 10,
        height: 200,
        width: 325,
        justifyContent: 'space-evenly',
        flexDirection: 'row', 
        alignItems: 'center',
        backgroundColor :'#fff',
        borderColor: "#e3e3e8",
        borderRadius: 20,

    },
    mySobrietyDescription:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    mySobrietyFootNote:{
        marginTop: 5,
        color: '#9599a6',
    },
    sobrietyIcon:{
        justifyContent: "flex-end",
        alignItems: "center",
    },

});

export default Home;