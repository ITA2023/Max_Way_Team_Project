import axios from 'axios';
import Style from "./Burger.module.scss";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Burger = () => {
  const Api = "http://localhost:9000";
  const [products, setProducts] = useState([]);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  let Product = "";
  if(currentLang === "uz"){
    Product = "/products";
  }else if(currentLang === "ru"){
    Product = "/products";
  }else if(currentLang === "en"){
    Product = "/products";
  }else{
    console.error("error");
  }
  const getApiFunc = async () => {
    await axios.get(Api + Product).then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getApiFunc();
  }, []);

  return (
    <div className={Style.Cards}>
      {products.slice(16, 19).map((product) => {
        return (
          <div className={Style.Card} key={product.id}>
            <img
              src={process.env.PUBLIC_URL + "/images/" + product.img}
              alt=""
            />
            <div className={Style.Prop}>
              <h2 className={Style.Title}>{product.title}</h2>
              <p className={Style.Desc}>{product.description}</p>
              <div className={Style.Bottom}>
                <h1 className={Style.Price}>
                  {product.price.toLocaleString()} <span>so'm</span>
                </h1>
                <Link to={`/single-product/${product.id}`}>
                  <button className={Style.Add}>Qo'shish</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Burger;