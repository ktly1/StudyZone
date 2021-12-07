import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';


const AboutScreen = (props) =>
{
    

    return <View>
    
    <Text style={styles.headText}> The Native Power Rangers </Text>
    <Image style={styles.imgStyles} source={require('../../assets/aboutus.png')} />
    <Text style={styles.headText}> About Us </Text>
    <Text> (left to right) </Text>
    <Text style={styles.names}> Courtney Harris: Junior </Text>
    <Text style={styles.names}> Matt Heaton: Senior </Text>
    <Text style={styles.names}> Phi Phan: Senior</Text>
    <Text style={styles.names}> Kevin Ly: Senior</Text>
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
    },
    headText:
    {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 10,
    },
    imgStyles: {
        alignSelf: 'center',
        width: 420,
        height: 300
    },
    names: {
        fontSize: 30
    }

});

const imgStyles = StyleSheet.create
({
    width: 410,
    height: 410,
    marginLeft: 4,
    marginTop: 5

});

export default AboutScreen;