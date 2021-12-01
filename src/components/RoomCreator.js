import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RoomCreator = (props) =>
{
    return <View>
        <TouchableOpacity >
            <Text style = {styles.roomDesc}>{`Room Number ${props.roomNum}`} </Text>
            

        </TouchableOpacity>
    </View>

}

const styles = StyleSheet.create
({
    buttonContainer:{
        padding: 16,
        borderRadius: 30,
      },
    
    roomDesc:{
        fontSize: 20,
        
    },

});

export default RoomCreator;