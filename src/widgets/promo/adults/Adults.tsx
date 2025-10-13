import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './adults.module.scss'
import promoStyles from '../promoCommon.module.scss'
import {anchorTo} from "@/helpers/helpers";
import Image from "next/image";
import pic from '../../../../public/gallery/pic2.png'

export const Adults = () => {
    const slideTo = () => {
        anchorTo('form')
    }
    return <div className={promoStyles.contentBlock}>
        <h1 className={promoStyles.title}>{texts.promo.adults.title}</h1>
        <h2 className={promoStyles.subtitle}>{texts.promo.adults.subtitle}</h2>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <Image src={pic} alt={'pic'} className={compStyles.video}/>
                <h3 className={compStyles.cardTitle}>{texts.promo.adults.sub1}</h3>
                <div className={compStyles.cardText}>{texts.promo.adults.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={pic} alt={'pic'} className={compStyles.video}/>
                <h3 className={compStyles.cardTitle}>{texts.promo.adults.sub2}</h3>
                <div className={compStyles.cardText}>{texts.promo.adults.subText2}</div>
            </div>
        </div>
        <div className={promoStyles.gradientBorder} onClick={slideTo}>
            <div className={promoStyles.cardContent}>{texts.promo.adults.btn}</div>
        </div>
    </div>
}