import React, { useState } from "react";
import { StyleSheet,} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from './Screens/OnboardingScreen';
import OnboardingLogin from './Screens/OnboardingLogin';
import Register from './Screens/Register';
import ForgetPassword from './/Screens/ForgetPassword';


// const navigator = createStackNavigator(
//   {
//     Onboarding: OnboardingScreen,
//   },
//   {
//     initialRouteName: 'Onboarding',
//     defaultNavigationOptions: {
//       title: '',
//     },
//   }
// );

// export default createAppContainer(navigator);

const Stack = createNativeStackNavigator();

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
});
