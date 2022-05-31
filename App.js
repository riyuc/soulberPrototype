import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DependantScreen from "./src/Screens/DependantScreen";

const navigator = createStackNavigator(
  {
    Dependant: DependantScreen,
  },
  {
    initialRouteName: "Dependant",
    defaultNavigationOptions: {
      title: "Soulber_Prototype",
    },
  }
);

export default createAppContainer(navigator);
