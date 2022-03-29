import React from "react";
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>

                    <form className={style.form}>
                        <input className={style.input}/>
                        <input className={style.input}/>
                        <textarea className={style.textarea}>  </textarea>
                    </form>

                </div>
                <button className={style.contacts_btn}>Send</button>
            </div>
        </div>
    );
}

