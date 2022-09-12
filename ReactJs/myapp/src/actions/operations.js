import { onDecrement, onIncrement } from "../actionTypes";

export function Increment(value){
    return dispatch => {
        console.log("Called Increament")
        dispatch(onIncrement(value))
    }
}

export function Decrement(value){
    return dispatch => {
        console.log("Called Decreament")
        dispatch(onDecrement(value))
    }
}