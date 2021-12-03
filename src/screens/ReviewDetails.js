import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Context} from "../context/RoomContext";


const ReviewDetails = (props)  =>
{
   const{state} = useContext(Context);

   const reviewID = props.navigation.getParam("id");
   const reviewPost = state.find((reviewPost) =>
   {
       return reviewID === reviewPost.id;
   })

    return <View>
        <Text style={styles.title}>{reviewPost.title}</Text>
        <Text style = {styles.content}>{reviewPost.content}</Text>
    </View>


}

const styles = StyleSheet.create({

title:{
    alignSelf: 'center',
    fontSize: 30,
},

})
export default ReviewDetails;