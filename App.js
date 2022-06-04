import React, { useState } from "react";
import { StyleSheet,} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnboardingScreen from './Screens/OnboardingScreen';
import OnboardingLogin from './Screens/OnboardingLogin';
import Register from './Screens/Register';
import ForgetPassword from './Screens/ForgetPassword';
import Home from './Screens/Home';
import Dashboard from './Screens/Dashboard';
import New from './Screens/New';
import Notifications from './Screens/Notifications';
import Profile from './Screens/Profile';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import functionData from './assets/data/functionData';


Entypo.loadFont();
MaterialCommunityIcons.loadFont();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabNavigator,  
        activeTintColor: 'green',
        inactiveTintColor: 'gray', 
        showLabel: false,
        tabBarStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
      screenOptions={{
        headerShown: false,
      }}
      >
      <Tab.Screen 
        name = 'Home'
        component = {Home}
        options = {{
          tabBarIcon: () => <Feather name="home" size={32} color="#44cc9c" />
        }}
      />
      <Tab.Screen 
        name = 'Dashboard'
        component = {Dashboard}
        options = {{
          tabBarIcon: () => <MaterialCommunityIcons name="view-dashboard-outline" size={28} color="#44cc9c" />
        }}
      />
      <Tab.Screen 
        name = 'New'
        component = {New}
        options = {{
          tabBarIcon: () => <AntDesign name="pluscircle" size={28} color="#44cc9c" /> }}
      />
      <Tab.Screen 
        name = 'Notifications'
        component = {Notifications}
        options = {{
          tabBarIcon: () => <AntDesign name="hearto" size={28} color="#44cc9c" />
        }}
      />
      <Tab.Screen 
        name = 'Profile'
        component = {Profile}
        options = {{
          tabBarIcon: () => (
            <FontAwesome5 name="user-circle" size={28} color="#44cc9c" />         
           ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name ="OnboardingScreen"
            component ={OnboardingScreen}
            options={{
              headerShown: false
            }}/>
          <Stack.Screen 
            name ="OnboardingLogin"
            component={OnboardingLogin}
            options={{
              headerShown: false
            }}/>
            <Stack.Screen 
            name ="Register"
            component={Register}
            options={{
              headerShown: false
            }}/>
            <Stack.Screen 
            name ="ForgetPassword"
            component={ForgetPassword}
            options={{
              headerShown: false
            }}/>
            <Stack.Screen 
            name ="Dashboard"
            component={Dashboard}
            options={{
              headerShown: false
            }}/>
            <Stack.Screen 
            name ="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  tabNavigator: {
    justifyContent: 'center',
  }
});
