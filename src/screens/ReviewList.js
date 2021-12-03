import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Context as RoomContext} from "../context/RoomContext";
import {Feather} from '@expo/vector-icons'

const ReviewList = (props) =>
{

    const {state, deleteReviewPost} = useContext(RoomContext)

    return <View>


        <Text style= {styles.heading}> Reviews! </Text>

        
        <FlatList
            data = {state}
            keyExtractor = {(reviewPost) => {return reviewPost.title}}
            renderItem={({item}) =>
        {
            return <TouchableOpacity onPress = {() => {props.navigation.navigate("ReviewDetails", {id:item.id})}}>
            
                <View style ={styles.row}> 
                    <Text styles ={styles.label}>Name: </Text>
                    <Text styles={styles.roomText}> {item.title}</Text>

                    <Text styles ={styles.label}>Review On Room: </Text>
                    <Text>{item.room}</Text>
                    


                    <TouchableOpacity onPress={()=> {deleteReviewPost(item.id)}}>
                        <Feather name = "trash" style = {styles.icon}/>
                    </TouchableOpacity>

                

                </View>
            </TouchableOpacity>
        }} 
        
        
        />


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
        alignSelf: 'center',
        fontSize: 50,

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