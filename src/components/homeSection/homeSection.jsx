import React from 'react';
import arrowDown from '../../img/utils/next.png';
import styles from './homeSection.module.css';
import {HELLO} from './../../utils/sayHello';


export default function HomeSection({anchor}) {
    const {homeSection, skills} = anchor;
    const background = React.useRef(null);
    const [cords, SetCords] = React.useState(null);
    

    return (<>
        <section className={ styles.homepage } id={homeSection} /*ref={background}*/>
            <div className={ styles.overlay }>
            <h1 className={styles.header}>{HELLO}! <br/> Это Олег, и я <span>Front-end разработчик</span></h1>

                {/* <a className={styles.link} href={`#${skills}`}>
                    <div className={`${styles.arrow} ${styles['arrow-animation']}`}>
                        <img className={styles.img} src={arrowDown} alt=""/>
                    </div>
                </a> */}
            </div>
        </section>

    </>)
}