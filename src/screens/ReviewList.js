import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Context} from "../context/RoomContext";

const ReviewList = (props) =>
{

    const {state, addReviewPost, deleteReviewPost} = useContext(Context)

    return <View>

        <TouchableOpacity onPress={() =>{ addReviewPost()}}>
            <Text> Add post</Text>
        </TouchableOpacity>

        <FlatList
        data={state}
        keyExtractor ={(reviewPost) => {return reviewPost.title}}
        renderItem = { ({item}) =>
        {
            <TouchableOpacity onPress = {() => props.navigation.navigate("ReviewDetail", {id: item.id})}>
                <View style ={styles.row}>
                    <Text style = {styles.rowPost}> {item.title} </Text>

                    
                </View>




            </TouchableOpacity>
        }}
            
        />


    </View>

}

const styles = StyleSheet.create({

});

export default ReviewList;