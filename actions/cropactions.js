import * as CONSTANTS from '../contexts/Reducers/contextconstants'
import { createCropService} from '../services/cropservice';

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
