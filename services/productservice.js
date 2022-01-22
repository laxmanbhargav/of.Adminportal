import axios from "axios";

export async function createProductCategoryService(data, token) {
    const url = `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/api/ProductCategory`;
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

export async function createProductService(data, token) {
    const url = `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/api/Product`;
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

export async function listProductService(token, id) {
    const url = `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/api/Product`;
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

export async function listProductCategoryService(token, id) {
    const url = `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/api/ProductCategory`;
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



