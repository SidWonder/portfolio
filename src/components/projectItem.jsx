import React from 'react';

export default function ProjectItem({name, url}){



    return (<li className='portfolio__item'>
        <a className='portfolio__overlay' href={`https://sidwonder.github.io/${name}`} target='_blank'>https://sidwonder.github.io/{name}
        <img className='portfolio__img-preview' src={process.env.PUBLIC_URL + '/' + 'img'+ '/' + name+'.png'} alt="" />
         <p className='portfolio__title'>{name}</p>
        </a>
       
        
    </li>)
}   