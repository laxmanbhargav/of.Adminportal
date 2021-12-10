import React from 'react';
import * as CONSTANTS from './contextconstants';

const ProductCategoryReducer = (state, action) => {
    const payload = action.payload
    switch (action.type) {
        case CONSTANTS.ADD_PRODUCTCATEGORY_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CONSTANTS.ADD_PRODUCTCATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.data,
            };
        case CONSTANTS.ADD_PRODUCTCATEGORY_FAILED:
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

export default ProductCategoryReducer;