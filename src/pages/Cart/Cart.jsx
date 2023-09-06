import React from "react";
import { useCart } from "react-use-cart";
import Style from "./Cart.module.scss";
import { Link } from "react-router-dom";

function Cart() {
    const { items, isEmpty, removeItem, cartTotal, addItem, updateItemQuantity } = useCart();
    console.log(cartTotal);

    if (isEmpty) {
        return (
            <div className={Style.Empty}>
                <img src="https://maxway.uz/images/empty_cart.svg" alt="" />
                <h1>Sizning savatingiz hozircha bo'sh</h1>
                <p>Buyurtma qilingan narsalar shu yerda paydo bo'ladi.</p>
                <Link to={"/"}><button>Menyuga qaytish</button></Link>
            </div>
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
                                    <button onClick={()=>removeItem(item.id)}>X</button>
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