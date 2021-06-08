import React from 'react';

export default function Skills({anchor}) {

    function onSkillCard(e){
        if(e.target.classList.contains('skills__item')){
            console.log(e.target.querySelector('.skills__overlay').classList.add('skills__overlay_active'))
        }
    }
    function outSkillCard(e){
        if(e.target.classList.contains('skills__item')){
            console.log(e.target.querySelector('.skills__overlay').classList.remove('skills__overlay_active'))
        }
    }

return (<section className='skills' id={anchor}>
<h2 className='skills__header'>Мои навыки</h2>
    <p className='skills__subheader'>Мои скилы/стек/обучалки/сертификаты</p>
    <ul className='skills__list'>
        <li className='skills__item' onMouseOver={onSkillCard}>
            <div className='skills__overlay'></div>
            <h3 className='skills__title'>HTML/CSS</h3>
            <p className='skills__description'>Кроссбраузерно, адаптивно/резиново, по БЭМу</p>
        </li>
        <li className='skills__item'>JS</li>
        <li className='skills__item'>React</li>
        <li className='skills__item'>SQL</li>
        <li className='skills__item'>Scala</li>
    </ul>
</section>)
}