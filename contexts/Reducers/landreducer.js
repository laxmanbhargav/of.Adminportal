import React from 'react';
import * as CONSTANTS from './contextconstants';

const LandReducer = (state, action) => {
    const payload = action.payload
    switch (action.type) {
        case CONSTANTS.ADD_LAND_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CONSTANTS.ADD_LAND_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.data,
            };
        case CONSTANTS.ADD_LAND_FAILED:
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        case CONSTANTS.LIST_LAND_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CONSTANTS.LIST_LAND_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.data,
            };
        case CONSTANTS.LIST_LAND_FAILED:
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

export default LandReducer;