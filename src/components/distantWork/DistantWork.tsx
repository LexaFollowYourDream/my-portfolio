import React from "react";
import s from "./DistantWork.module.css"
import styleContainer from "../../commont/styles/Container.module.css";
import {Title} from "../title/Title";


type DistantWorkPropsType = {

}

export const DistantWork: React.FC<DistantWorkPropsType> = (props) => {
    return (
        <div  className={s.block}>
            <div className={`${styleContainer.container} ${s.distantWorkContainer}`}>
                <div id='DistantWork' className={s.head}>
                    <Title title={"I'm looking into remote work options."}/>
                </div>
                <div className={s.blockButton}>
                    <a className={s.button} href="#">Нанять Меня</a>
                </div>
            </div>
        </div>
    )
}