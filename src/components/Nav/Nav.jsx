import React from 'react';
import Style from "./Nav.module.scss";
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../images/logo.webp";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCart } from "react-icons/bi";
import { useCart } from 'react-use-cart';
import { FaUser } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { BsCheck2 } from "react-icons/bs"
import "./DrDefStyle.scss"

const Nav = () => {
    const { t, i18n } = useTranslation();
    const { cartTotal } = useCart();
    const currentLang = i18n.language;

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    let img = ""
    if (currentLang === "uz") {
        img = "uz.svg";
    } else if (currentLang === "ru") {
        img = "ru.svg";
    } else {
        img = "en.svg";
    }
    return (
        <nav className={Style.Nav}>
            <div className={Style.Nav_Container}>
                <img src={Logo} alt="Logo" className={Style.Logo} />
                <div className={Style.Links}>
                    <NavLink to="/">{t("Navigation1")}</NavLink>
                    <NavLink to="/Filials" >{t("Navigation2")}</NavLink>
                    <NavLink to="/About" >{t("Navigation3")}</NavLink>
                    <NavLink to="/Contact" >{t("Navigation4")}</NavLink>
                </div>
                <div className={Style.Right}>
                    <FaLocationDot className={Style.LocationDot} size={25} style={{ backgroundColor: "#f1eff4" }} />
                    <h3>Yetkazib berish yoki Olib ketish <br /> <span>Qabul qilib olish turini tanlang </span></h3>
                    <DropdownButton
                        variant="til"
                        className={Style.dropdown}
                        title={<img src={process.env.PUBLIC_URL + "/images/" + img} alt='Til' />}
                    >
                        <div className={Style.DropdownContainer}>
                            <Dropdown.Item
                                className={`${Style.DrItem} ${i18n.language === "uz" ? Style.activeDrItem : ""}`}
                                onClick={() => changeLanguage("uz")}
                            >
                                <img src="https://maxway.uz/images/uz.svg" alt="" />{t("O'zbekcha")} <span><BsCheck2 fontSize={20} /></span>
                            </Dropdown.Item>
                            <Dropdown.Item
                                className={`${Style.DrItem} ${i18n.language === "ru" ? Style.activeDrItem : ""}`}
                                onClick={() => changeLanguage("ru")}
                            >
                                <img src="https://maxway.uz/images/ru.svg" alt="" />{t("Русский")} <span><BsCheck2 fontSize={20} /></span>
                            </Dropdown.Item>
                            <Dropdown.Item
                                className={`${Style.DrItem} ${i18n.language === "en" ? Style.activeDrItem : ""}`}
                                onClick={() => changeLanguage("en")}
                            >
                                <img src="https://maxway.uz/images/en.svg" alt="" />{t("English")} <span><BsCheck2 fontSize={20} /></span>
                            </Dropdown.Item>
                        </div>
                    </DropdownButton>
                    <Link to="/cart">
                        <BiSolidCart className={Style.Cart} />
                    </Link>
                    <h3 className={Style.CartTotal}>{cartTotal.toLocaleString()} {t("narx")}</h3>
                    <FaUser className={Style.User} />
                </div>
            </div>
        </nav>
    );
};

export default Nav;