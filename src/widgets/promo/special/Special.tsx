import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './special.module.scss'
import promoStyles from '../promoCommon.module.scss'

export const Special = () => {

    return <div className={globals.contentBlock} style={{backgroundColor: "#"}}>
        <h1 className={compStyles.title}>{texts.promo.special.title}</h1>
        <h2 className={compStyles.subtitle}>{texts.promo.special.subtitle}</h2>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.special.sub1}</h3>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.special.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.special.sub2}</h3>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.special.subText2}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.special.sub3}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.special.subText3}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.special.sub4}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.special.subText4}</div>
            </div>
        </div>
        <div className={globals.gradientBorder}>
            <div className={globals.cardContent}>{texts.promo.flow.btn}</div>
        </div>
    </div>
}