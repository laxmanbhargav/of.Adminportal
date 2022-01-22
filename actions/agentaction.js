import { getAgentService } from "../services/agentservice";

import * as CONSTANTS from '../contexts/Reducers/contextconstants'


export async function createAgentAction(data, token, dispatch) {

    const url = `${process.env.NEXT_PUBLIC_BASEURL}/api/agent`;
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(data)
    };
    try {

        dispatch({ type: CONSTANTS.ADD_AGENT_LOADING })

        try {
            fetch(url, options)
                .then(async response => {
                    const res = await response.json();
                    return res;
                })
                .then(data => {
                    dispatch({ type: CONSTANTS.ADD_AGENT_SUCCESS, payload: { data: data } });
                });
        }
        catch (err) {
            throw err;
        }
    }
    catch (error) {
        dispatch({ type: CONSTANTS.ADD_AGENT_FAILED, payload: { error: "Please try again" } })
    }
}


export async function getAgentsAction(token, dispatch) {
    try {
        const url = `${process.env.NEXT_PUBLIC_AGENT_API_URL}/api/Agent`;
        dispatch({ type: CONSTANTS.LIST_AGENT_LOADING });
        const response = await getAgentService(token, url).catch((err) => {
            throw err;
        });
        if (response) {
            dispatch({ type: CONSTANTS.LIST_AGENT_SUCCESS, payload: { data: response } })
        }

    }
    catch (error) {
        dispatch({ type: CONSTANTS.LIST_AGENT_FAILED, payload: { error: "Please try again" } })
    }
}

