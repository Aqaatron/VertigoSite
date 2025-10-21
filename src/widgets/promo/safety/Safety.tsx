import {texts} from "@/texts";
import React, {useEffect} from "react";
import globals from "@/globals.module.scss";
import compStyles from './safety.module.scss'
import promoStyles from '../promoCommon.module.scss'
import ico from "../../../../public/events/PS5.png";
import Image from "next/image";

import pic from '../../../../public/gallery/pic2.png'
import innovative_equipment from '../../../../public/gallery/innovative_equipment_little.png'
import constant_supervision from '../../../../public/gallery/constant_supervision_little.png'
import impeccable_hygiene_little from '../../../../public/gallery/impeccable_hygiene_little.png'
import cleanliness_and_well_thought_out_space
    from '../../../../public/gallery/cleanliness_and_well_thought_out_space_little.png'

import {inverse} from "next/dist/lib/picocolors";
import {useDispatch} from "react-redux";
import {setPic, setScroll, setShowGal} from "@/store/slices/slice";

import gamepad from '../../../../public/events/gamepad_white.png'
import eye from '../../../../public/events/eye_white.png'
import gigiena from '../../../../public/events/gigiena_white.png'
import home from '../../../../public/events/home_white.png'
import pad from "../../../../public/purpPadClean.png";

export const Safety = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
    }, []);
    const dispatch = useDispatch()
    const envocePic = (event: any) => {
        if (!isMobile) {
            dispatch(setScroll(window.scrollY + 50))
            dispatch(setShowGal(true))
            dispatch(setPic(event.target.dataset.name))
        }
    }
    return <div className={globals.contentBlock} style={{backgroundColor: "#685BC7"}}>
        <Image className={compStyles.pad} src={pad} alt={'pad'}/>
        <h1 className={promoStyles.title}>{texts.promo.safety.title}</h1>
        <h2 className={promoStyles.subtitle}>{texts.promo.safety.subtitle}</h2>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <Image src={gamepad} alt={'gamepad'} className={promoStyles.ico}/>
                <h3 className={compStyles.cardTitle}>{texts.promo.safety.sub1}</h3>
                <Image data-name={'pic7'} onClick={envocePic} src={innovative_equipment}
                       alt={'innovative_equipment'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.safety.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={eye} alt={'eye'} className={promoStyles.ico}/>
                <h3 className={compStyles.cardTitle}>{texts.promo.safety.sub2}</h3>
                <Image data-name={'pic8'} onClick={envocePic} src={constant_supervision}
                       alt={'constant_supervision'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.safety.subText2}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={gigiena} alt={'gigiena'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.safety.sub3}</div>
                <Image data-name={'pic9'} onClick={envocePic} src={impeccable_hygiene_little}
                       alt={'impeccable_hygiene_little'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.safety.subText3}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={home} alt={'home'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.safety.sub4}</div>
                <Image data-name={'pic10'} onClick={envocePic}
                       src={cleanliness_and_well_thought_out_space} alt={'cleanliness_and_well_thought_out_space'}
                       className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.safety.subText4}</div>
            </div>
        </div>

    </div>
}