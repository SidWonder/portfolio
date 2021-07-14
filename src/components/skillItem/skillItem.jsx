import React from 'react';
import style from './skillItem.module.css';

export default function SkillItem({skill, onSkillClick}) {
    const {title, icon } = skill;

    function handleClick() {
        onSkillClick(skill);
    }

    return (
            <li className={style.item }onClick={handleClick} >
                <img loading='lazy' className={style.icon }src={process.env.PUBLIC_URL + '/' +icon} alt={title}/>
                <p className={style.description}>{title}</p>
            </li>
    )
}