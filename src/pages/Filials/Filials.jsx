import React, { useEffect, useState } from 'react'
import "./Filials.css";
import axios from "axios"
import { Link } from 'react-router-dom'

const Filials = () => {

  const [products, setProducts] = useState([])
  const Api = "http://localhost:9000/filials"
  useEffect(() => {
    axios.get(Api).then(res => setProducts(res.data)).catch(err => console.error(err))
  }, [] )
console.log();
  return (
    <div className="container">
      <div className="fillals">
        <div className="fillasls_title">
          <h1>Filiallar</h1>
          <div className="filials_title_but">
            <Link to={"/Filials"}>
              <button className="filials_title_button">Ro'yxat</button>
            </Link>

            <Link to={"/Filialscarta"}>
              <button className="filials_title_button">Xarita</button>
            </Link>
          </div>
        </div>

        <div className="fillas_row">
          {products.map((products) => {
            return (
              <React.Fragment key={products.id}>
                <div className="fillals_card">
                  <div className="fillals_card_title">
                    <h2>{products.title}</h2>
                    <p className="fillals_card_p pp">
                      {" "}
                      {products.soat} gacha ochiq{" "}
                    </p>
                  </div>
                  <p className="fillals_card_adress"> {products.addres} </p>
                  <hr />
                  <div className="fillals_card_bottom">
                    <p>Ish vaqti:</p>
                    <p>Telefon:</p>
                  </div>
                  <div className="fillals_card_vaqt">
                    <p> Du-Yak: {products.vaqt} </p>
                    <p>+998712005400</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filials
