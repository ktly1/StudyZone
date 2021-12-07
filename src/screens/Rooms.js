import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { Context } from "../context/RoomContext";
import {Feather} from '@expo/vector-icons'

const SHOW_FILTER_ROOMS = "SHOWFILTERROOMS";
const SHOW_ALL_ROOMS = "SHOWALLROOMS";
const SHOW_AVAILABLE_ROOMS = "SHOWAVAILABLEROOMS";
const SHOW_UNAVAILABLE_ROOMS = "SHOWUNAVAILABLEROOMS";
const SHOW_TIME_ROOMS = "SHOWTIMEROOMS";
const SHOW_NINE_ROOMS = "SHOWNINEROOMS";
const SHOW_TEN_ROOMS = "SHOWNINEROOMS";
const SHOW_ELEVEN_ROOMS = "SHOWELEVENROOMS";
const SHOW_TWELVE_ROOMS = "SHOWTWELVEROOMS";
const SHOW_ONE_ROOMS = "SHOWONEROOMS";
const SHOW_TWO_ROOMS = "SHOWTWOROOMS";
const SHOW_THREE_ROOMS = "SHOWTHREEROOMS";
const SHOW_FOUR_ROOMS = "SHOWFOURROOMS";
const SHOW_FIVE_ROOMS = "SHOWFIVEROOMS";

