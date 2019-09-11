import {GET_ITEMS_INTERN, GET_ONE_INTERN, ADD_ITEM_INTERN, DELETE_ITEM_INTERN, ITEMS_LOADING_INTERN,
    GET_ITEMS_STAFF,
    GET_ONE_STAFF ,
    ADD_ITEM_STAFF,
    DELETE_ITEM_STAFF,
    ITEMS_LOADING_STAFF,} from './types'
import axios from 'axios'

export  const getInterns= () => dispatch=>{
    dispatch(setItemsLoading());
    axios
    .get('/api/interns')
        .then(res=> 
            dispatch({
                type:GET_ITEMS_INTERN,
                payload: res.data
            }))
}

export  const deleteIntern = (id)=> dispatch =>{
   axios.delete(`/api/interns/${id}`).then(res=>
    dispatch({
        type : DELETE_ITEM_INTERN,
        payload : id
    }))
}

export  const addIntern = (item) =>dispatch =>{
   axios
    .post('/api/interns', item)
    .then(res=>dispatch({
        type: ADD_ITEM_INTERN,
        payload: res.data
    }
    ))
}


export  const getOneIntern= (id) => dispatch=>{
    dispatch(setItemsLoading());
    axios
    .get(`/api/interns/get?id=${id}`)
        .then(res=> 
            dispatch({
                type:GET_ONE_INTERN,
                payload: res.data
            }))
}


export  const setItemsLoading = () =>{
    return{
        type: ITEMS_LOADING_INTERN
    }
}


export  const getStaff= () => dispatch=>{
    dispatch(setItemsLoading());
    axios
    .get('/api/staff')
        .then(res=> 
            dispatch({
                type:GET_ITEMS_STAFF,
                payload: res.data
            }))
}

export  const deleteStaff = (id)=> dispatch =>{
   axios.delete(`/api/staff/${id}`).then(res=>
    dispatch({
        type : DELETE_ITEM_STAFF,
        payload : id
    }))
}

export  const addStaff = (item) =>dispatch =>{
   axios
    .post('/api/staff', item)
    .then(res=>dispatch({
        type: ADD_ITEM_STAFF,
        payload: res.data
    }
    ))
}


export  const getOneStaff= (id) => dispatch=>{
    dispatch(setItemsLoading());
    axios
    .get(`/api/staff/get?id=${id}`)
        .then(res=> 
            dispatch({
                type:GET_ONE_STAFF,
                payload: res.data
            }))
}


export  const setStaffLoading = () =>{
    return{
        type: ITEMS_LOADING_STAFF
    }
}

