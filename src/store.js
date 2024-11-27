import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./store/cartSlice";

let user = createSlice({
    name: "user",
    initialState: "lee",
    reducers: {
        changeName() {
            return "john kim";
        },
    },
});

export let { changeName } = user.actions;

let stock = createSlice({
    name: "stock",
    initialState: [10, 11, 12],
});

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer
    },
});
