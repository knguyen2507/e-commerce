import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// pages
import Home from './pages/Home.js';
import Category from './pages/Category.js';
import Brand from './pages/Brand.js';
import Product from './pages/Product.js';
// call api
import { GetAllBrands } from './services/brandAPI';
import { GetAllCategories } from './services/categoryAPI';
import { GetAllProducts } from './services/productAPI.js';

function App() {
  const [brands, getBrands] = useState([]);
  const [categories, getCategories] = useState([]);
  const [products, getProducts] = useState([]);
    
  useEffect(() => {
      const getAllBrands = async () => {
          const brands = await GetAllBrands();
          getBrands(brands);
      }
      getAllBrands();
  }, [])
  useEffect(() => {
    const getAllCategories = async () => {
        const categories = await GetAllCategories();
        getCategories(categories);
    }
    getAllCategories();
  }, [])
  useEffect(() => {
    const getAllProducts = async () => {
        const products = await GetAllProducts();
        getProducts(products);
    }
    getAllProducts();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home products={products} brands={brands} categories={categories} />} />
        {categories.map(category => (
          <Route path={'/category/'+category.id+'/products'} element={<Category title={category.name} idTitle={category.id} brands={brands} categories={categories} />} />
        ))}
        {brands.map(brand => (
          <Route path={'/brand/'+brand.id+'/products'} element={<Brand title={brand.name} idTitle={brand.id} brands={brands} categories={categories} />} />
        ))}
        {products.map(product => (
          <Route path={'/product/'+product.id} element={<Product product={product} brands={brands} categories={categories} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