//use a case switch in unison with filter
const Room = (props) => {

    const {addRooms, state} = useContext(Context);
    const [roomState, setRoomState] = useState(SHOW_ALL_ROOMS);
    var whatToDisplay;

    var roomList = [ 
        {roomNum:212,nineAm:true, tenAm:true, elevenAm: true, twelvePm: true, onePm: true, twoPm: true, threePm: true, fourPm: true, fivePm: true, hasComputers: 'Y', roomOccupancy: 20}, 
        {roomNum:226,nineAm:false, tenAm:true, elevenAm: true, twelvePm: true, onePm: true, twoPm: true, threePm: true, fourPm: true, fivePm: true, hasComputers: 'Y', roomOccupancy: 25},
        {roomNum:322,nineAm:false, tenAm:true, elevenAm: true, twelvePm: true, onePm: true, twoPm: true, threePm: true, fourPm: true, fivePm: true, hasComputers: 'Y', roomOccupancy: 25},
        {roomNum:123,nineAm:false, tenAm:true, elevenAm: true, twelvePm: true, onePm: true, twoPm: true, threePm: true, fourPm: true, fivePm: true, hasComputers: 'Y', roomOccupancy: 20},
        {roomNum:218,nineAm:true, tenAm:true, elevenAm: true, twelvePm: true, onePm: true, twoPm: true, threePm: true, fourPm: true, fivePm: true, hasComputers: 'N', roomOccupancy: 25},
        {roomNum:320,nineAm:true, tenAm:true, elevenAm: true, twelvePm: true, onePm: true, twoPm: true, threePm: true, fourPm: true, fivePm: true, hasComputers: 'N',roomOccupancy: 20},
        {roomNum:317,nineAm:true, tenAm:true, elevenAm: true, twelvePm: true, onePm: true, twoPm: true, threePm: true, fourPm: true, fivePm: true, hasComputers: 'N', roomOccupancy: 20},
    ];

    // ALL ROOMS
    switch(roomState){
        case SHOW_ALL_ROOMS:
        
    whatToDisplay = <View>

        <TouchableOpacity onPress = {() => {setRoomState(SHOW_FILTER_ROOMS)}}>
            <Feather name = "search" size={30}></Feather>
        </TouchableOpacity>
        
        <Text style={styles.roomText}> Room </Text>
        
        <TouchableOpacity onPress={() =>
            {
                if(state.length == 0)
                {
                    for (let i = 0; i < roomList.length; i++)
                    {
                        addRooms(roomList[i].roomNum, roomList[i].nineAm, roomList[i].tenAm, roomList[i].elevenAm,
                            roomList[i].twelvePm, roomList[i].onePm, roomList[i].twoPm,
                            roomList[i].threePm, roomList[i].fourPm, roomList[i].fivePm, roomList[i].hasComputers, roomList[i].roomOccupancy);
                           
                    }
                }
            }
        }>
            <Text style={styles.roomHeading}>View Rooms!</Text>

        </TouchableOpacity>

        <View style = {styles.roomContainer}>

            <FlatList
                data = {state}
                keyExtractor={(room) => {return room.id}}
                renderItem={({item}) =>
                {
                    return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                        
                        
                        <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                        
                        <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                        <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                    
                    </TouchableOpacity>
                }} 
            />
            <Button 
                title="Testing"
                onPress = {() => {setRoomState(SHOW_AVAILABLE_ROOMS)}}
            />

        </View>
    
    </View>
     break;

     // AVAILABLE ROOMS
     case SHOW_UNAVAILABLE_ROOMS:
         
     whatToDisplay = <View>
         
         <Text style={styles.roomText}> Room</Text>
 
         <View style = {styles.roomContainer}>
 
             <FlatList
                 data = {state}
                 keyExtractor={(room) => {return room.id}}
                 renderItem={({item}) =>
                 {
                     if(item.hasComputers === "N"){
                         return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
 
                             <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                         
                             <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                     
                         </TouchableOpacity>
                     }
                 }} 
             />
 
         </View>
             <Button 
                 title="Testing"
                 onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
             />
 
         </View>
    break;

    // AVAILABLE ROOMS
    case SHOW_AVAILABLE_ROOMS:
        
    whatToDisplay = <View>
        
        <Text style={styles.roomText}> Room</Text>

        <View style = {styles.roomContainer}>

            <FlatList
                data = {state}
                keyExtractor={(room) => {return room.id}}
                renderItem={({item}) =>
                {
                    if(item.hasComputers === "Y"){
                        return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>

                            <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                        
                            <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                    
                        </TouchableOpacity>
                    }
                }} 
            />

        </View>
            <Button 
                title="Testing"
                onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
            />

        </View>
        break;

        // THE GREAT FILTER FOR ROOMS
        case SHOW_FILTER_ROOMS:
            whatToDisplay = <View>
             <Button
             title="back home"
             onPress= {() => {setRoomState(SHOW_ALL_ROOMS)}}
             />
             <Text>COURTNEYS CODE</Text>

        <TouchableOpacity onPress={() => {setRoomState(SHOW_TIME_ROOMS)}}>
                <Text style={styles.roomText}> SEARCH BY HOUR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setRoomState(SHOW_AVAILABLE_ROOMS)}}>
                <Text style={styles.roomText}> SHOW ALL AVAILABLE ROOMS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setRoomState(SHOW_UNAVAILABLE_ROOMS)}}>
                <Text style={styles.roomText}> SHOW ALL UNAVAILABLE ROOMS</Text>
        </TouchableOpacity>

            </View>

        break;

        // 9 AM ROOMS
        case SHOW_NINE_ROOMS:
            whatToDisplay = <View>
        
            <Text style={styles.roomText}> Room</Text>
            
            <TouchableOpacity onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}>
            <Text>All rooms{"\n"}</Text>
            </TouchableOpacity>
    
            <View style = {styles.roomContainer}>
    
                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.nineAm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                                <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                            
                                <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>
                <Button 
                    title="Testing"
                    onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
                />
    
            </View>

        break;

        // 10 AM ROOMS
        case SHOW_TEN_ROOMS:
            whatToDisplay = <View>
        
            <Text style={styles.roomText}> Room</Text>
            
            <TouchableOpacity onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}>
            <Text>All rooms{"\n"}</Text>
            </TouchableOpacity>
    
            <View style = {styles.roomContainer}>

                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.tenAm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                                <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                            
                                <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>
                <Button 
                    title="Testing"
                    onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
                />
    
            </View>

    break;

    // 11 AM ROOMS
    case SHOW_ELEVEN_ROOMS:
    whatToDisplay = <View>

    <Text style={styles.roomText}> Room</Text>
    
    <TouchableOpacity onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}>
    <Text>All rooms{"\n"}</Text>
    </TouchableOpacity>

    <View style = {styles.roomContainer}>

        <FlatList
            data = {state}
            keyExtractor={(room) => {return room.id}}
            renderItem={({item}) =>
            {
                if(item.elevenAm == true){
                    return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                    
                    
                        <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                    
                        <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                        
                
                    </TouchableOpacity>
                }
            }} 
        />

    </View>
        <Button 
            title="Testing"
            onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
        />

    </View>
    break;

    // 10 AM ROOMS
    case SHOW_TWELVE_ROOMS:
        whatToDisplay = <View>
    
        <Text style={styles.roomText}> Room</Text>
        
        <TouchableOpacity onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}>
        <Text>All rooms{"\n"}</Text>
        </TouchableOpacity>

        <View style = {styles.roomContainer}>

            <FlatList
                data = {state}
                keyExtractor={(room) => {return room.id}}
                renderItem={({item}) =>
                {
                    if(item.twelvePm == true){
                        return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                        
                        
                            <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                        
                            <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                            
                    
                        </TouchableOpacity>
                    }
                }} 
            />

        </View>
            <Button 
                title="Testing"
                onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
            />

        </View>
        break;

        // 10 AM ROOMS
        case SHOW_ONE_ROOMS:
            whatToDisplay = <View>
        
            <Text style={styles.roomText}> Room</Text>
            
            <TouchableOpacity onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}>
            <Text>All rooms{"\n"}</Text>
            </TouchableOpacity>
    
            <View style = {styles.roomContainer}>

                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.onePm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                                <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                            
                                <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>
                <Button 
                    title="Testing"
                    onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
                />
    
            </View>
            break;

            // 2 AM ROOMS
            case SHOW_TWO_ROOMS:
                whatToDisplay = <View>
            
                <Text style={styles.roomText}> Room</Text>
                
                <TouchableOpacity onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}>
                <Text>All rooms{"\n"}</Text>
                </TouchableOpacity>
        
                <View style = {styles.roomContainer}>
    
                    <FlatList
                        data = {state}
                        keyExtractor={(room) => {return room.id}}
                        renderItem={({item}) =>
                        {
                            if(item.twoPm == true){
                                return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                                
                                
                                    <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                                
                                    <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                                    
                            
                                </TouchableOpacity>
                            }
                        }} 
                    />
        
                </View>
                    <Button 
                        title="Testing"
                        onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
                    />
        
                </View>
        break;

        // three AM ROOMS
        case SHOW_THREE_ROOMS:
            whatToDisplay = <View>
        
            <Text style={styles.roomText}> Room</Text>
            
            <TouchableOpacity onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}>
            <Text>All rooms{"\n"}</Text>
            </TouchableOpacity>
    
            <View style = {styles.roomContainer}>

                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.threePm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                                <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                            
                                <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>
                <Button 
                    title="Testing"
                    onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
                />
    
            </View>
        break;

        // 10 AM ROOMS
        case SHOW_FOUR_ROOMS:
            whatToDisplay = <View>
        
            <Text style={styles.roomText}> Room</Text>
            
            <TouchableOpacity onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}>
            <Text>All rooms{"\n"}</Text>
            </TouchableOpacity>
    
            <View style = {styles.roomContainer}>

                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.fourPm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                                <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                            
                                <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>
                <Button 
                    title="Testing"
                    onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
                />
    
            </View>    
        break;

        // 10 AM ROOMS
        case SHOW_FIVE_ROOMS:
            whatToDisplay = <View>
        
            <Text style={styles.roomText}> Room</Text>
            
            <TouchableOpacity onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}>
            <Text>All rooms{"\n"}</Text>
            </TouchableOpacity>
    
            <View style = {styles.roomContainer}>

                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.fivePm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                                <Text style= {styles.roomText}> Room Number:{item.roomNum} </Text>
                            
                                <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>
                <Button 
                    title="Testing"
                    onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}
                />
    
            </View>
    }
    return whatToDisplay;
}



const styles = StyleSheet.create
({
    roomHeading:
    {
        alignSelf: 'center',
        borderWidth:3,
        padding:20,
        borderRadius: 10,
        color: '#FFFFFF',
        backgroundColor: '#0DA2FF',

    },
    roomText:
    {
        alignSelf: 'center',
        fontSize: 30,
    },
    roomButton:
    {
        marginVertical: 8,
        marginHorizontal: 30,
        padding: 20, 
        borderWidth: 3,
        alignContent: "space-around",
    },
    
})

export default Room;