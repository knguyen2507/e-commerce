import axios from "axios";

const host = process.env.REACT_APP_HOST;

const GetAllCategories = async () => {
    const path = '/category/get-all-categories';
    const url = host + path;

    const response = await axios.get(url);
    const res = response.data;

    return res.metadata.categories;
}

const GetProductsByCategories = async ({category}) => {
    const path = `/category/${category}/products`;
    const url = host + path;

    const response = await axios.get(url);
    const res = response.data;

    return res.metadata.products;
}

export { 
    GetAllCategories,
    GetProductsByCategories
}