//actions will dispatch here
import {GET_ITEMS_INTERN,GET_ONE_INTERN, ADD_ITEM_INTERN, DELETE_ITEM_INTERN, ITEMS_LOADING_INTERN
,GET_ITEMS_STAFF,
GET_ONE_STAFF ,
ADD_ITEM_STAFF,
DELETE_ITEM_STAFF,
ITEMS_LOADING_STAFF,} from '../actions/types'



const initialState = {
    items : [],
    loading : false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS_INTERN :
            return {
               ...state,
               items: action.payload,
               loading : false
            }
        case DELETE_ITEM_INTERN: 
            return {
                ...state,
                items : state.items.filter(item=> item._id !== action.payload)
            }
        case ADD_ITEM_INTERN : 
            return {
                ...state,
                items :[action.payload, ...state.items]
            }
        case ITEMS_LOADING_INTERN:
            return{
                ...state,
                loading : true
            }
        case GET_ONE_INTERN:
            return{
                ...state,
                items :[action.payload, ...state.items]
            }
        case GET_ITEMS_STAFF :
            return {
                ...state,
                items: action.payload,
                loading : false
            }
        case DELETE_ITEM_STAFF: 
            return {
                ...state,
                items : state.items.filter(item=> item._id !== action.payload)
            }
        case ADD_ITEM_STAFF : 
            return {
                ...state,
                items :[action.payload, ...state.items]
            }
        case ITEMS_LOADING_STAFF:
            return{
                ...state,
                loading : true
            }
        case GET_ONE_STAFF:
            return{
                ...state,
                items :[action.payload, ...state.items]
            }

        default:
            return state
    }
}