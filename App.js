import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import Rooms from "./src/screens/Rooms";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Rooms: Rooms,
  },

  {
    initialRouteName: "Home",
    defaultNavigationOptions:
    {
      title: "StudyZone Home"
    }
  }
);

export default createAppContainer(navigator);


