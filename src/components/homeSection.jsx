import React from 'react';

export default function HomeSection({handler}) {
    const background = React.useRef(null);
    const [cords, SetCords] = React.useState(null);

    function handleScroll() {
        let cordsY = window.scrollY;
        if(cordsY <= 280) {
            SetCords(cordsY);
        }
    }

    React.useEffect(()=>{
        background.current.style = `background-position: 50% -${cords}px;`
    }, [cords]);

    window.addEventListener('scroll', handleScroll);

    return (<>
        <section className='homepage' ref={background}>
            <h1 className='homepage__header'>Алоха! Меня зовут Олег и я <span>Front-end разработчик</span> а если точнее, хочу им стать </h1>
            <div>тут будет ебучая кнопка</div>
        </section>

    </>)
}