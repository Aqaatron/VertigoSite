import globals from '../../../globals.module.scss'
//import compStyles from './startPromo.module.scss'

import Image from "next/image";
import React, {useEffect} from "react";
import {texts} from "@/texts";
import compStyles from '@/widgets/promo/startPromo/startPromo.module.scss'

export const StartViewPromo = () => {
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

    return <div className={globals.contentBlock}>
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
            <div className={globals.gradientBorder}>
                <div className={globals.cardContent}>{texts.promo.start.btn}</div>
            </div>
        </div>

    </div>
}