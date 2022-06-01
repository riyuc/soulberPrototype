import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DependantScreen from "./src/Screens/DependantScreen";
import GuardianScreen from "./src/Screens/GuardianScreen";
import RegScreen from "./src/Screens/RegScreen";

const navigator = createStackNavigator(
  {
    Dependant: DependantScreen,
    Guardian: GuardianScreen,
    Reg: RegScreen,
  },
  {
    initialRouteName: "Reg",
    defaultNavigationOptions: {
      title: "Soulber_Prototype",
    },
  }
);

export default createAppContainer(navigator);
