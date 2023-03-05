import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, {payload}) => {
            state.items.push(payload);
        },
        deleteFromCart: (state, action) => {
            console.log(action.payload);
            state.items.pop();
        }
    }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;