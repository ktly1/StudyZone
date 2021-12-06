import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';
import { Context } from "../context/ReviewContext";


const Edit = (props) =>{


    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");


    const {editReview, deleteReview, state} = useContext(Context);
    const roomNum = props.navigation.getParam("room");
    const roomID = props.navigation.getParam("id");
    
    const roomReview = state.find((review) => 
    {
        return roomID === review.id; 
    })

    

    return <View>
        <Text style={styles.label}>Edit Review Name!</Text>
        <TextInput style={styles.input} value ={title} onChangeText={(text) => setTitle(text)}/>

        <Text style={styles.label}>Edit Your Review!</Text>
        <TextInput style={styles.input}   value ={review} onChangeText={(text) => setReview(text)}/>


        <TouchableOpacity onPress ={() =>
        {
            editReview(roomID,roomNum,title,review);
            props.navigation.navigate("RoomDetails");
        }}>    
            <Text style={styles.reviewButton}>edit Review!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress ={() =>
        {
            deleteReview(roomID);
            props.navigation.navigate("RoomDetails");
        }}>    
            <Text style={styles.reviewButton}>Delete Review!</Text>
        </TouchableOpacity>
        
    </View>


}

const styles = StyleSheet.create({
reviewButton:
{
    marginVertical: 8,
    marginHorizontal: 30,
    padding: 20, 
    borderWidth: 3,
    alignContent: "space-around",
    alignSelf:'center',
},
input:
{
    fontSize: 18,
    borderWidth:1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
},
label:
{
    fontSize: 20,
    marginBottom: 5,
    marginLeft:5,

}


})

export default Edit;