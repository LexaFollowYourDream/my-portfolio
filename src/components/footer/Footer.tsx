import React from "react";
import s from "./Footer.module.css"
import styleContainer from "../../commont/styles/Container.module.css";
import {Title} from "../title/Title";

type FooterPropsType = {

}

export const Footer = () => {
    return (
        <div className={s.container}>
            <h2 className={s.name}> Alex Kundenko</h2>

            <div className={s.list}>
                <span className={s.listFooter}><a><img></img></a></span>
                <span className={s.listFooter}><a><img></img></a></span>
                <span className={s.listFooter}><a><img></img></a></span>
                <span className={s.listFooter}><a><img></img></a></span>
            </div>
            <div className={s.footerEhd}><h4>© 2023 Все права защищены</h4></div>
        </div>
    )

}