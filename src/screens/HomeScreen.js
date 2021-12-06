import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';


const HomeScreen = (props) =>
{
    return <View>
      
        <TouchableOpacity style={styles.buttonContainer} onPress={function(){props.navigation.navigate("Rooms")}}>
      <Text style = {styles.nextPage}>Rooms</Text> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonContainer} onPress={function(){props.navigation.navigate("RoomTest")}}>
      <Text style = {styles.nextPage}>RoomTest</Text> 
    </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create
({
    buttonContainer:{
        backgroundColor: "#009688",
        padding: 15,
        borderRadius: 100,
      },
    
    nextPage:{
        fontSize: 20,
        textAlign: 'center',
    },

});

export default HomeScreen;