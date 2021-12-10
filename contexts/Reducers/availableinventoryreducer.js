import React from 'react';
import * as CONSTANTS from './contextconstants';

const AvailableInventoryReducer = (state, action) => {
    const payload = action.payload
    switch (action.type) {
        case CONSTANTS.ADD_AVAILABLEINVENTORY_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CONSTANTS.ADD_AVAILABLEINVENTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.data,
            };
        case CONSTANTS.ADD_AVAILABLEINVENTORY_FAILED:
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

export default AvailableInventoryReducer;