import axios from "axios";

const host = process.env.REACT_APP_HOST;

const GetAllBrands = async () => {
    const path = '/brand/get-all-brands';
    const url = host + path;

    const response = await axios.get(url);
    const res = response.data;

    return res.metadata.brands;
}

const GetProductsByBrands = async ({brand}) => {
    const path = `/brand/${brand}/products`;
    const url = host + path;

    const response = await axios.get(url);
    const res = response.data;

    return res.metadata.products;
}

export { 
    GetAllBrands,
    GetProductsByBrands
}