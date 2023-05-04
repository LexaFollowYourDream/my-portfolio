import React from "react";
import s from'./Header.module.css'
import {Navigation} from "../navigation/Navigation";


export const Header = () => {
    return(
        <div className={s.container}>
            <Navigation/>
        </div>
    )
}