import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import profileImage from '../assets/images/profileImage.png';
import functionData from '../assets/data/functionData';
import { useFonts } from 'expo-font';




Feather.loadFont();
const renderFunctionData = ({item}) => {
    <View>
        <Text>{item.title}</Text>
    </View>
}


const Home = ({navigation}) => {
    const [loaded] = useFonts({
        Lato: require('../assets/fonts/Lato-Bold.ttf'),
      });
    
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
                        <Text style={styles.functionAppTitle}></Text>
                        <View style={styles.functionItemWrapper}>
                            <FlatList
                                data = {functionData}
                                renderItem = {renderFunctionData}
                                keyExtractor = {(item) => item.id}
                                showsHorizontalScrollIndicator = {false}
                            />
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
        fontColor: 'navy',
        lineHeight: 50,
    },
    welcomeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Home;