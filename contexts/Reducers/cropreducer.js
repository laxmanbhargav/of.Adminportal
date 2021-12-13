import React from 'react';
import * as CONSTANTS from './contextconstants';

const CropReducer = (state, action) => {
    const payload = action.payload
    switch (action.type) {
        case CONSTANTS.ADD_CROP_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CONSTANTS.ADD_CROP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.data,
            };
        case CONSTANTS.ADD_CROP_FAILED:
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

export default CropReducer;