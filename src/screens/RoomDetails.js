import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';
import {Context} from "../context/RoomContext";


const RoomDetails = (props) =>
{
    
        const {state} = useContext(Context);
        const roomID = props.navigation.getParam("id");
        const room = state.find((room) => 
        {
            return roomID === room.id; 
        
        })
        

        return <View> 
            <View>
                <Text style={styles.roomName}> Room Num {room.roomNum}</Text>

            </View>


            <TouchableOpacity style={styles.reviewButton} onPress = {() => props.navigation.navigate("ReviewList")}>
                <Text> Click here to make or look at Reviews!</Text>
            </TouchableOpacity>
        </View>
    
}

const styles = StyleSheet.create
({
    roomName:
    {
        alignSelf:'center',
        marginVertical: 50,
        fontSize: 30,
    },
    reviewButton:
    {
        marginVertical: 8,
        marginHorizontal: 30,
        padding: 20, 
        borderWidth: 3,
        alignContent: "space-around",
        alignSelf:'center',
    }
    
})

export default RoomDetails;

