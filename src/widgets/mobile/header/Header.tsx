import globals from '../../../globals.module.scss'
import compStyles from './header.module.scss'
import vertigo from '../../../../public/vertigo.png'
import light from '../../../../public/RIM_Light_purple.png'
import lineHeader from '../../../../public/lineHeader.png'
import Image from "next/image";
import React, {useEffect} from "react";

export const Header = ({showP}: { showP: Function }) => {

    const anchorTo = (event: any) => {
        const name = event.target.dataset.name
        const doc = document.getElementById(name)
        if (doc) {
            const yy = doc.offsetTop
            window.scrollTo({top: yy, behavior: 'smooth'})
        }
    }
    const show = () => {
        showP(true)
    }
    return <div className={globals.contentBlock}>
        <div id={'main'} className={compStyles.header}>
            <Image className={compStyles.logoImg} src={vertigo} alt={'logo'}/>
            {/*<Image className={compStyles.light} src={light} alt={'logo'}/>*/}
            {/*<Image className={compStyles.line} src={lineHeader} alt={'logo'}/>*/}
        </div>
        <div className={compStyles.videoWrapper}>
            <video
                autoPlay
                muted
                loop
                playsInline
                className={compStyles.backgroundVideo}
            >
                <source src={'./confrontation.mp4'} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
        <div className={compStyles.contentWrapper}>
            <div className={compStyles.mainTitle}>Открой новый мир
                виртуальных приключений
            </div>
            <div className={compStyles.fillerText}>Добро пожаловать в VERTIGO — клуб виртуальной реальности нового
                поколения, где стираются границы между реальностью и игровым миром!
                <p/>Погрузитесь в захватывающие приключения на нашей просторной VR-арене — игровом пространстве,
                созданном для командных сражений от 2 до 20 человек.
                VERTIGO — это не просто клуб, это опыт, который изменит ваше представление об игре.
            </div>
            <div style={{display: 'flex', justifyContent: 'start', margin: '0 0 0 20px'}}>
                <div className={compStyles.gradientBorder}>
                    <div className={compStyles.cardContent} onClick={show}>Связаться со мной</div>
                </div>
                {/*<div className={compStyles.gradientBorder}>*/}
                {/*    <div className={compStyles.cardContent} style={{backgroundColor: 'black'}}>Связаться со мной</div>*/}
                {/*</div>*/}
            </div>
        </div>

    </div>
}