import React from 'react';
import * as CONSTANTS from './contextconstants';

const ProductReducer = (state, action) => {
    const payload = action.payload
    switch (action.type) {
        case CONSTANTS.ADD_PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CONSTANTS.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.data,
            };
        case CONSTANTS.ADD_PRODUCT_FAILED:
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

export default ProductReducer;