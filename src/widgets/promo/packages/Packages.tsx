import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './packages.module.scss'
import promoStyles from '../promoCommon.module.scss'

export const Packages = ({action}:{action:any}) => {

    return <div className={globals.contentBlock} style={{backgroundColor: "lightgray", color: 'black'}}>
        <h1 className={promoStyles.title}>{texts.promo.packages.title}</h1>
        <h2 className={promoStyles.subtitle}>{texts.promo.packages.subtitle}</h2>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.packages.p1.title}</h3>
                <div className={compStyles.price}>от {texts.promo.packages.p1.price}</div>
                {texts.promo.packages.p1.advgs.map((advge) => <div className={compStyles.advge}>{advge}</div>)}
                <div className={globals.gradientBorder} style={{color: 'white'}}>
                    <div className={globals.cardContent} data-name={'start'} onClick={action}>Выбрать пакет</div>
                </div>
            </div>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.packages.p2.title}</h3>
                <div className={compStyles.price}>от {texts.promo.packages.p2.price}</div>
                {texts.promo.packages.p2.advgs.map((advge) => <div className={compStyles.advge}>{advge}</div>)}
                <div className={globals.gradientBorder} style={{color: 'white'}}>
                    <div className={globals.cardContent} data-name={'optimal'} onClick={action}>Выбрать пакет</div>
                </div>
            </div>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.packages.p3.title}</h3>
                <div className={compStyles.price}>от {texts.promo.packages.p3.price}</div>
                {texts.promo.packages.p3.advgs.map((advge) => <div className={compStyles.advge}>{advge}</div>)}
                <div className={globals.gradientBorder} style={{color: 'white'}}>
                    <div className={globals.cardContent} data-name={'vip'} onClick={action}>Выбрать пакет</div>
                </div>
            </div>
        </div>

    </div>
}