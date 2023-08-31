import React from 'react';
import Style from "./Cards.module.scss";
import MaxiBox from '../MaxiBox/MaxiBox';
import Klab from '../Klab/Klab';
import Lavash from '../Lavash/Lavash';
import Shaurma from '../Shaurma/Shaurma';
import Donar from '../Donar/Donar';
import Panini from '../Panini/Panini';
import Burger from '../Burger/Burger';
import HotDog from '../Hot_Dog/HotDog';
import Gazaklar from '../Gazaklar/Gazaklar';
import Ichimliklar from '../Ichimliklar/Ichimliklar';
import Desertlar from '../Desertlar/Desertlar';
import Souslar from '../Souslar/Souslar';
import Tamadilar from '../Tamaddilar/Tamadilar';

const Cards = () => {
    return (
        <div className={Style.Cards_Conainer}>
            <h1>🍟🍔🥤Maxi BOX</h1>
            <MaxiBox />
            <h1>🥪Klab-Sendvich</h1>
            <Klab />
            <h1>🌯Lavash</h1>
            <Lavash />
            <h1>🌮Shaurma</h1>
            <Shaurma />
            <h1>🍱Donar Kebab</h1>
            <Donar />
            <h1>🫔Panini</h1>
            <Panini />
            <h1>🍔Burger</h1>
            <Burger />
            <h1>🌭Hot-Dog</h1>
            <HotDog />
            <h1>🍟Gazaklar</h1>
            <Gazaklar />
            <h1>🥤Ichimliklar</h1>
            <Ichimliklar />
            <h1>🍰Desertlar</h1>
            <Desertlar />
            <h1>🥫Souslar</h1>
            <Souslar />
            <h1>🍚Tamaddilar</h1>
            <Tamadilar />
        </div>
    )
}

export default Cards