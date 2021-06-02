import React from 'react';

export default function ProjectItem({name, url}){



    return (<li className='portfolio__item'>
        <p>{name}</p>
        <a href={`https://sidwonder.github.io/${name}`} target='_blank'>https://sidwonder.github.io/{name}</a>
    </li>)
}