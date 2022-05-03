import axios from "axios";

export async function createDcService(data, token) {
    const url = `${process.env.NEXT_PUBLIC_DC_API_URL}/api/DistributionCenter`;
    console.log(url);
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
        throw err;
    }
}

export async function getDCService(data, token) {
    const url = `${process.env.NEXT_PUBLIC_DC_API_URL}/api/DistributionCenter`;
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

export async function getDCInventoryService(data, token) {
    const url = `${process.env.NEXT_PUBLIC_DC_API_URL}/api/DistributionCenterInventory`;
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${token}`
        },
    };
    try {
        console.log("In Try");
        const response = await axios.get(url, options).catch((err) => { throw err });
        console.log(response);
        return response.data;
    }
    catch (err) {
        return [];
    }
}


