import globals from '../../globals.module.scss'
import compStyles from './start.module.scss'
import vertigo from '../../../public/vertigo.png'
import light from '../../../public/RIM_Light_purple.png'
import logo from './logo.png'
import lineHeader from '../../../public/lineHeader.png'
import Image from "next/image";
import React, {useEffect} from "react";
import {PopUpForm} from "@/widgets/form/popUpForm";
import {PopUpGlobal} from "@/widgets/popup/PopupGLobal";
import {texts} from "@/texts";
import promoStyles from "@/widgets/promo/promoCommon.module.scss";

export const StartView = ({showP}: { showP: Function }) => {
    const [isMobile, setIsMobile] = React.useState(false)
    useEffect(() => {
        window.innerWidth > 480 ? setIsMobile(false) : setIsMobile(true)
    }, []);
    const anchorTo = (event: any) => {
        const name = event.target.dataset.name
        const doc = document.getElementById(name)
        if (doc) {
            const yy = doc.offsetTop
            window.scrollTo({top: yy, behavior: 'smooth'})
        }
    }
    const show = () => {
        showP()
    }

    return <div className={globals.contentBlock}>
        <div id={'main'} className={compStyles.header}>
            <Image className={compStyles.logoImg2} src={logo} alt={'logo'}/>
            {/*<Image className={compStyles.light} src={light} alt={'logo'}/>*/}
            <Image className={compStyles.line} src={lineHeader} alt={'logo'}/>
            <div style={{display: 'flex', width: '950px', zIndex: '100'}}>
                <div className={compStyles.ancorItem}>Главная</div>
                <div onClick={anchorTo} data-name={'events'} className={compStyles.ancorItem}>Мероприятия</div>
                <div onClick={anchorTo} data-name={'gallery'} className={compStyles.ancorItem}>Галерея</div>
                <div onClick={anchorTo} data-name={'games'} className={compStyles.ancorItem}>Игры</div>
                <div onClick={anchorTo} data-name={'faq'} className={compStyles.ancorItem}>FaQ</div>
                <div onClick={anchorTo} data-name={'sert'} className={compStyles.ancorItem}>Сертификаты</div>
                <div onClick={anchorTo} data-name={'contacts'} className={compStyles.ancorItem}>Контакты</div>
            </div>
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
            <div className={compStyles.mainTitle}>{texts.start.title}
            </div>
            <div className={compStyles.fillerText}>{texts.start.main}
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}}>
                <div className={promoStyles.gradientBorder}>
                    <div className={promoStyles.cardContent} onClick={show}>Связаться со мной</div>
                </div>
                {/*<div className={compStyles.gradientBorder}>*/}
                {/*    <div className={compStyles.cardContent} style={{backgroundColor: 'black'}}></div>*/}
                {/*</div>*/}
            </div>
        </div>

    </div>
}