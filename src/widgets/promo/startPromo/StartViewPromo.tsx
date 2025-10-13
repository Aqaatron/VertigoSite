import globals from '../../../globals.module.scss'
import promoStyles from '../promoCommon.module.scss'
import Image from "next/image";
import React, {useEffect} from "react";
import {texts} from "@/texts";
import compStyles from '@/widgets/promo/startPromo/startPromo.module.scss'
import {anchorTo} from "@/helpers/helpers";
import logo from "@/widgets/start/logo.png";
import vertigo from "@/widgets/mobile/header/logo.png";

export const StartViewPromo = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
    }, []);

    const slideTo = () => {
        anchorTo('form')
    }

    return <div className={promoStyles.contentBlock}>
        {!isMobile && <Image className={compStyles.logoImg2} src={logo} alt={'logo'}/> ||
            <div id={'main'} className={compStyles.header}>
                <Image className={compStyles.logoImg} src={vertigo} alt={'logo'}/>
            </div>}
        <div className={compStyles.contentWrapper}>
            <div className={compStyles.mainTitle}>{texts.promo.start.header}
            </div>
            <div className={compStyles.fillerText}>{texts.promo.start.main}
                <p style={{marginTop: '50px'}}>{texts.promo.start.sub}</p>
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
        <div style={{display: 'flex', justifyContent: 'start'}}>
            <div className={promoStyles.gradientBorder} onClick={slideTo}>
                <div className={promoStyles.cardContent}>{texts.promo.start.btn}</div>
            </div>
        </div>

    </div>
}