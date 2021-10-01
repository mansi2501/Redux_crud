import * as types from './actionType';
import axios from 'axios';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
})

const userDelete = () => ({
    type: types.DELETE_USER
})

const userAdd = () => ({
    type: types.ADD_USER
})

const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user
})

const userEdit = () => ({
    type: types.EDIT_USER
})

export const loadUsers = () => {
    return function (dispatch)
    {
        axios.get(`${process.env.REACT_APP_API}`)
        .then((res)=>  {
            dispatch(getUsers(res.data));
        }).catch(error=>console.log(error))
    }
}

export const deleteUser = (id) => {
    return function (dispatch)
    {
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((res)=>  {
            dispatch(userDelete());
            dispatch(loadUsers());
        }).catch(error=>console.log(error))
    }
}

export const addUser = (user) => {
    return function (dispatch)
    {
        axios.post(`${process.env.REACT_APP_API}`, user)
        .then((res)=>  {
            dispatch(userAdd());
            dispatch(loadUsers());
        }).catch(error=>console.log(error))
    }
}

export const getSingleUser = (id) => {
    return function (dispatch)
    {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((res)=>  {
            dispatch(getUser(res.data));
        }).catch(error=>console.log(error))
    }
}

export const editUser = (user, id) => {
    return function (dispatch)
    {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user)
        .then((res)=>  {
            dispatch(userEdit());
        }).catch(error=>console.log(error))
    }
}