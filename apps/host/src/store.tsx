import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

import { addToCart, deleteFromCart } from './slices/cart';
import cart from './slices/cart'

const store = configureStore({
    reducer: {
        cart
    }
});

export function PhoenixStoreProvider({children}) {
    return <Provider store={store}>{children}</Provider>
}

export function useCartStore() {
    const data = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return {
        data,
        addToCart: (payload: any) => dispatch(addToCart(payload)),
        deleteFromCart: (payload: any) => dispatch(deleteFromCart(payload))
    }
}

export default store;