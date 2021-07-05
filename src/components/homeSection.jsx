import React from 'react';
import arrowDown from '../img/utils/next.png'

export default function HomeSection({anchor}) {
    const {homeSection, skills} = anchor;
    const background = React.useRef(null);
    const [cords, SetCords] = React.useState(null);

    function handleScroll() {
        let cordsY = window.scrollY;
        // if(cordsY <= 280) {
        //     SetCords(cordsY);
        // }
        SetCords(cordsY);
    }

    React.useEffect(()=>{
        setTimeout(()=> background.current.style = `background-position-y: ${cords}px;`, 0.5)
        // background.current.style = `background-position-y: ${cords}px;`
    }, [cords]);

    window.addEventListener('scroll', handleScroll);

    return (<>
        <section className='homepage' id={homeSection} ref={background}>
            <div className='homepage__overlay'>
            <h1 className='homepage__header'>Алоха! Меня зовут Олег и я <span>Front-end разработчик</span></h1>

                <a className="homepage__link" href={`#${skills}`}>
                    <div className="homepage__arrow homepage__arrow-animation">
                        <img className="homepage__img" src={arrowDown} alt=""/>
                    </div>
                </a>
            </div>
        </section>

    </>)
}