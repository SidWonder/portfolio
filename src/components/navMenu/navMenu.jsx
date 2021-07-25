import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from './navMenu.module.css';

export default function NavMenu({ anchor }) {
    const { homeSection, projects, skills, contactForm } = anchor;

    const anchors = document.querySelectorAll('.navbar__item');
    anchors.forEach(x => {
        x.addEventListener('click', () => {
            x.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            })
        })

    })
    return (
        <nav className={style.navbar}>
            <ul className={style.list}>
                <li className={style.item}><Link className={style.link} to='/' >Главная</Link></li>
                <li className={style.item}><Link className={style.link} to='/about' >Обо мне</Link></li>
                <li className={style.item}><Link className={style.link} to='/skills'>Стек</Link></li>
                <li className={style.item}><Link className={style.link} to='/projects' >Портофолио</Link></li>
                {/* <li className='navbar__item'><Link className='navbar__link' to='/contact'>Напишите мне!</Link></li> */}
            </ul>
        </nav>
    )
}