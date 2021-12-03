import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import Rooms from "./src/screens/Rooms";
import RoomDetails from "./src/screens/RoomDetails";
import ReviewList from "./src/screens/ReviewList";
import ReviewDetails from "./src/screens/ReviewDetails";
import CreateReview from "./src/screens/CreateReview";
import {Provider as RoomProvider } from "./src/context/RoomContext";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Rooms: Rooms,
    RoomDetails: RoomDetails,
    ReviewList: ReviewList,
    ReviewDetails: ReviewDetails,
    CreateReview: CreateReview,

  },

  {
    initialRouteName: "Rooms",
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
    <App/>
  </RoomProvider>
}



