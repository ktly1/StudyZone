import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import Rooms from "./src/screens/Rooms";
import RoomDetails from "./src/screens/RoomDetails";
import CreateReview from "./src/screens/CreateReview";
import Edit from "./src/screens/Edit";
import AboutScreen from "./src/screens/About";
import { Provider as RoomProvider } from "./src/context/RoomContext";
import { Provider as ReviewProvider } from "./src/context/ReviewContext";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Rooms: Rooms,
    Edit: Edit,
    RoomDetails: RoomDetails,
    CreateReview: CreateReview,
    About: AboutScreen

  },

  {
    initialRouteName: "Home",
    defaultNavigationOptions:
    {
      title: "StudyZone"
    }
  }
);

const App = createAppContainer(navigator);

export default () =>
{
  return <RoomProvider>
    <ReviewProvider>
    <App/>
    </ReviewProvider>
  </RoomProvider>
}