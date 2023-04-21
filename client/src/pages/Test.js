import { useState, useEffect } from "react";
import { GetAllProducts } from '../services/productAPI.js';

function Test() {
    const [products, getProducts] = useState([]);
    
    useEffect(() => {
        const getAllProducts = async () => {
            const products = await GetAllProducts();
            console.log(`products:::`, products);
            getProducts(products);
        }
        getAllProducts();
    }, [])

    return (
       <div>
        {products.map(product => (
            <div>
                <img src={'images/' + product.idCategory + '/' + product.id + '.jpg'}></img>
                <p>{product.name}</p>
            </div>
        ))}
       </div>
    );
}

export default Test;