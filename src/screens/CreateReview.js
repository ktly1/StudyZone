import React, {useState,useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Context } from "../context/RoomContext";


const CreateReview = (props)  =>
{
    const [title, setTitle] = useState("");
    const [review, setRoom] = useState("");
    const [content, setContent] = useState("");

    const {addReviewPost} = useContext(Context);

    return <View>
        <Text style={styles.label}>Enter Name!</Text>
        <TextInput style={styles.input} value ={title} onChangeText={(text) => setTitle(text)}/>

        <Text style={styles.label}>Enter Room You Like to Review and Topic!</Text>
         <TextInput style={styles.input}   value ={review} onChangeText={(text) => setRoom(text)}/>

        <Text style={styles.label}>Enter Your Review!</Text>
        <TextInput style={styles.input}   value ={content} onChangeText={(text) => setContent(text)}/>


        <TouchableOpacity onPress ={() =>
        {
            addReviewPost(title, review, content);
            props.navigation.navigate("ReviewList");
            
        }}>
            <Text style={styles.reviewButton}>Add Review!</Text>
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
export default CreateReview;