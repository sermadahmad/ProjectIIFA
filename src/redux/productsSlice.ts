import { createSlice } from "@reduxjs/toolkit";
import products, { Product } from "../products";


interface ProductsState {
    value: Product[];
}

const initialState: ProductsState = {
    value: products, // Initialize with the imported products array
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
});

export default productsSlice.reducer;