import React from "react";
import s from './Skills.module.css'
import {Title} from "../title/Title";
import {Skill} from "./skill/Skill";
import styleContainer from "../../commont/styles/Container.module.css";


export const Skills = () => {
    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <div id='SKILLS' className={s.head}>
                    <Title title={"MY SKILLS"}/>
                </div>
                <div className={s.skills}>
                    <Skill title={"Development"} name={"React, Redux, JavaScript, TypeScript"}/>
                    <Skill title={"Foundation"} name={"HTML5, CSS3"}/>
                    <Skill title={"Testing"} name={"Unit Tests, Storybook"}/>
                    <Skill title={"Design"} name={"Material UIgvhmbvjcv mbb mnv bnxb bnvc"}/>
                </div>
            </div>
        </div>

    )
}