import React from 'react';
import style from './skillDescription.module.css'

export default function SkillDescription({skill}) {
    const {title, icon, describe } = skill;
   
    const [skillDescribe, setSkillDescribe] = React.useState('');
    React.useEffect(()=> {
        setSkillDescribe(describe);

    },[describe])
   
    return (<p className={style.description}>
        {skillDescribe}
        </p>)
}