import React from "react";
import s from './prodject.module.css'

type ProjectPropsType = {
    name: string,
    text: string,
    icon?: string,
    style?: any
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={s.project}>
            <div className={s.blockButton}>
                {/*<p><img src="https://koshka.top/11493-mini-kotiki.html" alt="котик"/></p>*/}
                <a className={s.button} href="#">Смотреть</a>
            </div>
            <div className={s.blockText}>
                <div className={s.projectName}>
                    <div >Название проекта</div>
                    <div>"Eсли працуе то и добра"</div>
                </div>

                <div className={s.summary}>
                    <div >Краткое содержание</div>
                   <div>A бы што ! а бы што а ! бы што! а бы што ! а бы што!</div>
                </div>

            </div>
        </div>
    )
}