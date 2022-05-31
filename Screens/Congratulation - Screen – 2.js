import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const clickHandler = () => {
    //go where this button should lead or do this button function
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TopText style={{ borderRadius: 20 }}>
          <CenteredText>You're amazing.</CenteredText>
        </TopText>
      </View>
      <View style={styles.coin}>
        <Text>space for the medial animation</Text>
      </View>
      <Text style={styles.text1}>Congratulations!</Text>
      <Text style={styles.text2}>You've reached an incredible milestone.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Share on your wall" onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const TopText = (props) => (
  <View style={[styles.topText, props.style]}>{props.children}</View>
);
const CenteredText = (props) => (
  <Text style={[styles.centeredText, props.style]}>{props.children}</Text>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 50,
    paddingBottom: 220,
  },
  centeredText: { textAlign: "center", margin: 10 },
  topText: {
    width: 250,
    height: 190,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: "#BCF5BC",
    borderWidth: 2,
    borderColor: "#5DBB63",
    justifyContent: "center",
  },
  text1: {
    marginTop: 200,
    fontSize: 15,
    color: "gray",
  },
  text2: {
    marginTop: 7,
    fontSize: 15,
    color: "gray",
  },
  buttonContainer: {
    marginTop: 90,
    borderRadius: 50,
  },
});
