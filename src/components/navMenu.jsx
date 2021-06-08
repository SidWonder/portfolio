import React from 'react';

export default function NavMenu({anchor}) {
    const {homeSection, projects, skills, contactForm} = anchor;
    return(
 <nav className='navbar'>
     <ul className='navbar__list'>
         <li className='navbar__item'><a className='navbar__link' href="#homeSection">Начало</a></li>
         <li className='navbar__item'><a className='navbar__link' href="#projects">Портофолио</a></li>
         <li className='navbar__item'><a className='navbar__link' href="#skills">Стек</a></li>
         <li className='navbar__item'><a className='navbar__link' href="#contactForm">Напишите мне!</a></li>
     </ul>
 </nav>
    )
}