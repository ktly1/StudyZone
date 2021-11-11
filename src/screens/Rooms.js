import React, {useReducer, useState} from "react";
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

//Variables
const ROOM_SCREEN_STATE = "roomScreens";
const FILTER_SCREEN_STATE = "filterScreens";


const reducer = (stats, action) =>
{
    switch(actions.statsToChange)
    {
            //cases go here
    }
}

const Rooms = () =>
{
    //keep tract of what screen we are in

    const [roomState, setRoomState] = useState(ROOM_SCREEN_STATE);
    var whatToDisplay; //use to fill up JSX


    switch(roomState)
    {
        case ROOM_SCREEN_STATE:
            
        whatToDisplay = <View>
            
            <Text>Room Screen</Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={function(){setRoomState(FILTER_SCREEN_STATE)}}>
                <Text style = {styles.nextPage}>Go to Filter Screen</Text>
            
          </TouchableOpacity> 

        </View>// end of View
        break;

        
        case FILTER_SCREEN_STATE:
            whatToDisplay = <View>

                <Text>Filter Screen</Text>

                <TouchableOpacity style={styles.buttonContainer} onPress={function(){setRoomState(ROOM_SCREEN_STATE)}}>
                <Text style = {styles.nextPage}>Go to Room Screen</Text>
            
          </TouchableOpacity> 

            </View>// end of View
        
        break;


    }

    //returns what we want to display base on state
    return whatToDisplay;
}

const styles = StyleSheet.create
({
    buttonContainer:{
        backgroundColor: "#009688",
        padding: 16,
        borderRadius: 10,
      },
    
    nextPage:{
        fontSize: 20,
        textAlign: 'center',
    },

});

export default Rooms;

