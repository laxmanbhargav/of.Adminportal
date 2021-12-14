

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
            .then(data => { return data });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

