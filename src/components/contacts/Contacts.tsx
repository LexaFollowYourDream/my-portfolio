import React from "react";
import s from "./Contacts.module.css"
import styleContainer from "../../commont/styles/Container.module.css";
import {Title} from "../title/Title";
import {SuperButton} from "../../commont/SuperButton";

type  ContactsPropsType = {}

export const Contacts: React.FC<ContactsPropsType> = (props) => {

    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <div id='CONTACTS' className={s.head}>
                    <Title title={"Contacts"}/>
                </div>
                <form className={s.blockForm}>
                    <div className={s.block}>
                        <label>
                            <input className={s.input} type="text" placeholder={'Name'}/>
                        </label>
                        <label>
                            <input className={s.input} type="text" placeholder={'Your Email'}/>
                        </label>
                        <label>
                            <textarea className={s.textarea} placeholder={'Your Message'}/>
                        </label>
                    </div>
                    <button className={s.btn} type="submit">SEND MESSAGE</button>
                    {/*<SuperButton className={s.btn} name={"SEND MESSAGE"}/>*/}
                </form>
            </div>

        </div>
    )
}