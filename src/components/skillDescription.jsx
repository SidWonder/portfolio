import React from 'react';

export default function SkillDescription({skill}) {
    const {title, icon, describe } = skill;
   
    const [skillDescribe, setSkillDescribe] = React.useState('');
    React.useEffect(()=> {
        setSkillDescribe(describe);

    },[describe])
   
    return (<p className='skills__drop-description'>
        {skillDescribe}
        </p>)
}