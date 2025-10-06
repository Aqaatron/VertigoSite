import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './adults.module.scss'
import promoStyles from '../promoCommon.module.scss'


export const Adults = () => {
    return <div className={globals.contentBlock}>
        <h1 className={compStyles.title}>{texts.promo.adults.title}</h1>
        <h2 className={compStyles.subtitle}>{texts.promo.adults.subtitle}</h2>

        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.adults.sub1}</h3>
                <div className={compStyles.cardText}>{texts.promo.adults.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.adults.sub2}</h3>
                <div className={compStyles.cardText}>{texts.promo.adults.subText2}</div>
            </div>

        </div>
        <div className={globals.gradientBorder}>
            <div className={globals.cardContent}>{texts.promo.adults.btn}</div>
        </div>
    </div>
}