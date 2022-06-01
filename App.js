import React, { useState } from "react";
import { StyleSheet,} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from './Screens/OnboardingScreen';
import OnboardingRegister from './Screens/OnboardingRegister';
import Signed from './Screens/Signed';


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
            name ="OnboardingRegister"
            component={OnboardingRegister}
            options={{
              headerShown: false
            }}/>
            <Stack.Screen 
            name ="Signed"
            component={Signed}
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
