import * as CONSTANTS from '../contexts/Reducers/contextconstants'
import { createLandService, getLandService} from '../services/landservice';

export async function createLandAction(data, token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.ADD_LAND_LOADING })
        await createLandService(data, token).then((response) => {
            dispatch({ type: CONSTANTS.ADD_LAND_SUCCESS, payload: { data: response } });
        })
            .catch((err) => {
                throw err;
            })

    }
    catch (error) {
        dispatch({ type: CONSTANTS.ADD_LAND_FAILED, payload: { error: "Please try again" } })
    }
}

export async function getLandAction(token, dispatch) {
    try {
        dispatch({ type: CONSTANTS.LIST_LAND_LOADING });
        const response = await getLandService(token).catch((err) => {
            throw err;
        });
        if (response) {
            dispatch({ type: CONSTANTS.LIST_LAND_SUCCESS, payload: { data: response } })
        }

    }
    catch (error) {
        dispatch({ type: CONSTANTS.LIST_LAND_FAILED, payload: { error: "Please try again" } })
    }
}
