import React from "react";
import s from "./Skill.module.css"

type SkillPropsType = {
    title: string,
    name: string,
    icon?:string,
    style?: any
}


export const Skill : React.FC<SkillPropsType> = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>{props.icon}</div>
            <h3 className={s.title}>{props.title}</h3>
            <p className={s.name}>{props.name}</p>
        </div>
    )
}