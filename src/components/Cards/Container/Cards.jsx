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
            <h1 id='MaxiBox'>🍟🍔🥤Maxi BOX</h1>
            <MaxiBox />
            <h1 id='Klab'>🥪Klab-Sendvich</h1>
            <Klab />
            <h1 id='Lavash'>🌯Lavash</h1>
            <Lavash />
            <h1 id='Shaurma'>🌮Shaurma</h1>
            <Shaurma />
            <h1 id='Donar'>🍱Donar Kebab</h1>
            <Donar />
            <h1 id='Panini'>🫔Panini</h1>
            <Panini />
            <h1 id='Burger'>🍔Burger</h1>
            <Burger />
            <h1 id='HotDog'>🌭Hot-Dog</h1>
            <HotDog />
            <h1 id='Gazaklar'>🍟Gazaklar</h1>
            <Gazaklar />
            <h1 id='Ichimlik'>🥤Ichimliklar</h1>
            <Ichimliklar />
            <h1 id='Desertlar'>🍰Desertlar</h1>
            <Desertlar />
            <h1 id='Souslar'>🥫Souslar</h1>
            <Souslar />
            <h1 id='Tamaddilar'>🍚Tamaddilar</h1>
            <Tamadilar />
        </div>
    )
}

export default Cards