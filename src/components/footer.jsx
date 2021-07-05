import React from 'react';
import linkedin from '../img/icons/linkedin.svg';
import email from '../img/icons/maildotru.svg';
import telegram from '../img/icons/telegram.svg';
import facebook from '../img/icons/facebook.svg';
import github from '../img/icons/git.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <nav className='footer__navbar'>
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <a href="#">
                            <img className='footer__icon' src={linkedin} alt="LinkedIn"/>
                        </a></li>
                    <li className='footer__item'><a target='_blank' href="#"><img className='footer__icon' src={github} alt="Github"/></a></li>
                    <li className='footer__item'><a target='_blank' href="#"><img className='footer__icon' src={facebook} alt="Facebook"/></a></li>
                    <li className='footer__item'><a target='_blank' href="tg://resolve?domain=sidwonder"><img className='footer__icon' src={telegram} alt="Telegram"/></a></li>
                    <li className='footer__item'><a target='_blank' href="mailto:o.mildzikhov@mail.ru"><img className='footer__icon' src={email} alt="Mail"/></a></li>
                </ul>
            </nav>
            <span className='footer__text'>Made with love and copypast</span>
            <span className='footer__copyright'>1994-2021 by SidWonder</span>
        </footer>)
}