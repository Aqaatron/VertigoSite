import globals from "@/globals.module.scss";
import compStyles from './reviews.module.scss'
import {texts} from "@/texts";
import React from "react";

export const Reviews = () => {

    return <div className={globals.contentBlock}>
        <h1 className={compStyles.title}>{texts.promo.reviews.title}</h1>
        <h2 className={compStyles.subtitle}>{texts.promo.reviews.subtitle}</h2>
        <div className={compStyles.videoWrapper}>
            <video
                autoPlay
                muted
                loop
                playsInline
                className={compStyles.backgroundVideo}
            >
                <source src={'./confrontation.mp4'} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
        <div className={compStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.reviews.sub1}</h3>
                <div className={compStyles.cardText}>{texts.promo.reviews.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.reviews.sub2}</h3>
                <div className={compStyles.cardText}>{texts.promo.reviews.subText2}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.reviews.sub3}</div>
                <div className={compStyles.cardText}>{texts.promo.reviews.subText3}</div>
            </div>
            <div className={compStyles.card}>
                <div className={compStyles.cardTitle}>{texts.promo.reviews.sub4}</div>
                <div className={compStyles.cardText}>{texts.promo.reviews.subText4}</div>
            </div>
        </div>
        <div className={globals.gradientBorder}>
            <div className={globals.cardContent}>{texts.promo.reviews.btn}</div>
        </div>
    </div>
}