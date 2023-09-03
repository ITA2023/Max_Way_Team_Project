import axios from 'axios';
import Style from "./Donar.module.scss";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Donar = () => {
  const Api = "http://localhost:9000";
  const [products, setProducts] = useState([])
  const GetApiFunc = async () => {
    await axios.get(Api + `/products`)
      .then(response =>
        setProducts(response.data))
  }
  useEffect(() => {
    GetApiFunc()
  }, [])
  return (
    <div className={Style.Cards}>
      {
        products.slice(11, 15).map(product => {
          return (
            <div className={Style.Card} key={product.id}>
              <img src={process.env.PUBLIC_URL + "/images/" + product.img} alt="" />
              <div className={Style.Prop}>
                <h2 className={Style.Title}> {product.title} </h2>
                <p className={Style.Desc}> {product.description} </p>
                <div className={Style.Bottom}>
                  <h1 className={Style.Price}> {product.price.toLocaleString()} <span>so'm</span></h1>
                  <Link to={`/single-product/${product.id}`}>
                    <button className={Style.Add}>Qo'shish </button>
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

export default Donar