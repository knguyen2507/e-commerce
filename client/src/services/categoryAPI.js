const host = 'http://localhost:5505'

const GetAllCategories = async () => {
    const path = '/category/get-all-categories';
    const url = host + path;

    const response = await fetch(url);
    const res = await response.json();

    return res.metadata.categories;
}

export { 
    GetAllCategories
}