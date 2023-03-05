import React from "react";
import { Outlet } from "react-router-dom";
import { useCartStore } from "../store";

const OrderLayout = () => {
    const { data, addToCart } = useCartStore();
    const payload = {id: 1};

    return (
        <div className="order-layout">
            items: {data.items.length}
            <div className="order-header">
                <button onClick={() => addToCart(payload)}>Add to Cart</button>
            </div>
            <div className="order-container">
                <Outlet />
            </div>
        </div>
    )
}

export default OrderLayout;