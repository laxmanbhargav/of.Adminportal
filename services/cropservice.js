import axios from "axios";

export async function createCropService(data, token) {
    const url = `${process.env.NEXT_PUBLIC_CROP_API_URL}/api/Crop`;
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

