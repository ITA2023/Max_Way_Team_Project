import React from 'react';
import Style from "./Contact.module.scss";
import QrCode from "../../images/Boglanish_Qr_Code.png";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={Style.Contact}>
      <h1>Bog'lanish</h1>
      <div className={Style.Container}>
      <img src={QrCode} alt="" className={Style.QrCode} />
      <h2 className={Style.Title}>Telegramda sharh <br />
        qoldiring yoki savol bering</h2>
      <div className={Style.Connect_TG}>
        <FaTelegramPlane size={23} fill='#fff' />
        <a href="https://t.me/@maxwaymasterfood_bot" target='_blank' rel='noreferrer' className={Style.TG_Bot}>@maxwaymasterfoood_bot</a>
      </div>
      </div>
      <h2>Yagona aloqa markazi</h2>
      <a href="tel:+998712005400">+998712005400</a>
    </div>
  )
}

export default Contact;