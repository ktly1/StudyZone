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
                    hasComputers: action.payload.hasComputers,
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

const reviewReducer =(rev, action) => {
    switch(action.type){
        
         case 'add_review':
            return [...rev, { 
                    title: action.payload.title,
                    review: action.payload.review,
                    content: action.payload.content,
                }
            ]
        case 'delete_review':
            return rev.filter((reviewPost) =>
            {
                return reviewPost.id !== action.payload
            });
        default:
            return rev;
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
        
        
        dispatch({ type: 'add_room', payload: { roomNum: roomNum, hasComputers: hasComputers} })
       /*
        if(callback)
        {
            callback();
        }
        */
    }
}

const addReviewPost = (dispatch) =>
{
    return (title, room, content) =>
    {
    
            dispatch({ type:'add_review', payload:{title: title,  review: review, content: content}});
        
    }
}

const deleteReviewPost = (dispatch) =>
{
    return (id) =>
    {
        dispatch({type: 'delete_review', payload: id})
    }
}

const updateRoom= (dispatch) => {
    
    return (roomNum) =>{
    dispatch({type: 'update_room', payload: {roomNum} })

    
    
}
    

}

export const {Context, Provider} = createDataContext(roomReducer, reviewReducer,
                                    {addRooms, addReviewPost:addReviewPost, deleteReviewPost:deleteReviewPost}, 
                                    [ ]
                                );