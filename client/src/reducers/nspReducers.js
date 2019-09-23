//actions will dispatch here
import{
    GET_ITEMS_NSP, ADD_ITEM_NSP, DELETE_ITEM_NSP, GET_ONE_NSP, ITEMS_LOADING_NSP
} from '../actions/types'



const initialState = {
items : [],
loading : false
}

export default function(state = initialState, action){
switch(action.type){
    case GET_ITEMS_NSP :
        return {
           ...state,
           items: action.payload,
           loading : false
        }
    case DELETE_ITEM_NSP: 
        return {
            ...state,
            items : state.items.filter(item=> item._id !== action.payload)
        }
    case ADD_ITEM_NSP : 
        return {
            ...state,
            items :[action.payload, ...state.items]
        }
    case ITEMS_LOADING_NSP:
        return{
            ...state,
            loading : true
        }
    case GET_ONE_NSP:
        return{
            ...state,
            items :[action.payload, ...state.items]
        }


        
    default:
        return state
}
}