import React, { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const EmailScreen = ({ navigation }) => {
  return (
    <Fragment>
      <TouchableOpacity style={styles.icon_1}>
        <Ionicons name="chevron-back-circle-sharp" size={40} color="#44cc9c" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={require("../../assets/email.png")}
          style={styles.img_1}
        />
        <Text style={styles.text_1}>Check Your Email!</Text>
        <TouchableOpacity style={styles.button_1}>
          <Text style={styles.text_2}>Proceed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_2}>
          <Text style={styles.text_3}>Resend Email</Text>
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
  img_1: {
    height: 150,
    width: 150,
  },
  container: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 0.55,
    alignItems: "center",
    justifyContent: "center",
  },
  text_1: {
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  text_2: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: "white",
  },
  text_3: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: "silver",
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

export default EmailScreen;
