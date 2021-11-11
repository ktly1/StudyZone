import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';


const HomeScreen = (props) =>
{
    

    return <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={function(){props.navigation.navigate("Rooms")}}>
      <Text style = {styles.nextPage}>Next</Text> 
    </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create
({
    buttonContainer:{
        backgroundColor: "#009688",
        padding: 16,
        borderRadius: 10,
      },
    
    nextPage:{
        fontSize: 20,
        textAlign: 'center',
    },

});

export default HomeScreen;

