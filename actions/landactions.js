import * as CONSTANTS from '../contexts/Reducers/contextconstants'
import { createLandService} from '../services/landservice';

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
