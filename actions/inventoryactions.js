import * as CONSTANTS from '../contexts/Reducers/contextconstants'
import { createFutureInventoryService, createAvailableInventoryService } from '../services/inventoryservice';

export async function createFutureInventoryAction(data, token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.ADD_FUTUREINVENTORY_LOADING })
        await createFutureInventoryService(data, token).then((response) => {
            dispatch({ type: CONSTANTS.ADD_FUTUREINVENTORY_SUCCESS, payload: { data: response } });
        })
            .catch((err) => {
                throw err;
            })
    }
    catch (error) {
        dispatch({ type: CONSTANTS.ADD_FUTUREINVENTORY_FAILED, payload: { error: "Please try again" } })
    }
}

export async function createAvailableInventoryAction(data, token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.ADD_AVAILABLEINVENTORY_LOADING })
        await createAvailableInventoryService(data, token).then((response) => {
            dispatch({ type: CONSTANTS.ADD_AVAILABLEINVENTORY_SUCCESS, payload: { data: response } });
        })
            .catch((err) => {
                throw err;
            })

    }
    catch (error) {
        dispatch({ type: CONSTANTS.ADD_AVAILABLEINVENTORY_FAILED, payload: { error: "Please try again" } })
    }
}
