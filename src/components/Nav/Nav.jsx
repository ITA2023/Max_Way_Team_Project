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
                    <NavLink to={"/"} className={Style.link}>Menu</NavLink>
                    <NavLink to={"/Filials"} className={Style.link}>Filiallar</NavLink>
                    <NavLink to={"/About"} className={Style.link}>Biz haqimizda</NavLink>
                    <NavLink to={"/Contact"} className={Style.link}>Bog'lanish</NavLink>
                </div>
                <div className={Style.Right}>
                    <FaLocationDot className={Style.LoactionDot} size={25} style={{ backgroundColor: "#f1eff4" }} />
                    <h3>Yetkazib berish yoki Olib ketish <br /> <span>Qabul qilib olish turini tanlang </span></h3>
                    {['Til'].map(
                        (variant) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}`}
                                variant={variant.toLowerCase()}
                                className={Style.dropdown}
                                title={<img src='https://maxway.uz/images/uz.svg' alt='uz' />}
                            >
                                <Dropdown.Item className={Style.DrItem} eventKey="1" active><img src="https://maxway.uz/images/uz.svg" alt="" />O`zbekcha</Dropdown.Item>
                                <Dropdown.Item className={Style.DrItem} eventKey="2"><img src="https://maxway.uz/images/ru.svg" alt="" />Русский</Dropdown.Item>
                                <Dropdown.Item className={Style.DrItem} eventKey="3"> <img src="https://maxway.uz/images/en.svg" alt="" />English</Dropdown.Item>
                            </DropdownButton>
                        ),
                    )}
                    <Link to={"/Cart"}>
                        <BiSolidCart className={Style.Cart} />
                    </Link>
                    <h3 className={Style.CartTotal}>{Number(cartTotal)} so`m</h3>
                    <FaUser className={Style.User} />
                </div>
            </div>
        </nav>
    )
}

export default Nav;