import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";

// Initial state
const initialState = {
    data: [],
    loading:true,
    error:"",
    wifi:true
};


// Root reducer
function rootReducer(prevState = initialState, action) {
    switch (action.type) {
        case "setData":
            return {
                ...prevState,
                data: action.payload
            }
        case "loading":
            return {
                ...prevState,
                loading: action.payload
            }
        case "error":
            return {
                ...prevState,
                error: action.payload
            }
        case "wifi":
            return {
                ...prevState,
                wifi: action.payload
            }
        default:
            return prevState;
    }
}

// Create store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));



//Export Action Creators
export function setData(data) {
    return {
        type: 'setData',
        payload: data
    };
}


export function setLoading(isLoading) {
    return {
        type: 'loading',
        payload: isLoading
    };
}

export function setError(error) {
    return {
        type: 'error',
        payload: error
    };
}

export function setWifi(result) {
    return {
        type: 'wifi',
        payload: result
    };
}

export default store;
