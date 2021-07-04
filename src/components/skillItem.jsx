import React from 'react';

export default function SkillItem({skill, onSkillClick}) {
    const {title, icon } = skill;

    function handleClick() {
        onSkillClick(skill);
    }

    return (
            <li className='skills__item' onClick={handleClick} >
                <img className='skills__icon' src={process.env.PUBLIC_URL + '/' +icon} alt={title}/>
                <p className='skills__description'>{title}</p>
            </li>
    )
}