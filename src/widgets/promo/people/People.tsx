import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './people.module.scss'
import promoStyles from '../promoCommon.module.scss'
import {anchorTo} from "@/helpers/helpers";
import classNames from "classnames";
import Image from "next/image";
import operator_yarik from '../../../../public/gallery/operator_yarik_little.png'
import operator_ksuha from '../../../../public/gallery/operator_ksuha_little.png'

export const People = () => {
    const slideTo = () => {
        anchorTo('form')
    }
    return <div className={promoStyles.contentBlock} style={{backgroundColor: "lightgray", color: '#1a1a1a'}}>
        <h1 className={promoStyles.title}>{texts.promo.people.title}</h1>
        <h2 className={promoStyles.subtitle}>{texts.promo.people.subtitle}</h2>
        <div className={classNames(promoStyles.cardsWrapper, compStyles.cardsWrapperLocal)}>
            <div className={compStyles.card}>
                <div className={compStyles.photo}>
                    
                </div>
                <h3 className={compStyles.cardTitle}>{texts.promo.people.p1Name}</h3>
                <div className={compStyles.cardText}>{texts.promo.people.p1title}</div>
                <div className={compStyles.cardText}>{texts.promo.people.p1subtitle}</div>
                <div className={compStyles.cardTextSmall}>{texts.promo.people.p1text}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.photo}>
                    <Image src={operator_yarik} alt={'operator_yarik'}/>
                </div>
                <h3 className={compStyles.cardTitle}>{texts.promo.people.p2Name}</h3>
                <div className={compStyles.cardText}>{texts.promo.people.p2title}</div>
                <div className={compStyles.cardText}>{texts.promo.people.p2subtitle}</div>
                <div className={compStyles.cardTextSmall}>{texts.promo.people.p2text}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.photo}>
                    <Image src={operator_ksuha} alt={'operator_ksuha'}/>
                </div>
                <h3 className={compStyles.cardTitle}>{texts.promo.people.p3Name}</h3>
                <div className={compStyles.cardText}>{texts.promo.people.p3title}</div>
                <div className={compStyles.cardText}>{texts.promo.people.p3subtitle}</div>
                <div className={compStyles.cardTextSmall}>{texts.promo.people.p3text}</div>
            </div>
        </div>
        <div className={promoStyles.gradientBorder} onClick={slideTo}>
            <div className={promoStyles.cardContent}>{texts.promo.people.btn}</div>
        </div>
    </div>
}