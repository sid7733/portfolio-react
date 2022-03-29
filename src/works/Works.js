import React from "react";
import style from './Works.module.css';
import styleContainer from './../common/styles/Container.module.css'
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.works}>
                    <Work title={'Social network'} description={'lorem ipsum...'}/>
                    <Work title={'Counter'} description={'lorem ipsum...'}/>
                    <Work title={'Todolist'} description={'lorem ipsum...'}/>
                </div>
            </div>
        </div>
    );
}

