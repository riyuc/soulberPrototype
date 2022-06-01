import React, { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const RegScreen = ({ navigation }) => {
  return (
    <Fragment>
      <TouchableOpacity style={styles.icon_1}>
        <Ionicons name="chevron-back-circle-sharp" size={40} color="#44cc9c" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text_1}>Let's personalize your Profile!</Text>
        <TouchableOpacity style={styles.button_1}>
          <Text style={styles.text_2}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.img_2}>
        <Image source={require("../../assets/mountains.png")} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  icon_1: {
    marginLeft: 20,
    marginTop: 20,
  },
  container: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 0.55,
    alignItems: "center",
    justifyContent: "center",
  },
  text_1: {
    letterSpacing: 0.8,
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  text_2: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: "white",
  },
  button_1: {
    alignSelf: "stretch",
    backgroundColor: "#44cc9c",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    shadowColor: "#000",
    elevation: 4,
  },
  img_2: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default RegScreen;
