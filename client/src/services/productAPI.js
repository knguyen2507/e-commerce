import axios from "axios";

const host = process.env.REACT_APP_HOST;

const GetAllProducts = async () => {
    const path = '/product/get-all-products';
    const url = host + path;

    const response = await axios.get(url);
    const res = response.data;

    return res.metadata.products;
};

const GetProductById = async ({id}) => {
    const path = '/product/' + id;
    const url = host + path;

    const response = await axios.get(url);
    const res = response.data;

    return res.metadata.product;
}

const SearchProducts = async (key) => {
    const path = '/product/search';
    const url = host + path;

    const payload = {key: key};
    try {
        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = response.data;
    
        return res.metadata;
    } catch (error) {
        return error.response.data;
    }
}

export { 
    GetAllProducts,
    GetProductById,
    SearchProducts
}