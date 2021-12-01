import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import Rooms from "./src/screens/Rooms";
import RoomDetails from "./src/screens/RoomDetails"
import {Provider as RoomProvider } from "./src/context/RoomContext";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Rooms: Rooms,
    RoomDetails: RoomDetails,

  },

  {
    initialRouteName: "Rooms",
    defaultNavigationOptions:
    {
      title: "StudyZone Home"
    }
  }
);

const App = createAppContainer(navigator);

export default () =>
{
  return <RoomProvider>
    <App/>
  </RoomProvider>
}



