import React from "react";
import s from "./ByMe.module.css"
import photo from '../../assets/images/photo.jpg'
import styleContainer from '../../commont/styles/Container.module.css'

export const ByMe = () => {
    return (
        <div className={s.byMeBlock}>
            <div className={`${styleContainer.container} ${s.byMeContainer}`}>
                <div className={s.blockText}>
                    <span>Hi!</span>
                    <h1>I'm Alex Kundenko</h1>
                    <p>FRONT-END DEVELOPER BASED IN SoligorsK</p>
                </div>
                <div className={s.photo}>
                    {/*<img src={photo} alt={'me'} посмотреть видео с ошибками и правильно установить фото
                    Видео в {среда первая неделя ( портфолио )}
                    />*/}
                </div>

            </div>

        </div>
    )
}