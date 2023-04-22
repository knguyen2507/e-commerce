const host = 'http://localhost:5505';

const GetAllProducts = async () => {
    const path = '/product/get-all-products';
    const url = host + path;

    const response = await fetch(url);
    const res = await response.json();

    return res.metadata.products;
};

const GetProductById = async ({id}) => {
    const path = '/product/' + id;
    const url = host + path;

    const response = await fetch(url);
    const res = await response.json();

    return res.metadata.product;
}

export { 
    GetAllProducts,
    GetProductById
}