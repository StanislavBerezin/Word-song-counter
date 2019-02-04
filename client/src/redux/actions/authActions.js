import * as actionTypes from "./actionTypes";
import serverConnect from "../../axios/connection";

export const authStart = () =>{
    return {
        type: actionTypes.SET_AUTH
    }
}

export const authSuccess = (authData) =>{
    return{
        type: actionTypes.SET_AUTH_SUCCESS,
        authData
    }
}

export const authFailed = (error)=>{
    return{
        type: actionTypes.SET_AUTH_FAILED,
        error
    }
}

export const auth = ()=>{
    return dispatch =>{
        dispatch(authStart())
    }
}