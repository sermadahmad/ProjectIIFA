import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, ProductsState } from "./types";
import { fetchProducts, addProduct, deleteProduct } from "./productThunks";

const initialState: ProductsState = {
    items: [],
    fetchLoading: false,
    fetchError: null,
    addLoading: false,
    addError: null,
    deleteLoading: false,
    deleteError: null,

};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.fetchLoading = true;
                state.fetchError = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.fetchLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.fetchLoading = false;
                state.fetchError = action.error.message ?? null;
            });
        builder
            .addCase(addProduct.pending, (state) => {
                state.addLoading = true;
                state.addError = null;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.addLoading = false;
                const newProduct = {
                    ...action.payload, rating: {
                        rate: 0,
                        count: 0
                    }
                };
                state.items.push(newProduct);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.addLoading = false;
                state.addError = action.error.message ?? null;
            });
        builder
            .addCase(deleteProduct.pending, (state) => {
                state.deleteLoading = true;
                state.deleteError = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.deleteLoading = false;
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.deleteLoading = false;
                state.deleteError = action.error.message ?? null;
            });
    }
});

export default productsSlice.reducer;
