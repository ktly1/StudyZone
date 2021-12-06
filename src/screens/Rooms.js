import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { Context } from "../context/RoomContext";

const Room = (props) =>
{
    const {addRooms, state} = useContext(Context);

    var roomList = [ 
        {roomNum: 188, hasComputers:'N'}, 
        {roomNum:140 , hasComputers:'Y'}, 
        {roomNum:121, hasComputers:'N'}, 
        {roomNum:132, hasComputers:'Y'}
    ];


    return <View>
        <Text style={styles.roomText}> Room</Text>
        

        <TouchableOpacity onPress={() =>
            {
                if(state.length == 0)
                {
                    for (let i = 0; i < roomList.length; i++)
                    {
                        addRooms(roomList[i].roomNum, roomList[i].hasComputers);
                           
                    }
                }
            }
        }>
            <Text style={styles.roomHeading}>View Rooms!</Text>

        </TouchableOpacity>

        <View style = {styles.roomContainer}>

            <FlatList
                data = {state}
                keyExtractor={(room) => {return room.id}}
                renderItem={({item}) =>
                {
                    return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                        
                        
                        <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                        <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                    
                    
                    </TouchableOpacity>
                }} 

                
            
            />
    </View>
    
    </View>

    
}

const styles = StyleSheet.create
({
    roomHeading:
    {
        alignSelf: 'center',
        borderWidth:3,
        padding:20,
        borderRadius: 10,
        color: '#FFFFFF',
        backgroundColor: '#0DA2FF',

    },
    roomText:
    {
        alignSelf: 'center',
        fontSize: 30,
    },
    roomButton:
    {
        marginVertical: 8,
        marginHorizontal: 30,
        padding: 20, 
        borderWidth: 3,
        alignContent: "space-around",
    },
    
})

export default Room;