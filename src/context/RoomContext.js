import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

const roomReducer = (state, action) => {
    switch(action.type){
        case 'get_room':
            return action.payload;
        case 'add_room':
            return [...state, { 
                    id: Math.floor(Math.random() * 999999), 
                    roomNum: action.payload.roomNum,
                }
            ]
        case 'update_room':
            return state.map((room) => {
                if (room.id === action.payload.id) {
                    return action.payload;
                }
                else{
                    return room;
                }
            })
        default:
            return state;
    }
}

const getRooms= dispatch => {
    return async () => {
        console.log("about to make network request...?")
        try{
            const response = await jsonServer.get("/blogposts");
            console.log("network request completed!!!");
            //response.data === [{}, {}, {}]
            console.log(response.data);
            dispatch({type: 'get_rooms', payload: response.data})
        }
        catch(e){
            console.log("something went wrong...")
            console.log(e);
        }
    }
}

const addRooms = (dispatch) => {
    return (roomNum) => {
        
        
        dispatch({ type: 'add_room', payload: { roomNum: roomNum } })
       /*
        if(callback)
        {
            callback();
        }
        */
    }
}

const deleteHero = (dispatch) => {
    
    return (id) =>
    {
        dispatch({ type: 'delete_hero', payload: id  })
    }
    
}

const updateRoom= (dispatch) => {
    
    return (roomNum) =>{
    dispatch({type: 'update_room', payload: {roomNum} })

    
    
}
    

}

export const {Context, Provider} = createDataContext(roomReducer, 
                                    {addRooms}, 
                                    [ ]
                                );