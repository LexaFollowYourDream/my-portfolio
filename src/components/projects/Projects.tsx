import React from "react";
import s from './Projects.module.css'
import {Title} from "../title/Title";
import styleContainer from "../../commont/styles/Container.module.css";
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <div id='PROJECTS' className={s.head}>
                    <Title title={"MY Projects"}/>
                </div>
                <div className={s.projectBlock}>
                    <Project name={"Название проекта"} text={"Краткое описание проекта"}/>
                    <Project name={"название проекта"} text={"Краткое описание проекта"}/>
                    <Project name={"название проекта"} text={"Краткое описание проекта"}/>

                </div>
            </div>
        </div>
    )
}