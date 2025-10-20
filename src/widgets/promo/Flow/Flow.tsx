import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './flow.module.scss'
import promoStyles from '../promoCommon.module.scss'
import Image from "next/image";
import ico from '../../../../public/events/PS5.png'
import {anchorTo} from "@/helpers/helpers";

import pic from '../../../../public/gallery/pic4_new.png'
import instruction from '../../../../public/gallery/instruction.png'
import photos_and_videos from '../../../../public/gallery/photos_and_videos.png'
import variety_of_gaming_zones from '../../../../public/gallery/variety_of_gaming_zones.png'

export const Flow = () => {
    const slideTo = () => {
        anchorTo('form')
    }
    return <div className={promoStyles.contentBlock} style={{backgroundColor: "#F05018"}}>
        <h1 className={promoStyles.title}>{texts.promo.flow.title}</h1>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <Image src={ico} alt={'ico'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub1}</div>
                <Image src={instruction} alt={'instruction'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={ico} alt={'ico'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub2}</div>
                <Image src={variety_of_gaming_zones} alt={'variety_of_gaming_zones'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText2}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={ico} alt={'ico'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub3}</div>
                <Image src={pic} alt={'pic'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText3}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={ico} alt={'ico'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub4}</div>
                <Image src={variety_of_gaming_zones} alt={'variety_of_gaming_zones'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText4}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={ico} alt={'ico'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub5}</div>
                <Image src={pic} alt={'pic'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText5}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={ico} alt={'ico'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub6}</div>
                <Image src={photos_and_videos} alt={'photos_and_videos'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText6}</div>
            </div>
        </div>
        <div className={promoStyles.gradientBorder} onClick={slideTo}>
            <div className={promoStyles.cardContent} style={{backgroundColor: '#685BC7'}}>{texts.promo.flow.btn}</div>
        </div>
    </div>
}