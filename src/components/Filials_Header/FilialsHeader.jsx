import React from 'react'
import { Link } from 'react-router-dom';
import Style from "./FilialsHeader.module.scss"; 
import { useTranslation } from 'react-i18next';

const FilialsHeader = () => {
    const { t } = useTranslation()
    const Pathname = window.location.pathname;
    if (Pathname === "/Filials"){
        
    }
    return (
        <div className={Style.Header}>
            <h1 className={Style.Heading}>{t("FilialsHeading")}</h1>
            <div className={Style.Links}>
                <Link to={"/Filials"}> {t("FilialsTab1")} </Link>
                <Link to={"/Map"}> {t("FilialsTab2")} </Link>
            </div>
        </div>
    )
}

export default FilialsHeader