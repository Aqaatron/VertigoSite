import globals from '../../../globals.module.scss'
import promoStyles from '../promoCommon.module.scss'
import Image from "next/image";
import React, {useEffect} from "react";
import {texts} from "@/texts";
import compStyles from '@/widgets/promo/startPromo/startPromo.module.scss'
import {anchorTo} from "@/helpers/helpers";
import logo from "@/widgets/start/logo.png";
import vertigo from "@/widgets/mobile/header/logo.png";
import lineHeader from "../../../../public/lineHeader.png";
import {router} from "next/client";
import CalcModal from './CalcModal';

export const StartViewPromo = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    const [showCalc, setShowCalc] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
    }, []);

    const openCalc = () => setShowCalc(true)
    const closeCalc = () => setShowCalc(false)
    const submitCalc = (data: any) => {
        // сюда можно добавить отправку на API
        console.log('calc result', data)
        closeCalc()
    }
    const slideTo = () => {
        anchorTo('form')
    }
    const anchorToo = (event: any) => {
        anchorTo(event.target.dataset.name)
    }
    const goTo = () => {
        router.push('/').then(() => {
        })
    }
    return <div className={promoStyles.contentBlock} style={{backgroundColor: '#685BC7'}}>
        {!isMobile &&
            <div className={compStyles.header}>
                <Image className={compStyles.logoImg2} src={logo} alt={'logo'}/>
                <Image className={compStyles.line} src={lineHeader} alt={'logo'}/>
                <div style={{display: 'flex', width: '950px', zIndex: '100', fontWeight: 'bold'}}>
                    <div onClick={goTo} data-name={'merits'} className={compStyles.ancorItem}>Главная</div>
                    <div onClick={anchorToo} data-name={'flow'} className={compStyles.ancorItem}>День рождения</div>
                    <div onClick={anchorToo} data-name={'reviews'} className={compStyles.ancorItem}>Отзывы</div>
                    <div onClick={anchorToo} data-name={'tarifs'} className={compStyles.ancorItem}>Тарифы</div>
                    <div onClick={anchorToo} data-name={'faq'} className={compStyles.ancorItem}>FaQ</div>
                    <div onClick={anchorToo} data-name={'contacts'} className={compStyles.ancorItem}>Контакты</div>
                </div>
            </div> ||
            <div id={'main'} className={compStyles.header}>
                <Image className={compStyles.logoImg} src={vertigo} alt={'logo'}/>
            </div>
        }
        <div className={compStyles.contentWrapper}>
            <div className={compStyles.mainTitle}>{texts.promo.start.header}
            </div>
            <div className={compStyles.fillerText}>{texts.promo.start.main}
                <p style={{marginTop: '25px', fontWeight: 'bold'}}>{texts.promo.start.sub}</p>
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
                <source src={'./promo_video_v2.mp4'} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-start', gap: '16px', alignItems: 'center'}}>
            <div className={promoStyles.gradientBorder} onClick={slideTo}>
                <div className={promoStyles.cardContent}>{texts.promo.start.btn}</div>
            </div>
            <div className={promoStyles.gradientBorder} onClick={openCalc}>
                <div className={promoStyles.cardContent}>Рассчитать стоимость</div>
            </div>
        </div>

        {showCalc && <CalcModal onClose={closeCalc} onSubmit={submitCalc} />}
    </div>
}