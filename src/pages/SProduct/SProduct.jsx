import React, { useEffect, useState } from "react";
import Style from "./SProduct.module.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "react-use-cart";

const SProduct = () => {
    const Api = "http://localhost:9000";

    const { addItem } = useCart();
    const params = useParams();
    const [ProductData, setProductData] = useState({});

    useEffect(() => {
        axios.get(`${Api}/products/${params.productId}`).then((response) => {
            const data = response.data;
            setProductData(data);
        });
    }, []);

    if (params.productId) {
        return (
            <div className="div">
                <React.Fragment>
                    <div className={Style.SProduct} key={ProductData.id}>
                        <div className={Style.Product_Images}>
                            <img
                                src={process.env.PUBLIC_URL + "/images/" + ProductData.img}
                                alt=""
                            />
                        </div>
                        <div className={Style.Properties}>
                            <h1 className={Style.title}>{ProductData.title}</h1>
                            <h2 className={Style.price}>{ProductData.price}so'm</h2>
                            <br />
                            <br />
                            <Link to={"/cart"}>
                                <button
                                    onClick={() => addItem(ProductData)}
                                    className={Style.Add}
                                >
                                    Add to shopping bag
                                </button>
                            </Link>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    } else {
        return null;
    }
};

export default SProduct;