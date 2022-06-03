import React, { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const MeetingScreen = ({ navigation }) => {
  return (
    <Fragment>
      <View style={styles.icon_view}>
        <TouchableOpacity style={styles.icon_1}>
          <Ionicons
            name="chevron-back-circle-sharp"
            size={40}
            color="#44cc9c"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_2}>
          <Ionicons
            name="chevron-forward-circle-sharp"
            size={40}
            color="#44cc9c"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container_1}>
        <Image
          source={require("../../assets/meetings.png")}
          style={styles.img_1}
        />
      </View>
      <View style={styles.container_2}>
        <Text style={styles.text_1}>
          Access to a database of AA/NA meetings in your area.
        </Text>
        <Text style={styles.text_2}>
          Find multiple AA/NA meetings near you and say yes to growth.
        </Text>
        <TouchableOpacity style={styles.button_1}>
          <Text style={styles.text_3}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  icon_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  img_1: {
    marginTop: 10,
    height: 200,
    width: 350,
  },
  container_1: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 0.55,
    alignItems: "center",
    justifyContent: "center",
  },
  container_2: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 0.45,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#111344",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  text_1: {
    alignSelf: "flex-start",
    marginHorizontal: 20,
    marginTop: 20,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  text_2: {
    alignSelf: "flex-start",
    marginHorizontal: 20,
    marginTop: 15,
    color: "silver",
    fontSize: 15,
    fontWeight: "500",
  },
  button_1: {
    alignSelf: "stretch",
    backgroundColor: "#44cc9c",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 25,
    shadowColor: "#000",
    elevation: 4,
  },
  text_3: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: "white",
  },
});

export default MeetingScreen;
