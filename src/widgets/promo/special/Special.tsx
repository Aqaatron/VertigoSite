import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './special.module.scss'
import promoStyles from '../promoCommon.module.scss'
import {anchorTo} from "@/helpers/helpers";
import pic from '../../../../public/gallery/pic2.png'
import Image from "next/image";
import classNames from "classnames";

export const Special = () => {
    const slideTo = () => {
        anchorTo('form')
    }
    return <div className={promoStyles.contentBlock}>
        <h1 className={promoStyles.title}>{texts.promo.special.title}</h1>
        <h2 className={classNames(promoStyles.subtitle, compStyles.subtitleLocal)}>{texts.promo.special.subtitle}</h2>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.special.sub1}</h3>
                <Image src={pic} alt={'pic'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.special.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.special.sub2}</h3>
                <Image src={pic} alt={'pic'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.special.subText2}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.special.sub3}</div>
                <Image src={pic} alt={'pic'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.special.subText3}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.special.sub4}</div>
                <Image src={pic} alt={'pic'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.special.subText4}</div>
            </div>
        </div>
        <div className={promoStyles.gradientBorder} onClick={slideTo}>
            <div className={promoStyles.cardContent}>{texts.promo.special.btn}</div>
        </div>
    </div>
}