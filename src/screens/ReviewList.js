import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Context} from '../context/ReviewContext';
import {Feather} from '@expo/vector-icons'

const ReviewList = (props) =>
{

    const {addReview, deleteReview, state} = useContext(Context)
    const [text, setText] = useState("");
    const roomNum = props.navigation.getParam("room")


    return <View>


        <Text style= {styles.heading}> Reviews for room {roomNum} </Text>
        
        <TextInput
            placeholder="type here"
            onChangeText={text => setText(text)}
            defaultValue={text}
        />
        
        
       <TouchableOpacity onPress={() => addRoom(roomNum,text)}>
            <Text>click here to submit review</Text>
       </TouchableOpacity>



    </View>

}


ReviewList.navigationOptions = (props) =>
{
    return {
        headerRight: () =>
        (
            <TouchableOpacity onPress = {()=> {props.navigation.navigate("CreateReview")}}>
                <Feather name = "plus" size={30} />
            </TouchableOpacity>
            
        ),
    };
}


const styles = StyleSheet.create({
    heading:
    {
    },
    row:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey'

    },
    label:
    {
        
        fontSize: 18,
    },
    icon:
    {
        fontSize:24
    }

});

export default ReviewList;