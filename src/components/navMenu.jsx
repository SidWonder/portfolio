import React from 'react';

export default function NavMenu() {
    return(
 <nav className='navbar'>
     <ul className='navbar__list'>
         <li className='navbar__item'><a className='navbar__link' href="#">Начало</a></li>
         <li className='navbar__item'><a className='navbar__link' href="#">Портофолио</a></li>
         <li className='navbar__item'><a className='navbar__link' href="#">Стек</a></li>
         <li className='navbar__item'><a className='navbar__link' href="#">Напишите мне!</a></li>
     </ul>
 </nav>
    )
}