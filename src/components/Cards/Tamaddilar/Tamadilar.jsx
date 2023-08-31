import axios from 'axios';
import Style from "./Tamadilar.module.scss";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Tamadilar = () => {
  const Api = "http://localhost:9000";
  const [products, setProducts] = useState([])
  const GetApiFunc = async () => {
    await axios.get(Api + `/products`)
      .then(response =>
        setProducts(response.data))
      .catch(console.error("error"))
  }
  const { addItem } = useCart()
  useEffect(() => {
    GetApiFunc()
  }, [])
  return (
    <div className={Style.Cards}>
      {
        products.slice(50, 52).map(product => {
          return (
            <div className={Style.Card} key={product.id}>
              <img src={process.env.PUBLIC_URL + "/images/" + product.img} alt="" />
              <div className={Style.Prop}>
                <h2 className={Style.Title}> {product.title} </h2>
                <p className={Style.Desc}> {product.description} </p>
                <div className={Style.Bottom}>
                  <h1 className={Style.Price}> {product.price} <span>so'm</span></h1>
                  <Link to={`/single-product/${product.id}`}>
                    <button className={Style.Add} onClick={() => addItem(product)}>Qo'shish </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Tamadilar