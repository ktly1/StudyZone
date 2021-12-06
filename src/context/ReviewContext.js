import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

const roomReducer = (state, action) => {
    switch(action.type){

         case 'add_review':
            return [...state, { 
                    id: action.payload.id,
                    room: action.payload.room, 
                    title: action.payload.title,
                    review: action.payload.review
                }
            ]
            case 'edit_review':
            return state.map((review) => {
                if (review.id === action.payload.id) {
                    return action.payload
                 }
                else{
                    return review;
                }
            })
        case 'delete_review':
            return state.filter((reviewPost) =>
            {
                return reviewPost.id !== action.payload
            });
        default:
            return state;
    }
}


const addReview = (dispatch) =>
{
    return (id,room,title,review) =>
    {
    
            dispatch({ type:'add_review', payload:{id,room,title,review}});
        
    }
}

const editReview = (dispatch) => {
    return (id,room,title,review) => {
            dispatch({ type:'edit_review', payload:{id,room,title,review}});
    }
}


const deleteReview = (dispatch) =>
{
    return (id) =>
    {
        dispatch({type: 'delete_review', payload: id})
    }
}



export const {Context, Provider} = createDataContext(roomReducer, 
                                    {addReview:addReview, deleteReview:deleteReview,editReview:editReview}, 
                                    [ ]
                                );