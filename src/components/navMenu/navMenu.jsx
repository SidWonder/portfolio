import React from 'react';
import style from './navMenu.module.css';

export default function NavMenu({anchor}) {
    const {homeSection, projects, skills, contactForm} = anchor;

    const anchors = document.querySelectorAll('.navbar__item');
    anchors.forEach(x => {
        x.addEventListener('click', () => {
            x.scrollIntoView({
               behavior: 'smooth',
               block: 'end'
             })
        })
        
    })
    return(
 <nav className={style.navbar}>
     <ul className={style.list}>
         <li className={style.item}><a className={style.link} href="#homeSection">Главная</a></li>
         <li className={style.item}><a className={style.link} href="#projects">Портофолио</a></li>
         <li className={style.item}><a className={style.link} href="#skills">Стек</a></li>
         {/* <li className='navbar__item'><a className='navbar__link' href="#contactForm">Напишите мне!</a></li> */}
     </ul>
 </nav>
    )
}