import React, { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DependantScreen = ({ navigation }) => {
  return (
    <Fragment>
      <TouchableOpacity style={styles.icon_1}>
        {/* add onpress functionality */}
        <Ionicons name="chevron-back-circle-sharp" size={40} color="#44cc9c" />
      </TouchableOpacity>
      <View style={styles.container_1}>
        <TouchableOpacity
          style={styles.button_1}
          onPress={() => navigation.navigate("Dependant")}
        >
          <Text style={styles.text_1}>Dependant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_2}
          onPress={() => navigation.navigate("Guardian")}
        >
          <Text style={styles.text_2}>Guardian</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container_2}>
        <Text style={styles.text_3}>Free</Text>
        <TouchableOpacity style={styles.icon_2}>
          <Ionicons name="home" size={24} color="black" />
          <Text> Sober Living</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_3}>
          <Ionicons name="people" size={24} color="black" />
          <Text> Social Media</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_4}>
          <AntDesign name="exclamationcircle" size={24} color="black" />
          <Text> Sobriety Management</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_5}>
          <Ionicons name="briefcase" size={24} color="black" />
          <Text> Reintegration</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_3}>
          <Text style={styles.text_4}>Complete Subscription</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  icon_1: {
    marginLeft: 20,
    marginTop: 20,
  },
  icon_2: {
    flexDirection: "row",
  },
  icon_3: {
    flexDirection: "row",
  },
  icon_4: {
    flexDirection: "row",
  },
  icon_5: {
    flexDirection: "row",
  },
  container_1: {
    // borderWidth: 1,
    // borderColor: "red",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 0.1,
    flexDirection: "row",
    marginTop: 25,
    marginHorizontal: 25,
  },
  text_1: {
    fontSize: 25,
    fontWeight: "800",
  },
  text_2: {
    fontSize: 25,
    fontWeight: "800",
    color: "silver",
  },
  container_2: {
    // borderWidth: 1,
    // borderColor: "green",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 0.5,
    flexDirection: "column",
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    elevation: 4,
  },
  text_3: {
    fontSize: 35,
    fontWeight: "800",
    marginVertical: 5,
    marginHorizontal: 15,
  },
  button_3: {
    alignSelf: "stretch",
    backgroundColor: "#44cc9c",
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    shadowColor: "#000",
    elevation: 4,
  },
  text_4: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: "white",
  },
});

export default DependantScreen;
