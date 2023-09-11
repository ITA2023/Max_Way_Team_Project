import React from "react";
import { useCart } from "react-use-cart";
import Style from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Cart() {
    const { items, isEmpty, removeItem, cartTotal, updateItemQuantity } = useCart();
    const { t } = useTranslation();

    if (isEmpty) {
        return (
            <div className={Style.Empty}>
                <img src="https://maxway.uz/images/empty_cart.svg" alt="" />
                <h1>{t("emptyCart")}</h1>
                <p>{t("emptyCart1")}</p>
                <Link to={"/"}>
                    <button>{t("emptyCartBtn")}</button>
                </Link>
            </div>
        );
    }

    return (
        <React.Fragment>
            <h1>{t("cart")}</h1>
            {items.map((item) => (
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
                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                -
                            </button>
                            <h1>{item.quantity}</h1>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                +
                            </button>
                            <button onClick={() => removeItem(item.id)}>{t("narx")}</button>
                        </div>
                        <h1>
                            {item.price.toLocaleString()} {t("narx")}
                        </h1>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
}

export default Cart;