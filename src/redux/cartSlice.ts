
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./types"; 

// Define a type for cart items
type CartItem = Product & {
    quantity: number;
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [] as CartItem[],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const product = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
            state.totalQuantity += 1;
            state.totalPrice += Number(product.price);
            state.totalPrice = Number(state.totalPrice.toFixed(2));
        },
        // Remove the item from cart completely
        removeItemFromCart(state, action) {
            const productId = action.payload;
            const existingItem = state.items.find(item => item.id === productId);
            if (!existingItem) return;
            state.items = state.items.filter(item => item.id !== productId);
            state.totalQuantity -= existingItem.quantity;
            state.totalPrice -= Number(existingItem.price) * existingItem.quantity;
            state.totalPrice = Number(state.totalPrice.toFixed(2));
        },

        // Decrement the quantity of an item by 1
        decrementItemQuantity(state, action) {
            const productId = action.payload;
            const existingItem = state.items.find(item => item.id === productId);
            if (!existingItem || existingItem.quantity <= 1) return;
            existingItem.quantity -= 1;
            state.totalQuantity -= 1;
            state.totalPrice -= Number(existingItem.price);
            state.totalPrice = Number(state.totalPrice.toFixed(2));
        },
        incrementItemQuantity(state, action) {
            const productId = action.payload;
            const existingItem = state.items.find(item => item.id === productId);
            if (!existingItem) return;
            existingItem.quantity += 1;
            state.totalQuantity += 1;
            state.totalPrice += Number(existingItem.price);
            state.totalPrice = Number(state.totalPrice.toFixed(2));
        },
        clearCart(state) {

        },
    },
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    decrementItemQuantity,
    incrementItemQuantity
} = cartSlice.actions;
export default cartSlice.reducer;   
export type { CartItem };
export type { CartItem as CartComponentProps }; // Exporting for use in CartComponent