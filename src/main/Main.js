import React from "react";
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am Ludmila Sidorova</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

