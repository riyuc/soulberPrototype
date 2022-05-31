//need the stack navigation
import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import sign_in from "./assets/sign_in.png";

export default function App() {
  return (
    <ImageBackground
      source={sign_in}
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
