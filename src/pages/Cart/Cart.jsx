import React from "react";
import { useCart } from "react-use-cart";
import Style from "./Cart.module.scss";

function Cart() {
    const { items, isEmpty, removeItem, cartTotal, addItem, updateItemQuantity } = useCart();
    console.log(cartTotal);

    if (isEmpty) {
        return (
            <React.Fragment>
                <h1 className={Style.Empty}>Your Cart Is Empty</h1>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1>Savatcha</h1>
                {items.map((item) => {
                    return (
                        <div className={Style.Items} key={item.id}>
                            <div className={Style.Item}>
                                <span>
                                    <img
                                        src={process.env.PUBLIC_URL + "/images/" + item.img}
                                        alt=""
                                        className={Style.item_img}
                                    />
                                </span>
                                <div className={Style.ItemQuan}>
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(item.id, item.quantity - 1)
                                        }
                                    >
                                        -
                                    </button>
                                    <h1>{item.quantity}</h1>
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(item.id, item.quantity + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                                <h1> {item.price.toLocaleString()} so'm</h1>
                            </div>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default Cart;