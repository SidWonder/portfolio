import React from 'react';
import {skillsDescr} from '../../utils/skills';
import SkillItem from "../skillItem/skillItem";
import SkillDescription from '../skillDescription/skillDescription';
import style from './skills.module.css';

export default function Skills({anchor}) {

    const [selectedSkill, SetSelectedSkill] = React.useState({});

    function handleSkillClick(skill) {
        SetSelectedSkill(skill);
    }

    return (<section className={style.skills} id={anchor}>
        <h2 className={style.header}>Мои навыки</h2>
        <p className={style.subheader}>Hard Skills (кликабельно)</p>
        <ul className={style.list}>
            {skillsDescr.map(item => <SkillItem key={item.id}
                                                skill={item}
                                                onSkillClick={handleSkillClick}/>
            )}
        </ul>
        {selectedSkill.id && <SkillDescription skill={selectedSkill}/>}
    </section>)
}