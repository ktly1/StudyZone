import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

const roomReducer = (state, action) => {
    switch(action.type){
        case 'get_room':
            return action.payload;
        case 'add_room':
            return [...state, { 
                    id: Math.floor(Math.random() * 9999990), 
                    roomNum: action.payload.roomNum,
                    hasComputers: action.payload.hasComputers,
                    reviews: action.payload.reviews
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
            case 'add_review':
                return [...state, { 
                    id: Math.floor(Math.random() * 9999990), 
                    roomNum: action.payload.roomNum,
                    hasComputers: action.payload.hasComputers,
                    
                }
            ]
            case 'delete_review':
                return state.filter((reviewPost) =>
                {
                    return reviewPost.id !== action.payload
                });

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
    return (roomNum, hasComputers) => {
        dispatch({ type: 'add_room', payload: {roomNum, hasComputers} })
    }
}

const addReview = (dispatch) => {
    return (title, review) => {

            dispatch({ type:'add_review', payload:{title,  review}});
    }
}

const deleteReview = (dispatch) =>
{
    return (id) =>
    {
        dispatch({type: 'delete_review', payload: id})
    }
}

const updateRoom = (dispatch) => {
    
    return (roomNum) =>{
    dispatch({type: 'update_room', payload: {roomNum} })

    
    
}
    

}

export const {Context, Provider} = createDataContext(roomReducer,
                                    {addRooms: addRooms, deleteReview:deleteReview}, 
                                    [ ]
                                );