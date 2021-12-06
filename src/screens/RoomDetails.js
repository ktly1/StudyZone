import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';
import {Context} from "../context/ReviewContext";


const RoomDetails = (props) =>
{
        const {state} = useContext(Context);
        const roomNum = props.navigation.getParam("room");
        const roomID = props.navigation.getParam("id");

         const review = state.find((review) => 
         {
             return roomID === review.id;
         })
         

        return <View> 
        
            <Text style={styles.roomName}>  Room Num {roomNum}  {"\n"}
                                             </Text>
            {/* {reviews === 0 ? 
                            <Text>No reviews found on this room!</Text>
                                :
                            <Text>{review.title}</Text>
            } */}

            <FlatList
                data = {state}
                keyExtractor={(review) => {return review.id}}
                renderItem={({item}) =>
                {
                    if(roomNum === item.room){
                        return <TouchableOpacity onPress = { () => {props.navigation.navigate("Edit", {room: item.room,id: item.id})}}>  
                        <Text>      Title of review:{item.title} {"\n"}
                                    the review: {item.review} {"\n"}
                                    the ID: {item.id}
                                </Text>
                        </TouchableOpacity>
                    }
                }
            } 
            />


            <TouchableOpacity style={styles.reviewButton} onPress = { () => {props.navigation.navigate("CreateReview", {room: roomNum,id: roomID})}}>
                <Text> Click here to add your review!</Text>
                
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