import{
    GET_ITEMS_NSP, ADD_ITEM_NSP, DELETE_ITEM_NSP, GET_ONE_NSP, ITEMS_LOADING_NSP
} from './types'
import axios from 'axios'


export  const getNsp= () => dispatch=>{
    dispatch(setItemsLoading());
    axios
    .get('/api/nsp')
        .then(res=> 
            dispatch({
                type:GET_ITEMS_NSP,
                payload: res.data
            }))
}

export  const deleteNsp= (id)=> dispatch =>{
   axios.delete(`/api/interns/${id}`).then(res=>
    dispatch({
        type : DELETE_ITEM_NSP,
        payload : id
    }))
}

export  const addNsp = (item) =>dispatch =>{
   axios
    .post('/api/nsp', item)
    .then(res=>dispatch({
        type: ADD_ITEM_NSP,
        payload: res.data
    }
    ))
}


export  const getOneNsp= (id) => dispatch=>{
    dispatch(setItemsLoading());
    axios
    .get(`/api/nsp/get?id=${id}`)
        .then(res=> 
            dispatch({
                type:GET_ONE_NSP,
                payload: res.data
            }))
}

export  const setItemsLoading = () =>{
    return{
        type: ITEMS_LOADING_NSP
    }
}


