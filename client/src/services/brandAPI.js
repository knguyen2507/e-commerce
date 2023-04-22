const host = 'http://localhost:5505'

const GetAllBrands = async () => {
    const path = '/brand/get-all-brands';
    const url = host + path;

    const response = await fetch(url);
    const res = await response.json();

    return res.metadata.brands;
}

const GetProductsByBrands = async ({brand}) => {
    const path = `/brand/${brand}/products`;
    const url = host + path;

    const response = await fetch(url, {method: "POST"});
    const res = await response.json();

    return res.metadata.products;
}

export { 
    GetAllBrands,
    GetProductsByBrands
}