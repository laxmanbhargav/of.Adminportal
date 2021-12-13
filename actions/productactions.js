import * as CONSTANTS from '../contexts/Reducers/contextconstants'
import { createProductCategoryService, createProductService, listProductService, listProductCategoryService } from '../services/productservice';

export async function createProductCategoryAction(data, token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.ADD_PRODUCTCATEGORY_LOADING })
        await createProductCategoryService(data, token).then((response) => {
            dispatch({ type: CONSTANTS.ADD_PRODUCTCATEGORY_SUCCESS, payload: { data: response } });
        })
            .catch((err) => {
                throw err;
            })
    }
    catch (error) {
        dispatch({ type: CONSTANTS.ADD_PRODUCTCATEGORY_FAILED, payload: { error: "Please try again" } })
    }
}

export async function createProductAction(data, token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.ADD_PRODUCT_LOADING })
        await createProductService(data, token).then((response) => {
            dispatch({ type: CONSTANTS.ADD_PRODUCT_SUCCESS, payload: { data: response } });
        })
            .catch((err) => {
                throw err;
            })
    }
    catch (error) {
        dispatch({ type: CONSTANTS.ADD_PRODUCT_FAILED, payload: { error: "Please try again" } })
    }
}

export async function listProductAction(token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.LIST_PRODUCT_LOADING })
        await listProductService(token).then((response) => {
            dispatch({ type: CONSTANTS.LIST_PRODUCT_SUCCESS, payload: { data: response } });
        })
            .catch((err) => {
                throw err;
            })
    }
    catch (error) {
        dispatch({ type: CONSTANTS.LIST_PRODUCT_FAILED, payload: { error: "Please try again" } })
    }
}

export async function listProductCategoryAction(token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.LIST_PRODUCTCATEGORY_LOADING })
        await listProductCategoryService(token).then((response) => {
            dispatch({ type: CONSTANTS.LIST_PRODUCTCATEGORY_SUCCESS, payload: { data: response } });
        })
            .catch((err) => {
                throw err;
            })
    }
    catch (error) {
        dispatch({ type: CONSTANTS.LIST_PRODUCTCATEGORY_FAILED, payload: { error: "Please try again" } })
    }
}