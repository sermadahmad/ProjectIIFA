import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AddProduct, Product } from "./types";

// Thunk to fetch products
export const fetchProducts = createAsyncThunk<Product[]>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
        console.log("Fetched products:", response.data);
        return response.data;
    }
);

// Thunk to add a new product
export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (newProduct: AddProduct) => {
        const response = await axios.post<AddProduct>('https://fakestoreapi.com/products', newProduct);
        return response.data;
    }
);

// Thunk to delete a product
export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (productId: number) => {
        await axios.delete(`https://fakestoreapi.com/products/${productId}`);
        return productId;
    }
);