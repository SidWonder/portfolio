import React from 'react';
import ProjectItem from "./projectItem";

export default function Projects({anchor, projects, previewLabels}){
    console.log(projects)
    return(
        <section className='portfolio' id={anchor}>
        <h2 className='portfolio__header'>Мои проекты</h2>
            <p className='portfolio__subheader'>Мои супер-дупер проекты</p>
            <ul className='portfolio__list'>
                {projects.map((item)=> {
                    return (<ProjectItem key={item.id} name={item.name} url={item.url}/>)
                })}
            </ul>
        </section>
    )
}