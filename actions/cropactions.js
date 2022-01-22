import * as CONSTANTS from '../contexts/Reducers/contextconstants'
import { createCropService, listCropService } from '../services/cropservice';

export async function createCropAction(data, token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.ADD_CROP_LOADING })
        await createCropService(data, token).then((response) => {
            dispatch({ type: CONSTANTS.ADD_CROP_SUCCESS, payload: { data: response } });
        })
            .catch((err) => {
                throw err;
            })
    }
    catch (error) {
        dispatch({ type: CONSTANTS.ADD_CROP_FAILED, payload: { error: "Please try again" } })
    }
}

export async function listCropAction(token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.LIST_CROP_LOADING });
        console.log(token);
        const response = await listCropService(token).catch((err) => {
            console.log("In List Crop Action");
            throw err;
        });
        if (response) {
            console.log("In List Response");
            dispatch({ type: CONSTANTS.LIST_CROP_SUCCESS, payload: { data: response } })
        }
    }
    catch (error) {
        console.log("In List Erro");
        dispatch({ type: CONSTANTS.LIST_CROP_FAILED, payload: { error: "Please try again" } })
    }
}