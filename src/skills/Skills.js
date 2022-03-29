import React from "react";
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML/CSS'} description={'lorem ipsum...'}/>
                    <Skill title={'JS'} description={'lorem ipsum...'}/>
                    <Skill title={'REACT'} description={'lorem ipsum...'}/>
                </div>
            </div>
        </div>
    );
}

