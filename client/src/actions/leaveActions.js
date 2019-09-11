import {GET_ITEMS_LEAVE,GET_ONE_LEAVE,ADD_ITEM_LEAVE,DELETE_ITEM_LEAVE,ITEMS_LOADING_LEAVE} from './types'
import axios from 'axios'

export  const getAbsences= () => dispatch=>{
    dispatch(setItemsLoading());
    axios
    .get('/api/leave')
        .then(res=> 
            dispatch({
                type:GET_ITEMS_LEAVE,
                payload: res.data
            }))
}

export  const deleteLeave = (id)=> dispatch =>{
   axios.delete(`/api/leave/${id}`).then(res=>
    dispatch({
        type : DELETE_ITEM_LEAVE,
        payload : id
    }))
}

export  const addALeave = (item) =>dispatch =>{
   axios
    .post('/api/leave', item)
    .then(res=>dispatch({
        type: ADD_ITEM_LEAVE,
        payload: res.data
    }
    ))
}


export  const getOneLeave= (id) => dispatch=>{
    dispatch(setItemsLoading());
    axios
    .get(`/api/leave/get?id=${id}`)
        .then(res=> 
            dispatch({
                type:GET_ONE_LEAVE,
                payload: res.data
            }))
}


export  const setItemsLoading = () =>{
    return{
        type: ITEMS_LOADING_LEAVE
    }
}

