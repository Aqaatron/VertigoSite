import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './merits.module.scss'

export const Merits = () => {

    return <div className={globals.contentBlock} style={{backgroundColor:"#685BC7"}}>
        <h1 className={compStyles.title}>{texts.promo.merits.title}</h1>
        <div className={compStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.merits.sub1}</h3>
                <div className={compStyles.cardText}>{texts.promo.merits.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.merits.sub2}</h3>
                <div className={compStyles.cardText}>{texts.promo.merits.subText2}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.merits.sub3}</div>
                <div className={compStyles.cardText}>{texts.promo.merits.subText3}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.merits.sub4}</div>
                <div className={compStyles.cardText}>{texts.promo.merits.subText4}</div>
            </div>
        </div>

    </div>
}