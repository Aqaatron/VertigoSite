import {texts} from "@/texts";
import React, {useEffect} from "react";
import globals from "@/globals.module.scss";
import compStyles from './merits.module.scss'
import promoStyles from '../promoCommon.module.scss'
import Image from "next/image";
import ico from "../../../../public/events/PS5.png";
import girlSlider from "../../../../public/girlSlider.png";
import circle from "../../../../public/circle.png";
import pad from "../../../../public/purpPadClean.png";
import smile from "../../../../public/events/smile_white.png";
import safety from "../../../../public/events/savefty.png";
import present from "../../../../public/events/present_white.png";
import team from "../../../../public/events/team.png";

export const Merits = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
    }, []);
    return <div className={promoStyles.contentBlock} style={{backgroundColor: "#F05018"}}>
        {/*{!isMobile && <Image src={pad} alt={'pad'} className={compStyles.Ppad}/>}*/}
        {!isMobile && <Image src={girlSlider} className={compStyles.girlSlider} alt={'girlSlider'}/>}
        {!isMobile && <Image className={compStyles.circle} src={circle} alt={'logo'}/>}
        <h1 className={promoStyles.title}>{texts.promo.merits.title}</h1>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <Image src={smile} alt={'smile'} className={compStyles.ico}/>
                <div className={compStyles.textWrapper}>
                    <h3 className={compStyles.cardTitle}>{texts.promo.merits.sub1}</h3>
                    <div className={compStyles.cardText}>{texts.promo.merits.subText1}</div>
                </div>
            </div>
            <div className={compStyles.card}>
                <Image src={safety} alt={'safety'} className={compStyles.ico}/>
                <div className={compStyles.textWrapper}>
                    <h3 className={compStyles.cardTitle}>{texts.promo.merits.sub2}</h3>
                    <div className={compStyles.cardText}>{texts.promo.merits.subText2}</div>
                </div>
            </div>
            <div className={compStyles.card}>
                <Image src={present} alt={'present'} className={compStyles.ico}/>
                <div className={compStyles.textWrapper}>
                    <div className={compStyles.cardTitle}>{texts.promo.merits.sub3}</div>
                    <div className={compStyles.cardText}>{texts.promo.merits.subText3}</div>
                </div>
            </div>
            <div className={compStyles.card}>
                <Image src={team} alt={'team'} className={compStyles.ico}/>
                <div className={compStyles.textWrapper}>
                    <div className={compStyles.cardTitle}>{texts.promo.merits.sub4}</div>
                    <div className={compStyles.cardText}>{texts.promo.merits.subText4}</div>
                </div>
            </div>
        </div>
    </div>
}