import globals from "@/globals.module.scss";
import compStyles from './reviews.module.scss'
import {texts} from "@/texts";
import React, {useEffect} from "react";
import promoStyles from '../promoCommon.module.scss'
import Image from "next/image";
import uruyk from './uryuk.jpg'
import {anchorTo} from "@/helpers/helpers";
import Link from "next/link";
import pad from "../../../../public/orPadClean.png";

export const Reviews = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
    }, []);

    const slideTo = () => {
        anchorTo('form')
    }
    return <div id={'reviews'} className={promoStyles.contentBlock}
                style={{backgroundColor: '#F05018', color: 'white'}}>
        {!isMobile && <Image src={pad} alt={'pad'} className={compStyles.Ppad}/>}
        <h1 className={promoStyles.title}>{texts.promo.reviews.title}</h1>
        <h2 className={promoStyles.subtitle}>{texts.promo.reviews.subtitle}</h2>
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
        <Link href={'https://yandex.ru/maps/org/vertigo/103489904717/?indoorLevel=1&ll=46.026944%2C51.531349&z=17'}
              target={"_black"} rel="noopener noreferrer" style={{zIndex:30}}>
            <div className={promoStyles.gradientBorder}>
                <div className={promoStyles.cardContent}>{texts.promo.reviews.btn}</div>
            </div>
        </Link>

    </div>
}