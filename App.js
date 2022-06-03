import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DependantScreen from "./src/Screens/DependantScreen";
import GuardianScreen from "./src/Screens/GuardianScreen";
import RegScreen from "./src/Screens/RegScreen";
import EmailScreen from "./src/Screens/EmailScreen";
import HousingScreen from "./src/Screens/HousingScreen";
import JobScreen from "./src/Screens/JobScreen";
import MeetingScreen from "./src/Screens/MeetingScreen";
import ForumScreen from "./src/Screens/ForumScreen";
import TherapyScreen from "./src/Screens/TherapyScreen";
import AwardScreen from "./src/Screens/AwardScreen";

const navigator = createStackNavigator(
  {
    Dependant: DependantScreen,
    Guardian: GuardianScreen,
    Reg: RegScreen,
    Email: EmailScreen,
    Housing: HousingScreen,
    Job: JobScreen,
    Meeting: MeetingScreen,
    Forum: ForumScreen,
    Therapy: TherapyScreen,
    Award: AwardScreen,
  },
  {
    initialRouteName: "Dependant",
    defaultNavigationOptions: {
      title: "Soulber_Prototype",
    },
  }
);

export default createAppContainer(navigator);
