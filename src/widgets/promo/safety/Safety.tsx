import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './safety.module.scss'
import promoStyles from '../promoCommon.module.scss'
import ico from "../../../../public/events/PS5.png";
import Image from "next/image";

export const Safety = () => {

    return <div className={globals.contentBlock} style={{backgroundColor: ""}}>
        <h1 className={promoStyles.title}>{texts.promo.safety.title}</h1>
        <h2 className={promoStyles.subtitle}>{texts.promo.safety.subtitle}</h2>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <Image src={ico} alt={'ico'} className={promoStyles.ico}/>
                <h3 className={compStyles.cardTitle}>{texts.promo.safety.sub1}</h3>
                <div className={compStyles.cardText}>{texts.promo.safety.subText1}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.safety.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={ico} alt={'ico'} className={promoStyles.ico}/>
                <h3 className={compStyles.cardTitle}>{texts.promo.safety.sub2}</h3>
                <div className={compStyles.cardText}>{texts.promo.safety.subText2}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.safety.subText2}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={ico} alt={'ico'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.safety.sub3}</div>
                <div className={compStyles.cardText}>{texts.promo.safety.subText3}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.safety.subText3}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={ico} alt={'ico'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.safety.sub4}</div>
                <div className={compStyles.cardText}>{texts.promo.safety.subText4}</div>
                <div className={compStyles.video}></div>
                <div className={compStyles.cardText}>{texts.promo.safety.subText4}</div>
            </div>
        </div>

    </div>
}