import React from 'react'
import { Link } from 'react-router-dom';
import Style from "./FilialsHeader.module.scss"; 

const FilialsHeader = () => {
    return (
        <div className={Style.Header}>
            <h1 className={Style.Heading}>Filiallar</h1>
            <div className={Style.Links}>
                <Link to={"/Filials"}>Ro'yxat</Link>
                <Link to={"/Map"}>Xarita</Link>
            </div>
        </div>
    )
}

export default FilialsHeader