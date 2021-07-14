import React from 'react';
import ProjectItem from "../projectItems/projectItem";
import style from './projects.module.css'

export default function Projects({anchor, projects, previewLabels}){
    console.log(projects)
    return(
        <section className={style.portfolio} id={anchor}>
        <h2 className={style.header}>Мои проекты</h2>
            {/* <p className='style.subheader'>Мои супер-дупер проекты</p> */}
            <ul className={style.list}>
                {projects.map((item)=> {
                    return (<ProjectItem key={item.id} name={item.name} url={item.url}/>)
                })}
            </ul>
        </section>
    )
}