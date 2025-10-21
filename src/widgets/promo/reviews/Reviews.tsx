import globals from "@/globals.module.scss";
import compStyles from './reviews.module.scss'
import {texts} from "@/texts";
import React from "react";
import promoStyles from '../promoCommon.module.scss'
import Image from "next/image";
import uruyk from './uryuk.jpg'
import {anchorTo} from "@/helpers/helpers";

export const Reviews = () => {
    const slideTo = () => {
        anchorTo('form')
    }
    return <div className={promoStyles.contentBlock} style={{backgroundColor: 'lightgray'}}>
        <h1 className={promoStyles.title}>{texts.promo.reviews.title}</h1>
        <h2 className={promoStyles.subtitle}>{texts.promo.reviews.subtitle}</h2>
        {/* <div className={compStyles.videoWrapper}>
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
        </div> */}
        <div className={promoStyles.cardsWrapper}>
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
        <div className={compStyles.blocks}>
            <div className={compStyles.blocksEl}><span className={compStyles.blockTitle
            }>100+</span> <p/> счастливых отзывов
            </div>
            <div className={compStyles.blocksEl}><span className={compStyles.blockTitle
            }>5.0 / 5 </span>  <p/> средний рейтинг
            </div>
            <div className={compStyles.blocksEl}><span className={compStyles.blockTitle
            }>5 лет</span> <p/> успешной работы в сфере VR
            </div>
        </div>
        {/* <h3 className={compStyles.namdov}>Нам доверяют партнеры по доставке еды:</h3>
        <div className={compStyles.blocksLogo}>
            <Image src={uruyk} alt={'uruyk'} className={compStyles.pLogo}/>
            <Image src={uruyk} alt={'uruyk'} className={compStyles.pLogo}/>
            <Image src={uruyk} alt={'uruyk'} className={compStyles.pLogo}/>
        </div> */}

        <div className={promoStyles.gradientBorder} onClick={slideTo}>
            <div className={promoStyles.cardContent}>{texts.promo.reviews.btn}</div>
        </div>
    </div>
}