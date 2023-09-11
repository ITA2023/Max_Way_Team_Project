import React from 'react';
import AboutImg from "../../images/about.webp";
import Style from "./About.module.scss";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t("AboutHeading")}</h1>
      <img src={AboutImg} className={Style.About_img} alt="" />
      <p className={Style.p}>
        {t("About.0")}
        <br />
        {t('About.1')}
        <br />
        {t('About.2')}
        <br />
        {t("About.3")}
        <br />
        {t('About.4')}
        <br />
        {t('About.6')}
        <br />
        {t('About.7')}
        <br />
        {t("About.8")}
        <br />
        {t('About.9')}
        <br />
        {t('About.10')}
        <br />
        {t("About.11")}
        <br />
        {t("About.12")}
      </p>
    </div>
  )
}

export default About;