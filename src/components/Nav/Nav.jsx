import React from 'react';
import Style from "./Nav.module.scss";
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../images/logo.webp";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCart } from "react-icons/bi";
import { useCart } from 'react-use-cart';
import { FaUser } from "react-icons/fa";

const Nav = () => {
    const { cartTotal } = useCart();

    return (
        <nav className={Style.Nav}>
            <div className={Style.Nav_Container}>
                <img src={Logo} alt="Logo" className={Style.Logo} />
                <div className={Style.Links}>
                    <NavLink to={"/"}
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 500 : 400
                        })}>Menu</NavLink>
                    <NavLink to={"/Filials"}
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 500 : 400
                        })}>Filiallar</NavLink>
                    <NavLink to={"/About"}
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 500 : 400
                        })}>Biz haqimizda</NavLink>
                    <NavLink to={"/Contact"}
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 500 : 400
                        })}>Bog'lanish</NavLink>
                </div>
                <div className={Style.Right}>
                    <FaLocationDot className={Style.LoactionDot} size={25} style={{ backgroundColor: "#f1eff4" }} />
                    <h3>Yetkazib berish yoki Olib ketish <br /> <span>Qabul qilib olish turini tanlang </span></h3>
                    <DropdownButton
                        as={ButtonGroup}
                        id="dropdown-variants-Til"
                        variant="til"
                        className={Style.dropdown}
                        title={<img src='https://maxway.uz/images/uz.svg' alt='uz' />}
                    >
                        <Dropdown.Item className={Style.DrItem} eventKey="1" active><NavLink to={"/uz/"}><img src="https://maxway.uz/images/uz.svg" alt="" />O`zbekcha</NavLink></Dropdown.Item>
                        <Dropdown.Item className={Style.DrItem} eventKey="2"><NavLink to={"/ru/"}><img src="https://maxway.uz/images/ru.svg" alt="" />Русский</NavLink></Dropdown.Item>
                        <Dropdown.Item className={Style.DrItem} eventKey="3"><NavLink to={"/en/"}> <img src="https://maxway.uz/images/en.svg" alt="" />English</NavLink></Dropdown.Item>
                    </DropdownButton>
                    <Link to={"/cart"}>
                        <BiSolidCart className={Style.Cart} />
                    </Link>
                    <h3 className={Style.CartTotal} style={{ width: "auto" }}>{cartTotal.toLocaleString()} so'm</h3>
                    <FaUser className={Style.User} />
                </div>
            </div>
        </nav>
    );
};

export default Nav;