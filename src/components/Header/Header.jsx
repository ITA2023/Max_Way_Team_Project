import React from 'react';
import Style from "./Header.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Swiper className={Style.Swiper}
            slidesPerView={7}>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#MaxiBox">🍟🍔🥤Maxi BOX</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Klab">🥪Klab-Sendvich</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Lavash">🌯Lavash</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Shaurma">🌮Shaurma</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Donar">🍱Donar Kebab</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Panini">🫔Panini</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Burger">🍔Burger</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#HotDog">🌭Hot-Dog</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Gazaklar">🍟Gazaklar</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Ichimlik">🥤Ichimliklar</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Desertlar">🍰Desertlar</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Souslar">🥫Souslar</NavLink></SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}><NavLink to="#Tamaddilar">🍚Tamaddilar</NavLink></SwiperSlide>
        </Swiper>
    )
}

export default Header;