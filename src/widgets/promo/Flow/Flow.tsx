import {texts} from "@/texts";
import React, {useEffect} from "react";
import globals from "@/globals.module.scss";
import compStyles from './flow.module.scss'
import promoStyles from '../promoCommon.module.scss'
import Image from "next/image";
import ico from '../../../../public/events/PS5.png'
import {anchorTo} from "@/helpers/helpers";

import pic from '../../../../public/gallery/pic4_new.png'
import instruction from '../../../../public/gallery/instruction2.png'
import spacious_arena from '../../../../public/gallery/spacious_arena.png'
import comfortable_lounge from '../../../../public/gallery/comfortable_lounge.png'
import variety_of_vr_games_and_play_areas from '../../../../public/gallery/variety_of_vr_games_and_play_areas.png'
import photos_and_videos from '../../../../public/gallery/photos_and_videos.png'
import variety_of_gaming_zones from '../../../../public/gallery/variety_of_gaming_zones.png'
import pad from "../../../../public/orPadClean.png";
import circle from "../../../../public/circle.png";
import instructionico from "../../../../public/events/instruction.png";
import oculus from "../../../../public/events/oculus_white.png";
import gamepadico from "../../../../public/events/gamepad_white.png";
import lounge from "../../../../public/events/lounge_white.png";
import diversify_games from "../../../../public/events/diversify_games_white.png";
import key_organization from "../../../../public/events/key_organization_white.png";
import photos_white from "../../../../public/events/photos_white.png";


export const Flow = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
    }, []);
    const slideTo = () => {
        anchorTo('form')
    }
    return <div id={'flow'} className={promoStyles.contentBlock} style={{backgroundColor: "#685BC7"}}>
        {/*<Image className={compStyles.pad} src={pad} alt={'pad'}/>*/}
        {!isMobile && <Image className={compStyles.circle} src={circle} alt={'logo'}/>}
        <h1 className={promoStyles.title}>{texts.promo.flow.title}</h1>
        <div className={promoStyles.cardsWrapper}>
            <div className={compStyles.card}>
                <Image src={instructionico} alt={'instructionico'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub1}</div>
                <Image src={instruction} alt={'instruction'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText1}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={oculus} alt={'oculus'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub2}</div>
                <Image src={spacious_arena} alt={'spacious_arena'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText2}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={lounge} alt={'lounge'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub3}</div>
                <Image src={comfortable_lounge} alt={'comfortable_lounge'} className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText3}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={diversify_games} alt={'diversify_games'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub4}</div>
                <Image src={variety_of_vr_games_and_play_areas} alt={'variety_of_vr_games_and_play_areas'}
                       className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText4}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={key_organization} alt={'key_organization'} className={promoStyles.ico}/>
                <div className={compStyles.cardTitle}>{texts.promo.flow.sub5}</div>
                <Image src={variety_of_vr_games_and_play_areas} alt={'variety_of_vr_games_and_play_areas'}
                       className={compStyles.video}/>
                <div className={compStyles.cardText}>{texts.promo.flow.subText5}</div>
            </div>
            <div className={compStyles.card}>
                <Image src={photos_white} alt={'photos_white'} className={promoStyles.ico}/>
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