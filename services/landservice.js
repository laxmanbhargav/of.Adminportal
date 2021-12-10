import axios from "axios";

export async function createLandService(data, token) {
    const url = `${process.env.NEXT_PUBLIC_LAND_API_URL}/api/LandDetail`;
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${token}`
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

