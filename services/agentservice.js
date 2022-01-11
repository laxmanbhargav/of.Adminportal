import axios from "axios";

export async function createAgentService(data) {
    const url = `${process.env.AGENT_API_URL}/api/agent`;
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(data)
    };
    try {
        return fetch(url, options)
            .then(response => response.json())
            .then(data => {
                return data });
    }
    catch (err) {
        throw err;
    }
}

export async function getAgentService(token) {

    const url = `${process.env.NEXT_PUBLIC_AGENT_API_URL}/api/Agent`;
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${token}`
        },
    };
    try {
        const response = await axios.get(url, options).catch((err) => { throw err });
        return response.data;
    }
    catch (err) {
        return [];
    }
}

