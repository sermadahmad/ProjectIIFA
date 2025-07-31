
import { createSlice } from "@reduxjs/toolkit";

// Define a type for cart items
type CartItem = {
    id: number;
    imgsrc: string;
    freeDelivery: boolean;
    coins: boolean;
    title: string;
    price: number;
    discount: number;
    coinsSave: number;
    rating: number;
    reviewCount: number;
    sold: number;
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
            state.totalPrice += product.price;
        },
        // Remove the item from cart completely
        removeItemFromCart(state, action) {
            const productId = action.payload;
            const existingItem = state.items.find(item => item.id === productId);
            if (!existingItem) return;
            state.items = state.items.filter(item => item.id !== productId);
            state.totalQuantity -= existingItem.quantity;
            state.totalPrice -= existingItem.price * existingItem.quantity;
        },

        // Decrement the quantity of an item by 1
        decrementItemQuantity(state, action) {
            const productId = action.payload;
            const existingItem = state.items.find(item => item.id === productId);
            if (!existingItem || existingItem.quantity <= 1) return;
            existingItem.quantity -= 1;
            state.totalQuantity -= 1;
            state.totalPrice -= existingItem.price;
        },
        incrementItemQuantity(state, action) {
            const productId = action.payload;
            const existingItem = state.items.find(item => item.id === productId);
            if (!existingItem) return;
            existingItem.quantity += 1;
            state.totalQuantity += 1;
            state.totalPrice += existingItem.price;
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