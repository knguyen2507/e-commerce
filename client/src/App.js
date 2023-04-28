import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {ErrorBoundary} from 'react-error-boundary';
// pages
import Home from './pages/Home.js';
import Category from './pages/Category.js';
import Brand from './pages/Brand.js';
import Product from './pages/Product.js';
import Signin from './pages/Signin.js';
import Signup from './pages/Signup.js';
import Search from './pages/Search.js';
import Logout from './pages/Logout.js';
import User from './pages/User.js';
import Admin from './pages/Admin.js';
import NotFound from './pages/NotFound.js';
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

  function ErrorHandler({error}) {
    return (
      <div role="alert">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
      </div>
    )
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home products={products} brands={brands} categories={categories} />} />
          <Route path='/user/:id' element={<User brands={brands} categories={categories} />} />
          <Route path='/login' element={<Signin brands={brands} categories={categories} />} />
          <Route path='/register' element={<Signup brands={brands} categories={categories} />} />
          <Route path='/product/search' element={<Search brands={brands} categories={categories} />} />
          <Route path='/logout' element={<Logout brands={brands} categories={categories} />} />
          <Route path='/admin-page' element={<Admin />} />
          <Route path={'/category/:id/products'} element={<Category brands={brands} categories={categories} />} />
          <Route path={'/brand/:id/products'} element={<Brand brands={brands} categories={categories} />} />
          <Route path={'/product/:id'} element={<Product brands={brands} categories={categories} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
