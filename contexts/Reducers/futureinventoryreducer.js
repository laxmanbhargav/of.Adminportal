import React from 'react';
import * as CONSTANTS from './contextconstants';

const FutureInventoryReducer = (state, action) => {
    const payload = action.payload
    switch (action.type) {
        case CONSTANTS.ADD_FUTUREINVENTORY_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CONSTANTS.ADD_FUTUREINVENTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.data,
            };
        case CONSTANTS.ADD_FUTUREINVENTORY_FAILED:
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
    

        default: return {
            ...state
        }
    }
};

export default FutureInventoryReducer;