import React from 'react';
import Style from "./Nav.module.scss";
import { NavLink } from 'react-router-dom';
import Logo from "../../images/logo.webp";
import LocDot from "../../images/location circle.svg";

const Nav = () => {
    return (
        <nav className={Style.Nav}>
            <img src={Logo} alt="Logo" className={Style.Logo} />
            <div className={Style.Links}>
                <NavLink to={"/"} className={Style.link}>Menu</NavLink>
                <NavLink to={"/Filials"} className={Style.link}>Filiallar</NavLink>
                <NavLink to={"/About"} className={Style.link}>Biz haqimizda</NavLink>
                <NavLink to={"/Contact"} className={Style.link}>Bog'lanish</NavLink>
            </div>
            <div className={Style.Functional}>
                <img src={LocDot} className={Style.LoactionDot} alt="" />
            </div>
            <div className="burger">
                <div className="line-1" />
                <div className="line-2" />
                <div className="line-3" />
            </div>
        </nav>
    )
}

export default Nav;