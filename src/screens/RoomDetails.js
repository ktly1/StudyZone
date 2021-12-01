import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
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
    
})

export default RoomDetails;

