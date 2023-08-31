import React from "react";
import { useCart } from "react-use-cart";
import Style from "./Cart.module.scss";

function Cart() {
    const { items, isEmpty, removeItem, cartTotal } = useCart()

    if (isEmpty) {
        return (
            <React.Fragment>
                <h1 className={Style.Empty}>Your Cart Is Empty</h1>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <h1>Savatcha</h1>
                    {
                        items.map(item => {
                            return (
                                <div className={Style.Items} key={item.id}>
                                    <div className={Style.Item}>
                                        <img src={item.img} alt="" className={Style.item_img} />
                                    </div>
                                </div>
                            )
                        })
                    }
        </React.Fragment>
    );
}

export default Cart;