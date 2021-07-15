import React from 'react';
import linkedin from '../../img/icons/linkedin.svg';
import email from '../../img/icons/maildotru.svg';
import telegram from '../../img/icons/telegram.svg';
import facebook from '../../img/icons/facebook.svg';
import github from '../../img/icons/git.svg';

import style from './footer.module.css';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <nav className={style.navbar}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <a href="https://www.linkedin.com/in/omildzi/">
                            <img className={style.icon} src={linkedin} alt="LinkedIn" />
                        </a></li>
                    <li className={style.item}><a target='_blank' rel="noreferrer" href="https://github.com/SidWonder"><img className={style.icon} src={github} alt="Github" /></a></li>
                    <li className={style.item}><a target='_blank' rel="noreferrer" href="https://www.facebook.com/o.mildz"><img className={style.icon} src={facebook} alt="Facebook" /></a></li>
                    <li className={style.item}><a target='_blank' rel="noreferrer" href="tg://resolve?domain=sidwonder"><img className={style.icon} src={telegram} alt="Telegram" /></a></li>
                    <li className={style.item}><a target='_blank' rel="noreferrer" href="mailto:o.mildzikhov@mail.ru"><img className={style.icon} src={email} alt="Mail" /></a></li>
                </ul>
            </nav>
            <div className={style.subheader}>
                <span className={style.text}>Made with love and copypast</span><br />
                <span className={style.copyright}>1994-2021 by SidWonder</span>
            </div>
        </footer>)
}