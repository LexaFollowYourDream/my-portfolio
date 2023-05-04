import React from "react";
import s from "./Title.module.css"


type TitlePropsType={
    title: string
}
export const Title: React.FC<TitlePropsType> = (props) => {
    return (
        <h2 className={s.title}>{props.title}</h2>
    )
}