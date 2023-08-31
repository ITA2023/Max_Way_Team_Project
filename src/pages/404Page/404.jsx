import React from 'react';
import Style from "./404.module.scss";
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className={Style.Page_404}>
          <img src="https://maxway.uz/_next/image?url=%2Fimages%2Fnotfound.png&w=256&q=75" className={Style.Page_404_image} alt="" />
          <h1 className={Style.p404}>404</h1>
          <h2>Page not found</h2>
          <p>The resource requested could not be found in this server.</p>
          <Link to={"/"} className={Style.btn}>Go Back to Home</Link>
    </div>
  )
}

export default Page404;