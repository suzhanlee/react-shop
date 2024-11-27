import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        addProduct(state, action) {
            let idx = state.findIndex((s) => {
                return s.id == action.payload;
            });

            if (idx > -1) {
                state[idx].count += action.payload.count;
            } else {
                state.push(action.payload);
            }
        },
        addStock(state, action) {
            let idx = state.findIndex((s) => {
                return s.id == action.payload;
            });
            state[idx].count += 1;
        },
    },
});

export default cart;
export let { addStock, addProduct } = cart.actions;
