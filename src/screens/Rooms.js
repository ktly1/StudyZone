import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { Context } from "../context/RoomContext";
import {Feather} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


const myIcon = <Icon name="corner-down-left" size={35} color="black" />;
const myDoor = <Icon2 name="door-open" size={35} color="black" />;
const myClock = <Icon name="clock" size={25} color="#ffde00" />;


const SHOW_FILTER_ROOMS = "SHOWFILTERROOMS";
const SHOW_ALL_ROOMS = "SHOWALLROOMS";
const SHOW_AVAILABLE_ROOMS = "SHOWAVAILABLEROOMS";
const SHOW_UNAVAILABLE_ROOMS = "SHOWUNAVAILABLEROOMS";
const SHOW_TIME_ROOMS = "SHOWTIMEROOMS";
const SHOW_NINE_ROOMS = "SHOWNINEROOMS";
const SHOW_TEN_ROOMS = "SHOWTENROOMS";
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

        <TouchableOpacity   onPress = {() => {setRoomState(SHOW_FILTER_ROOMS)}}>
            <View style= {styles.searchButton} >
            <Feather name = "search" size={30}></Feather>
            <Text style={styles.searchText} >Search By</Text>
            </View>
        </TouchableOpacity>
    
        
        <TouchableOpacity style={styles.search} onPress={() =>
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
            <Text style={styles.roomHeading}>Show All Rooms!</Text>

        </TouchableOpacity>

        <View style = {styles.roomContainer}>

            <FlatList
                data = {state}
                keyExtractor={(room) => {return room.id}}
                renderItem={({item}) =>
                {
                    return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                        
                        
                            <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                            </View>
                        
                        <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                        <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                    
                    </TouchableOpacity>
                }} 
            />
        </View>
    
    </View>
     break;

     // AVAILABLE ROOMS
     case SHOW_UNAVAILABLE_ROOMS:
         
     whatToDisplay = <View>
         
         <TouchableOpacity onPress = { () => {setRoomState(SHOW_FILTER_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
            </TouchableOpacity>

         <Text style={styles.roomText}> Unavailable Rooms! D: </Text>
 
         <View style = {styles.roomContainer}>
 
             <FlatList
                 data = {state}
                 keyExtractor={(room) => {return room.id}}
                 renderItem={({item}) =>
                 {
                     if(item.hasComputers === "N"){
                         return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
 
                             <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                            </View>
                         
                             <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                            <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                     
                         </TouchableOpacity>
                     }
                 }} 
             />
 
         </View>
             
 
         </View>
    break;

    // AVAILABLE ROOMS
    case SHOW_AVAILABLE_ROOMS:
        
    whatToDisplay = <View>
        
        <TouchableOpacity onPress = { () => {setRoomState(SHOW_FILTER_ROOMS)}}> 
            <Text style={styles.backButton}> {myIcon} </Text>
        </TouchableOpacity>


        <Text style={styles.roomText}> Available Rooms! :D </Text>

        <View style = {styles.roomContainer}>

            <FlatList
                data = {state}
                keyExtractor={(room) => {return room.id}}
                renderItem={({item}) =>
                {
                    if(item.hasComputers === "Y"){
                        return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>

                            <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                            </View>
                        
                            <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                            <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                    
                        </TouchableOpacity>
                    }
                }} 
            />

        </View>

        </View>
        break;

        // THE GREAT FILTER FOR ROOMS
        case SHOW_FILTER_ROOMS:

            //add clock icon to search by hour
    
            //add green light icon to search by availability

          
            //add red light icon to search by unavailability 

            whatToDisplay = <View>
            

            <TouchableOpacity  onPress = { () => {setRoomState(SHOW_ALL_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
            </TouchableOpacity>

            <Text>The amazing Filter Room</Text>
             
            <View style = {styles.filterContainer}>
        
                <TouchableOpacity  style={styles.filterButtons} onPress={() => {setRoomState(SHOW_TIME_ROOMS)}}>
                        <Text style={styles.filterText}> SEARCH BY HOUR</Text>
                        <Feather style={styles.clock} name = "clock" size = {120}></Feather>
                        
                </TouchableOpacity>

                <Text>{"\n"}</Text>

                <TouchableOpacity style={styles.filterButtons}  onPress={() => {setRoomState(SHOW_AVAILABLE_ROOMS)}}>
                     <Text style={styles.filterText}> SHOW ALL AVAILABLE ROOMS</Text>
                    <View style = {styles.greenLight}></View>
                       
                </TouchableOpacity>
                <Text>{"\n"}</Text>

                <TouchableOpacity style={styles.filterButtons} onPress={() => {setRoomState(SHOW_UNAVAILABLE_ROOMS)}}>
                     <Text style={styles.filterText}> SHOW ALL UNAVAILABLE ROOMS</Text>
                    <View style = {styles.redLight}></View>
                    
                </TouchableOpacity>
            </View> 

            </View>

        break;

        case SHOW_TIME_ROOMS:
         
        whatToDisplay = <View>

            <View style={styles.timeContainer}>
                <TouchableOpacity onPress = { () => {setRoomState(SHOW_FILTER_ROOMS)}}> 
                    <Text style={styles.backButton}> {myIcon} </Text>
                </TouchableOpacity>

                <Text style = {styles.timeHeading}> ~Pick An Hour To Study~ </Text>
            </View>

            <TouchableOpacity onPress={() => {setRoomState(SHOW_NINE_ROOMS)}}>
                    <Text style={styles.roomHeadingTime}>{myClock} 9 am</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setRoomState(SHOW_TEN_ROOMS)}}>
                    <Text style={styles.roomHeadingTime}>{myClock} 10 am</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setRoomState(SHOW_ELEVEN_ROOMS)}}>
                    <Text style={styles.roomHeadingTime}>{myClock} 11 am</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setRoomState(SHOW_TWELVE_ROOMS)}}>
                    <Text style={styles.roomHeadingTime}>{myClock} 12 pm</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setRoomState(SHOW_ONE_ROOMS)}}>
                    <Text style={styles.roomHeadingTime}>{myClock} 1 pm</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setRoomState(SHOW_TWO_ROOMS)}}>
                    <Text style={styles.roomHeadingTime}>{myClock} 2 pm</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setRoomState(SHOW_THREE_ROOMS)}}>
                    <Text style={styles.roomHeadingTime}>{myClock} 3 pm</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setRoomState(SHOW_FOUR_ROOMS)}}>
                    <Text style={styles.roomHeadingTime}>{myClock} 4 pm</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setRoomState(SHOW_FIVE_ROOMS)}}>
                    <Text style={styles.roomHeadingTime}>{myClock} 5 pm</Text>
            </TouchableOpacity>


            </View>

        break;
        // 9 AM ROOMS
        case SHOW_NINE_ROOMS:
            whatToDisplay = <View>

            <View style ={styles.header}>
            <TouchableOpacity onPress = { () => {setRoomState(SHOW_TIME_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
            </TouchableOpacity>
            </View>
        
            <Text style={styles.roomText}> Rooms Open: 9-9am</Text>
            
            <TouchableOpacity onPress = {() => {setRoomState(SHOW_ALL_ROOMS)}}>

            </TouchableOpacity>
    
            <View style = {styles.roomContainer}>
    
                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.nineAm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                            <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                            </View>
                            
                            <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                            <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>

    
            </View>

        break;

        // 10 AM ROOMS
        case SHOW_TEN_ROOMS:
            whatToDisplay = <View>

    <View style ={styles.header}>
        <TouchableOpacity onPress = { () => {setRoomState(SHOW_TIME_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
            </TouchableOpacity>
        
            <Text style={styles.roomText}>Rooms Open 10-10:59am</Text>
            
        
        </View>
    
            <View style = {styles.roomContainer}>

                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.tenAm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                            <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                            </View>
                            
                            <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                            <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>
                
    
            </View>

    break;

    // 11 AM ROOMS
    case SHOW_ELEVEN_ROOMS:
    whatToDisplay = <View>
    
    <View style ={styles.header}>
    <TouchableOpacity onPress = { () => {setRoomState(SHOW_TIME_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
            </TouchableOpacity>
    <Text style={styles.roomText}> Room Open: 11-11:59am</Text>
    
    
</View>
    <View style = {styles.roomContainer}>

        <FlatList
            data = {state}
            keyExtractor={(room) => {return room.id}}
            renderItem={({item}) =>
            {
                if(item.elevenAm == true){
                    return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                    
                    
                    <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                    </View>
                            
                    
                    <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                    <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                        
                
                    </TouchableOpacity>
                }
            }} 
        />

    </View>
        

    </View>
    break;

    // 10 AM ROOMS
    case SHOW_TWELVE_ROOMS:
        whatToDisplay = <View>

<View style ={styles.header}>
        <TouchableOpacity onPress = { () => {setRoomState(SHOW_TIME_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
        </TouchableOpacity>
    
    
        <Text style={styles.roomText}> Rooms Open: 12-12:59pm</Text>
    </View>
        
        

        <View style = {styles.roomContainer}>

            <FlatList
                data = {state}
                keyExtractor={(room) => {return room.id}}
                renderItem={({item}) =>
                {
                    if(item.twelvePm == true){
                        return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                        
                        
                        <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                        </View>
                            
                        
                        <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                        <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                            
                    
                        </TouchableOpacity>
                    }
                }} 
            />

        </View>
            

        </View>
        break;

        // 10 AM ROOMS
        case SHOW_ONE_ROOMS:
            
            whatToDisplay = <View>
            <View style ={styles.header}>
            <TouchableOpacity onPress = { () => {setRoomState(SHOW_TIME_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
            </TouchableOpacity>
        
            <Text style={styles.roomText}> Rooms Open: 1-1:59pm</Text>

            </View>
            
    
            <View style = {styles.roomContainer}>

                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.onePm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                            <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                            </View>
                            
                            <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                            <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>

    
            </View>
            break;

            // 2 AM ROOMS
            case SHOW_TWO_ROOMS:
                whatToDisplay = <View>
            
            <View style ={styles.header}>
            <TouchableOpacity onPress = { () => {setRoomState(SHOW_TIME_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
            </TouchableOpacity>
            
                <Text style={styles.roomText}> Rooms Open: 2-2:59pm</Text>
            </View>

                <View style = {styles.roomContainer}>
    
                    <FlatList
                        data = {state}
                        keyExtractor={(room) => {return room.id}}
                        renderItem={({item}) =>
                        {
                            if(item.twoPm == true){
                                return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                                
                                
                            <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                            </View>
                            
                                
                            <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                            <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                                    
                            
                                </TouchableOpacity>
                            }
                        }} 
                    />
        
                </View>
                
        
                </View>
        break;

        // three AM ROOMS
        case SHOW_THREE_ROOMS:
            whatToDisplay = <View>

<View style ={styles.header}>
<TouchableOpacity onPress = { () => {setRoomState(SHOW_TIME_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
            </TouchableOpacity>
        
            <Text style={styles.roomText}> Rooms Open: 3-3:59pm</Text>
            
           </View>
    
            <View style = {styles.roomContainer}>

                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.threePm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                            <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                            </View>
                            
                            
                            <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                            <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>
                
            </View>
        break;

        // 10 AM ROOMS
        case SHOW_FOUR_ROOMS:
            whatToDisplay = <View>
                <View style ={styles.header}>
            
            <TouchableOpacity onPress = { () => {setRoomState(SHOW_TIME_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
            </TouchableOpacity>
        
            <Text style={styles.roomText}> Rooms Open: 4-4:59pm</Text>
            </View>
            
    
            <View style = {styles.roomContainer}>

                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.fourPm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                            <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                            </View>
                            
                            
                            <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                            <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>
               
    
            </View>    
        break;

        // 10 AM ROOMS
        case SHOW_FIVE_ROOMS:
            whatToDisplay = <View>

        <View style ={styles.header}>
            
            <TouchableOpacity onPress = { () => {setRoomState(SHOW_TIME_ROOMS)}}> 
                <Text style={styles.backButton}> {myIcon} </Text>
            </TouchableOpacity>
        
            <Text style={styles.roomText}> Rooms Open: 5-5:59pm</Text>
            </View>
            
    
            <View style = {styles.roomContainer}>

                <FlatList
                    data = {state}
                    keyExtractor={(room) => {return room.id}}
                    renderItem={({item}) =>
                    {
                        if(item.fivePm == true){
                            return <TouchableOpacity style={styles.roomButton} onPress = { () => {props.navigation.navigate("RoomDetails", {id: item.id,room: item.roomNum, hasComputers: item.hasComputers})}}>
                            
                            
                            <View style={styles.header}>
                                <Text style= {styles.roomText}>{myDoor} Room Number: </Text>
                                <Text style= {styles.roomNum}> {item.roomNum}</Text>
                            </View>
                            
                            
                            <Text style={styles.miniDescript}> Computer Available: {item.hasComputers} </Text>
                            <Text style={styles.miniDescript}> Max Occupancy: {item.roomOccupancy} </Text>
                                
                        
                            </TouchableOpacity>
                        }
                    }} 
                />
    
            </View>
        
            </View>
    }
    return whatToDisplay;
}



const styles = StyleSheet.create
({
    roomHeadingTime:
    {
        alignSelf: 'center',
        textAlign: "center",
        width: 300,
        borderWidth:5,
        padding:13,
        borderRadius: 10,
        backgroundColor: "#005CA6",
        color: 'white',
        fontSize: 30,
        marginTop: 5,
        borderColor: "darkblue",
        

    },
    roomHeading:
    {
        alignSelf: 'center',
        borderWidth:3,
        padding:20,
    
        color: '#FFFFFF',
        backgroundColor: "#005CA6",
        borderColor:'darkblue',
       

    },
    roomText:
    {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 10,
    },
    roomButton:
    {
        marginVertical: 8,
        marginHorizontal: 30,
        padding: 15, 
        borderWidth: 7,
        alignContent: "space-around",
        borderColor: "#005CA6",
    },

    backButton: {
        marginLeft: 10,
        marginTop: 10,
    },
    header: {
        flexDirection: "row",
    },
    roomContainer: {
        marginTop: 10
    },
    roomNum: {
        color: "darkblue",
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 10
    },

    greenLight:
    {
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor: '#00FF00'

    },
    redLight:
    {
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor: '#FF0000',

    },
    filterButtons:
    {
        alignItems: 'center',
    },
    filterContainer:
    {
       padding:50,
        justifyContent: 'space-between',
    },
    searchButton:
    {
        flexDirection: 'row',
        

    },
    searchText:
    {
        fontSize: 25,
    },
    search:
    {
        marginTop: 10,

    },
    timeContainer:
    {
        flexDirection:'row',

    },
    timeHeading:
    {
        alignSelf: 'center',
        fontSize: 30,
    
    }

    
})

export default Room;