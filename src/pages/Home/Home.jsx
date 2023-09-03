import React from 'react';
import Style from "./Home.module.scss";
import Cards from '../../components/Cards/Container/Cards';
import Header from '../../components/Header/Header';

const Home = () => {

  return (
    <div className={Style.Home}>
      <Header />
      <Cards />
    </div>
  )
}

export default Home;