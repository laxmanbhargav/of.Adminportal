import * as CONSTANTS from '../contexts/Reducers/contextconstants'
import { createCropService, getAgentService } from '../services/cropservice';

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

export async function getCropsAction(token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.LIST_CROP_LOADING });
        const response = await getAgentService(token).catch((err) => {
            throw err;
        });
        if (response) {
            dispatch({ type: CONSTANTS.LIST_CROP_SUCCESS, payload: { data: response } })
        }

    }
    catch (error) {
        dispatch({ type: CONSTANTS.LIST_CROP_FAILED, payload: { error: "Please try again" } })
    }
}