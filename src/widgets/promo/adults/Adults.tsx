import {texts} from "@/texts";
import React, {useEffect} from "react";
import globals from "@/globals.module.scss";
import compStyles from './adults.module.scss'
import promoStyles from '../promoCommon.module.scss'
import {anchorTo} from "@/helpers/helpers";
import Image from "next/image";
import adults_with_children1 from '../../../../public/gallery/adults_with_children1_little.png'
import adults_with_children2 from '../../../../public/gallery/adults_with_children1.png'
import adults_with_children3 from '../../../../public/gallery/adults_with_children3_little.png'
import {setPic, setScroll, setShowGal} from "@/store/slices/slice";
import {useDispatch} from "react-redux";
import pad from "../../../../public/orPadClean.png";

export const Adults = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
    }, []);
    const dispatch = useDispatch()
    const slideTo = () => {
        anchorTo('form')
    }
    const envocePic = (event: any) => {
        if (!isMobile) {
            dispatch(setScroll(window.scrollY + 50))
            dispatch(setShowGal(true))
            dispatch(setPic(event.target.dataset.name))
        }
    }
    return <div className={promoStyles.contentBlock} style={{backgroundColor: "#F05018"}}>
        {!isMobile && <Image src={pad} alt={'pad'} className={compStyles.Ppad}/>}
        <h1 className={promoStyles.title}>{texts.promo.adults.title}</h1>
        <h2 className={promoStyles.subtitle}>{texts.promo.adults.subtitle}</h2>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <Image data-name={'pic11'} onClick={envocePic} src={adults_with_children1} alt={'pic'}
                       className={compStyles.video}/>
                <h3 className={compStyles.cardTitle}>{texts.promo.adults.sub1}</h3>
                <div className={compStyles.cardText}>{texts.promo.adults.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <Image data-name={'pic12'} onClick={envocePic} src={adults_with_children3}
                       alt={'adults_with_children3'} className={compStyles.video}/>
                <h3 className={compStyles.cardTitle}>{texts.promo.adults.sub2}</h3>
                <div className={compStyles.cardText}>{texts.promo.adults.subText2}</div>
            </div>
        </div>
        <div className={promoStyles.gradientBorder} onClick={slideTo}>
            <div className={promoStyles.cardContent}>{texts.promo.adults.btn}</div>
        </div>
    </div>
}