import React from "react";
import style from './Work.module.css';


export const Work = (props) => {
    return (
        <div className={style.project}>
            <div className={style.project_imgContainer}>
            <button className={style.project_btn}>See more</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.project_description}>{props.description}</span>
        </div>
    );
}

