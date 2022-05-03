import React from 'react';
import * as CONSTANTS from './contextconstants';

const DcInventoryReducer = (state, action) => {
    const payload = action.payload
    switch (action.type) {
        
            case CONSTANTS.ADD_DCINVENTORY_LOADING:
                return {
                    ...state,
                    loading: true,
                };
            case CONSTANTS.ADD_DCINVENTORY_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    data: payload.data,
                };
            case CONSTANTS.ADD_DCINVENTORY_FAILED:
                return {
                    ...state,
                    loading: false,
                    error: payload.error,
                };
            case CONSTANTS.LIST_DCINVENTORY_LOADING:
                return {
                    ...state,
                    loading: true,
                };
            case CONSTANTS.LIST_DCINVENTORY_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    data: payload.data,
                };
            case CONSTANTS.LIST_DCINVENTORY_FAILED:
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

export default DcInventoryReducer;