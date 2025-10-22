import globals from '../../../globals.module.scss'
import compStyles from './header.module.scss'
import vertigo from './logo.png'
import light from '../../../../public/RIM_Light_purple.png'
import lineHeader from '../../../../public/lineHeader.png'
import Image from "next/image";
import React, {useEffect} from "react";
import {texts} from "@/texts";
import {router} from "next/client";

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
        router.push('/birthday').then(r => {})
    }
    return <div className={globals.contentBlock} style={{minHeight: '90vh'}}>
        <div id={'main'} className={compStyles.header}>
            <Image className={compStyles.logoImg} src={vertigo} alt={'logo'}/>
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
            <div className={compStyles.fillerText}>{texts.start.main}</div>
            <div style={{display: 'flex', justifyContent: 'start', margin: '0 0 0 20px'}}>
                <div className={compStyles.gradientBorder}>
                    <div className={compStyles.cardContent} onClick={show}>Подробнее</div>
                </div>
                {/*<div className={compStyles.gradientBorder}>*/}
                {/*    <div className={compStyles.cardContent} style={{backgroundColor: 'black'}}>Связаться со мной</div>*/}
                {/*</div>*/}
            </div>
        </div>

    </div>
}