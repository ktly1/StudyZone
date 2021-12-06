import React, {useState,useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Context } from "../context/ReviewContext";


const ReviewEditScreen = (props)  => {

    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");


    const roomNum = props.navigation.getParam("room");

    const {editReview,state} = useContext(Context);

    return <View>
        <Text>dwadaw</Text>
    
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
export default ReviewEditScreen;