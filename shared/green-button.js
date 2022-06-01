import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ text, onPress }) {
  return (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  button: {
  },
  buttonText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: '100%',
    borderRadius: 8,
    backgroundColor: "#11a24a",
    height: "5%",
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
  }
});
