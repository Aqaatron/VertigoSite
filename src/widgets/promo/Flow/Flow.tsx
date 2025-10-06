import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './flow.module.scss'
import promoStyles from '../promoCommon.module.scss'

export const Flow = () => {
    return <div className={globals.contentBlock} style={{backgroundColor: "#F05018"}}>
        <h1 className={promoStyles.title}>{texts.promo.flow.title}</h1>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>

                <div className={compStyles.cardTitle}>{texts.promo.flow.sub1}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.flow.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub2}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.flow.subText2}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub3}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.flow.subText3}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub4}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.flow.subText4}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub5}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.flow.subText5}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub6}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.flow.subText6}</div>
            </div>

        </div>
        <div className={globals.gradientBorder}>
            <div className={globals.cardContent}>{texts.promo.flow.btn}</div>
        </div>
    </div>
}