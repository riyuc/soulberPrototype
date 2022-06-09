import React, { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const home_icon = <Ionicons name="home" size={24} color="black" />;
const social_icon = <Ionicons name="people" size={24} color="black" />;
const sober_icon = (
  <AntDesign name="exclamationcircle" size={24} color="black" />
);
const integration_icon = <Ionicons name="briefcase" size={24} color="black" />;

const features = [
  { id: 1, icon: home_icon, title: " Sober Living" },
  { id: 2, icon: social_icon, title: " Social Media" },
  { id: 3, icon: sober_icon, title: " Sobriety Management" },
  { id: 4, icon: integration_icon, title: " Reintegration" },
];

const GuardianScreen = ({ navigation }) => {
  return (
    <Fragment>
      <TouchableOpacity style={styles.icon_1}
       onPress={() => navigation.navigate('OnboardingLogin', {name: 'OnboardingLogin'})}
      >
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
        <Text style={styles.text_3}>$29.99/month</Text>
        <FlatList
          key={features.id}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          data={features}
          renderItem={({ item }) => {
            return (
              <View style={styles.container_3}>
                <TouchableOpacity>{item.icon}</TouchableOpacity>
                <Text>{item.title}</Text>
              </View>
            );
          }}
        />
        <TouchableOpacity style={styles.button_3}
          onPress={() => navigation.navigate('OnboardingLogin', {name: 'OnboardingLogin'})}
        >
          <Text style={styles.text_4}>Complete Subscription</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.img}>
        <Image source={require("../assets/images/mountains.png")} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  icon_1: {
    marginLeft: 20,
    marginTop: 20,
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
    color: "silver",
  },
  text_2: {
    fontSize: 25,
    fontWeight: "800",
  },
  container_2: {
    // borderWidth: 1,
    // borderColor: "green",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 0.45,
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
    alignSelf: "flex-start",
    fontWeight: "800",
    marginVertical: 15,
    marginHorizontal: 15,
  },
  button_3: {
    alignSelf: "stretch",
    backgroundColor: "#44cc9c",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    shadowColor: "#000",
    elevation: 4,
  },
  text_4: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: "white",
  },
  container_3: {
    // borderWidth: 1,
    // borderColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  img: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-between",
    },
});

export default GuardianScreen;
