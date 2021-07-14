import React from 'react';
import style from './projectItem.module.css';

export default function ProjectItem({name, url}){

    return (<li className={style.item}>
        <a className={style.overlay} href={`https://sidwonder.github.io/${name}`} target='_blank' rel="noreferrer">https://sidwonder.github.io/{name}
        <img className={style['img-preview']} src={process.env.PUBLIC_URL + '/' + 'img'+ '/' + name+'.png'} alt="" />
         <p className={style.title}>{name}</p>
        </a>
    </li>)
}   