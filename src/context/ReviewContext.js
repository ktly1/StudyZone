import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

const roomReducer = (state, action) => {
    switch(action.type){

         case 'add_review':
            return [...state, { 
                    id: Math.floor(Math.random() * 999999), 
                    title: action.payload.title,
                    room: action.payload.room,
                    content: action.payload.content,
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


const addReviewPost = (dispatch) =>
{
    return (title, room, content) =>
    {
    
            dispatch({ type:'add_review', payload:{title: title,  room: room, content: content}});
        
    }
}

const deleteReviewPost = (dispatch) =>
{
    return (id) =>
    {
        dispatch({type: 'delete_review', payload: id})
    }
}



export const {Context, Provider} = createDataContext(roomReducer, 
                                    {addReviewPost:addReviewPost, deleteReviewPost:deleteReviewPost}, 
                                    [ ]
                                );