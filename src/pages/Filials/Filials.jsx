import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Style from "./Filials.module.scss";
import FilialsHeader from '../../components/Filials_Header/FilialsHeader'; 
const Filials = () => {
  const Api = "http://localhost:9000";
  const [filials, setFilials] = useState([]);

  const GetApiFunc = async () => {
    try {
      const response = await axios.get(`${Api}/filials`);
      setFilials(response.data);
    } catch (error) {
      console.error(error);
    }
  }; 
  useEffect(() => {
    GetApiFunc();
  }, []);

  return (
    <div className={Style.Filials}>
      <FilialsHeader />
      {filials.map(filial => (
        <div className={Style.Filial} key={filial.id}>
          <div className={Style.Top}>
            <div className={Style.Left}>
              <h1 className={Style.Title}>{filial.title}</h1>
              <p className={Style.Adress}> {filial.adress} </p>
            </div>
            <div className={Style.Right}>
              <h3 className={Style.Soat}> {filial.soat} </h3>
            </div>
          </div>
          <div className={Style.Bottom}>
            <div>
              <p>Ish vaqti:</p>
              <p>{filial.vaqt}</p>
            </div>
            <div>
              <p className={Style.Number}>Telefon: <a href='tel:+998712005400'> {filial.number} </a></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filials;