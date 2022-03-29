import React from "react";
import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css'



export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Ludmila Sidorova</h2>
                <div className={style.linksContainer}>
                    <div className={style.links}>
                        <div className={style.link}>VK</div>
                        <div className={style.link}>Insta</div>
                        <div className={style.link}>LidkedIn</div>
                        <div className={style.link}>Viber</div>
                        <div className={style.link}>Telegram</div>
                    </div>

                </div>
                <div className={style.rights}>© 2021 All rights reserved</div>
            </div>
        </div>
    );
}

