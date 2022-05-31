import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import onboarding from "./assets/onboarding.png";

export default function App() {
  return (
    <ImageBackground
      source={onboarding}
      style={styles.container}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
