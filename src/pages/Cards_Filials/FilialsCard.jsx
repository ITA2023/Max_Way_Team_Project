import React from "react";
import "./FilialsCard.scss";
import { Link } from "react-router-dom";

const FilialsCard = () => {
  //  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <div className="container">
        <div className="fillasls_title">
          <h1>Filiallar</h1>
          <div className="filials_title_but">
            <Link to={"/Filials"}>
              <button className="filials_title_button">Ro'yxat</button>
            </Link>
            <Link to={"/Filialscard"}>
              <button className="filials_title_button1">Xarita</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="fillalscarta">
        <iframe className="fillalscarta_2" title="t" src={ "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2996.1199734633915!2d69.28051981664957!3d41.328004463794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1693379405019!5m2!1sru!2s"}></iframe>
      </div>
    </React.Fragment>
  );
};

export default FilialsCard;
