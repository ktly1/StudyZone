import React, {useContext, useState} from 'react';
import {StyleSheet, View, Image, Text, Button, FlatList, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Context} from "../context/ReviewContext";
import classroomOne from "../../assets/classroomOne.jpg";
import classroomTwo from "../../assets/classroomTwo.jpg";


const RoomDetails = (props) =>
{
        const {state} = useContext(Context);

        const roomNum = props.navigation.getParam("room");
        const roomID = props.navigation.getParam("id");

         const review = state.find((review) => 
         {
             return roomID === review.id;
         })

        const randomPics = [
            classroomOne,
            classroomTwo
        ];

        const randomLocation = [
            "Math building",
            "Science building",
            "Miller Burg building",
            "Engineer building",
        ];
        const randomNoise = [
            "Silent",
            "Noisy",
        ];
        const randomSpace = [
            "Big",
            "Small",
            "Medium",
        ];

        let setClassroom = randomPics[Math.floor(Math.random() * randomPics.length)];
        let setLocation = randomLocation[Math.floor(Math.random() * randomLocation.length)];
        let setNoise = randomNoise[Math.floor(Math.random() * randomNoise.length)];
        let setSpace = randomSpace[Math.floor(Math.random() * randomSpace.length)];

    
        

        return <View> 
        
        <View style={{borderWidth:3, height:50, margin:10, borderColor:"#005CA6"}}>
            <Text style={styles.roomName}> Room Num {roomNum}  {"\n"}</Text>
        </View>

        <View style={{bottom:-120}}>
            <View style={styles.image}>
                <Image source ={setClassroom} style = {{width: 200, height:200}}></Image>
            </View>
            <View style={styles.description}>
                <Text style={{fontSize:30,margin:3, textDecorationLine: 'underline'}}>Classroom Information:</Text>
                <Text style={styles.descriptionText}>Location: {setLocation}</Text>
                <Text style={styles.descriptionText}>Noise Level: {setNoise}</Text>
                <Text style={styles.descriptionText}>Room space: {setSpace}</Text>
            </View>

            <Text style={{fontSize:30, top:-140, textDecorationLine: 'underline'}}> Reviews: </Text>
            <View style={styles.reviewList}>
                    <FlatList
                        data = {state}
                        keyExtractor={(review) => {return review.id}}
                        renderItem={({item}) =>
                        {
                            if(roomNum === item.room){
                                return <TouchableOpacity onPress = { () => {props.navigation.navigate("Edit", {room: item.room,id: item.id})}}>  
                                <Text style = {{fontSize:15,}}>      
                                    Name: {item.title} {"\n"}
                                    Review: {item.review} {"\n"}
                                </Text>
                                </TouchableOpacity>
                            }

                            
                        }
                    } 
                    
                    />
            </View>

            <View style={styles.fixedPosition}>
                <TouchableOpacity style={styles.reviewButton} onPress = { () => {props.navigation.navigate("CreateReview", {room: roomNum,id: roomID})}}>
                        <Text style={styles.textButton}> Click here to add your review!</Text> 
                </TouchableOpacity>
            </View>
        </View>

        </View>
    
}

const styles = StyleSheet.create
({
    roomName:
    {
        alignSelf:'center',
        fontSize: 30,
    },
    reviewButton:
    {
        backgroundColor: "#005CA6",
        padding: 26,
        borderRadius: 40,
        marginTop: 75,
        alignSelf:'center',
    },
    textButton:
    {
        fontSize: 20,
        textAlign: 'center',
        color: "white",
    },
    fixedPosition:
    {
        flex:1,
        position:'absolute',
        bottom:10,
        right:50,
        margin:10,

    },
    reviewList:
    {
        borderWidth:2,
        top:-130,
    },
    image:
    {
        justifyContent: 'center',
    	alignItems: 'center',
		marginVertical: 15,
		top:-140
    },
    description:
    {
        borderWidth: 2,
        top:-150,
    },
    descriptionText:
    {
        fontSize:20,
        fontStyle:'italic',
    },
})

export default RoomDetails;