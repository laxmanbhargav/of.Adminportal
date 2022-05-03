import * as CONSTANTS from '../contexts/Reducers/contextconstants'
import { createDcService, getDCService, getDCInventoryService} from '../services/dcservice';

export async function createDcAction(data, token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.ADD_DC_LOADING })
        await createDcService(data, token).then((response) => {
            console.log("In Try");
            console.log(data)
            dispatch({ type: CONSTANTS.ADD_DC_SUCCESS, payload: { data: response } });
        })
            .catch((err) => {
                throw err;
            })

    }
    catch (error) {
        console.log("Error");
        dispatch({ type: CONSTANTS.ADD_DC_FAILED, payload: { error: "Please try again" } })
    }
}

export async function getDcAction(token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.LIST_DC_LOADING });
        const response = await getDCService(token).catch((err) => {
            throw err;
        });
        if (response) {
            dispatch({ type: CONSTANTS.LIST_DC_SUCCESS, payload: { data: response } })
        }

    }
    catch (error) {
        dispatch({ type: CONSTANTS.LIST_DC_FAILED, payload: { error: "Please try again" } })
    }
}

export async function getDcInventoryAction(token, id, dispatch) {
    try {
        dispatch({ type: CONSTANTS.LIST_DCINVENTORY_LOADING });
        const response = await getDCInventoryService(id, token).catch((err) => {
            throw err;
        });
        if (response) {
            console.log("In If Condition");
            dispatch({ type: CONSTANTS.LIST_DCINVENTORY_SUCCESS, payload: { data: response } })
        }

    }
    catch (error) {
        console.log("In Error");
        dispatch({ type: CONSTANTS.LIST_DCINVENTORY_FAILED, payload: { error: "Please try again" } })
    }
}
