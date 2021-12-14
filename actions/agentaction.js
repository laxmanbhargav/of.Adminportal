import * as CONSTANTS from '../contexts/Reducers/contextconstants'
import { createAgentService } from '../services/agentservice';

export async function createAgentAction(data, token, dispatch) {

    const url = `${process.env.NEXT_PUBLIC_BASEURL}/api/agent`;
    try {

        dispatch({ type: CONSTANTS.ADD_AGENT_LOADING })

        try {
            fetch(url, options)
                .then(response => response.json())
                .then(data => { dispatch({ type: CONSTANTS.ADD_AGENT_SUCCESS, payload: { data: data } }); });
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
    catch (error) {
        dispatch({ type: CONSTANTS.ADD_AGENT_FAILED, payload: { error: "Please try again" } })
    }
}
