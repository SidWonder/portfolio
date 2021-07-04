import React from 'react';
import linkedin from '../img/icons/linkedin.svg';
import email from '../img/icons/email.png';
// import github from '../img/images/github.png';
import telegram from '../img/icons/telegram.png';
import facebook from '../img/icons/facebook.png';
import githubTwo from '../img/icons/githubTwo.png';

export default function Footer() {
    return (
        <footer className='footer'>
            <nav className='footer__navbar'>
                <ul className='footer__list'>
                    <li className='footer__item'><a href="#"><img className='footer__icon' src={linkedin} alt="LinkedIn"/></a></li>
                    {/* <li className='footer__item'><a href="#"><img className='footer__icon' src={githubTwo} alt="Github"/></a></li>
                    <li className='footer__item'><a href="#"><img className='footer__icon' src={facebook} alt="Facebook"/></a></li>
                    <li className='footer__item'><a href="#"><img className='footer__icon' src={telegram} alt="Telegram"/></a></li>
                    <li className='footer__item'><a href="#"><img className='footer__icon' src={email} alt="Mail"/></a></li> */}
                </ul>
            </nav>
            <span className='footer__text'>Made with love and copypast</span>
            <span className='footer__copyright'>1994-2021 by SidWonder</span>
        </footer>)
}