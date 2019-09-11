//actions will dispatch here
import {GET_ITEMS_LEAVE,GET_ONE_LEAVE,
        ADD_ITEM_LEAVE,
        DELETE_ITEM_LEAVE,
        ITEMS_LOADING_LEAVE,
    } from '../actions/types'



const initialState = {
    items : [],
    loading : false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS_LEAVE :
            return {
               ...state,
               items: action.payload,
               loading : false
            }
        case DELETE_ITEM_LEAVE: 
            return {
                ...state,
                items : state.items.filter(item=> item._id !== action.payload)
            }
        case ADD_ITEM_LEAVE : 
            return {
                ...state,
                items :[action.payload, ...state.items]
            }
        case ITEMS_LOADING_LEAVE:
            return{
                ...state,
                loading : true
            }
        case GET_ONE_LEAVE:
            return{
                ...state,
                items :[action.payload, ...state.items]
            }


            
        default:
            return state
    }
}