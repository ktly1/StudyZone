import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';


const HomeScreen = (props) =>{

    return <View style={styles.background}>
    <Image style={imgStyles} source={require('../../assets/logo_smol.jpg')} />

    <TouchableOpacity style={styles.buttonContainer} onPress={function(){props.navigation.navigate("Rooms")}}>
      <Text style = {styles.nextPage}>Find A Study Room</Text> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.aboutContainer} onPress={function(){props.navigation.navigate("About")}}>
    <Image style={styles.aboutImg} source={require('../../assets/about.png')} />
      <Text style={styles.aboutText}>About Us</Text> 
    </TouchableOpacity>

    <Text style={styles.footing}>Mobile App Dev Fall 2021</Text>
    </View>
}

const styles = StyleSheet.create
({
    buttonContainer:{
        backgroundColor: "#005CA6",
        padding: 26,
        borderRadius: 40,
        marginTop: 75
      },
      aboutImg:{
        width: 30,
        height: 30
      },
      aboutContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120
        
      },
      aboutText:{
        fontSize: 20
      },
    
    nextPage:{
        fontSize: 30,
        textAlign: 'center',
        color: "white"
    },

    footing:{
      textAlign: 'center',
      marginTop: 30
    },

    background:{
      backgroundColor: "white"
    }

});

const imgStyles = StyleSheet.create
({
    width: 410,
    height: 410,
    marginLeft: 4,
    marginTop: 5

});

export default HomeScreen;

