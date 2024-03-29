import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground,} from "react-native";
import onboarding from '../assets/images/onboarding.png'
import FlatButton from "../shared/green-button";

export default function OnboardingScreen({navigation}) {
  return (   
      <ImageBackground
      resizeMode="cover"
      source={onboarding}
      style={styles.container}>
      <FlatButton text="Get Started" onPress={()=>
      navigation.navigate('Dependant', {name: 'Dependant'}
      )}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
});
