import React from 'react';
import {skillsDescr} from '../utils/skills';
import SkillItem from "./skillItem";
import SkillDescription from './skillDescription';
//вынести отдельно в utils, а импорты сделать в app
// import js from '../img/skills/javascript-logo.png';
// import bash from '../img/skills/bash_icon.png';
// import bem from '../img/skills/bem_icon.png';
// import css from '../img/skills/CSS3_icon.png';
// import figma from '../img/skills/figma_icon.png';
// import githab from '../img/skills/GITHUB_icon.png';
// import html from '../img/skills/html.svg';
// import pixelPerfect from '../img/skills/pixelPerfect.png';
// import react from '../img/skills/react_icon.png';
// import apiIcon from '../img/skills/restApi_icon.png';

export default function Skills({anchor}) {

    const [selectedSkill, SetSelectedSkill] = React.useState({});

    function handleSkillClick(skill) {
        SetSelectedSkill(skill);
    }

    return (<section className='skills' id={anchor}>
        <h2 className='skills__header'>Мои навыки</h2>
        <p className='skills__subheader'>Мои скилы/стек/обучалки/сертификаты</p>
        <ul className='skills__list'>
            {skillsDescr.map(item => <SkillItem key={item.id}
                                                skill={item}
                                                onSkillClick={handleSkillClick}/>
            )}
        </ul>
        {selectedSkill.id && <SkillDescription skill={selectedSkill}/>}
        {/*{selectedSkill.id && (<div>it work</div>)}*/}

        {/*<ul className='skills__list'>*/}
        {/*    <li className='skills__item'>*/}
        {/*        <img className='skills__icon' src={html} alt=""/>*/}
        {/*        <p className='skills__description'>HTML 5</p>*/}
        {/*    </li>*/}
        {/*    <li className='skills__item'>*/}
        {/*        <img className='skills__icon' src={bash} alt=""/>*/}
        {/*        <p className='skills__description'>java script</p>*/}
        {/*    </li>*/}
        {/*    <li className='skills__item'>*/}
        {/*        <img className='skills__icon' src={css} alt=""/>*/}
        {/*        <p className='skills__description'>java script</p>*/}
        {/*    </li>*/}
        {/*    <li className='skills__item'>*/}
        {/*        <img className='skills__icon' src={figma} alt=""/>*/}
        {/*        <p className='skills__description'>java script</p>*/}
        {/*    </li>*/}
        {/*    <li className='skills__item'>*/}
        {/*        <img className='skills__icon' src={githab} alt=""/>*/}
        {/*        <p className='skills__description'>java script</p>*/}
        {/*    </li>*/}
        {/*    <li className='skills__item'>*/}
        {/*        <img className='skills__icon' src={js} alt=""/>*/}
        {/*        <p className='skills__description'>java script</p>*/}
        {/*    </li>*/}
        {/*    <li className='skills__item'>*/}
        {/*        <img className='skills__icon' src={react} alt=""/>*/}
        {/*        <p className='skills__description'>java script</p>*/}
        {/*    </li>*/}
        {/*    <li className='skills__item'>*/}
        {/*        <img className='skills__icon' src={apiIcon} alt=""/>*/}
        {/*        <p className='skills__description'>java script</p>*/}
        {/*    </li>*/}
        {/*</ul>*/}
    </section>)
}