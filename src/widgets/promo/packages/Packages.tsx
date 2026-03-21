import {texts} from "@/texts";
import React, {useEffect} from "react";
import globals from "@/globals.module.scss";
import compStyles from './packages.module.scss'
import promoStyles from '../promoCommon.module.scss'
import {anchorTo} from "@/helpers/helpers";
import Image from "next/image";
import line from '../../../../public/lineHeader.png'
import classNames from "classnames";
import pad from "../../../../public/purpPadClean.png";

export const Packages = ({action}: { action: any }) => {
    const [isMobile, setIsMobile] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
    }, []);

    const slideTo = (event: any) => {
        anchorTo('form')
        action(event)
    }

    return <div id={'tarifs'} className={promoStyles.contentBlock} style={{backgroundColor: '#685BC7'}}>
        {!isMobile && <Image className={compStyles.pad} src={pad} alt={'pad'}/>}
        <h1 className={promoStyles.title}>{texts.promo.packages.title}</h1>
        <h2 className={classNames(promoStyles.subtitle, compStyles.subtitleLocal)}>{texts.promo.packages.subtitle}</h2>
        <div className={classNames(promoStyles.cardsWrapper)}>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitleMax}>{texts.promo.packages.p1.title}</h3>
                {!isMobile && <Image src={line} className={compStyles.line} alt={'pic'}/>}
                <div className={compStyles.wrapper}>
                    {texts.promo.packages.p1.advgs.map((advge: any, idx: number) => {
                        const text = typeof advge === 'string' ? advge : advge.text;
                        const inlineStyle = (typeof advge === 'object' && advge.style) ? advge.style : undefined;
                        const cls = classNames(compStyles.advge, {
                            [compStyles.advgeHighlight]: typeof advge === 'object' && advge.important
                        });
                        return <div key={idx} className={cls} style={inlineStyle}>{text}</div>
                    })}
                </div>
                <div className={compStyles.lowerWrapper}>
                    <div className={compStyles.price}>от <span style={{
                        color: 'white', textShadow:
                            '2px 2px 0px #F05018'
                    }}>{texts.promo.packages.p1.price}</span> руб
                    </div>
                    <div className={promoStyles.gradientBorder} style={{color: 'white'}}>
                        <div className={promoStyles.cardContent} data-name={'start'} onClick={slideTo}>Выбрать пакет
                        </div>
                    </div>
                </div>
            </div>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.packages.p2.title}</h3>
                {!isMobile && <Image src={line} className={compStyles.line} alt={'pic'}/>}
                <div className={compStyles.wrapper}>
                    {texts.promo.packages.p2.advgs.map((advge: any, idx: number) => {
                        const text = typeof advge === 'string' ? advge : advge.text;
                        const inlineStyle = (typeof advge === 'object' && advge.style) ? advge.style : undefined;
                        const cls = classNames(compStyles.advge, {
                            [compStyles.advgeHighlight]: typeof advge === 'object' && advge.important
                        });
                        return <div key={idx} className={cls} style={inlineStyle}>{text}</div>
                    })}
                </div>
                <div className={compStyles.lowerWrapper}>
                    <div className={compStyles.price}>от <span style={{
                        color: 'white', textShadow:
                            '2px 2px 0px #F05018'
                    }}>{texts.promo.packages.p2.price}</span> руб
                    </div>
                    <div className={promoStyles.gradientBorder} style={{color: 'white'}}>
                        <div className={promoStyles.cardContent} data-name={'optimal'} onClick={slideTo}>Выбрать пакет
                        </div>
                    </div>
                </div>
            </div>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.packages.p3.title}</h3>
                {!isMobile && <Image src={line} className={compStyles.line} alt={'pic'}/>}
                <div className={compStyles.wrapper}>
                    {texts.promo.packages.p3.advgs.map((advge: any, idx: number) => {
                        const text = typeof advge === 'string' ? advge : advge.text;
                        const inlineStyle = (typeof advge === 'object' && advge.style) ? advge.style : undefined;
                        const cls = classNames(compStyles.advge, {
                            [compStyles.advgeHighlight]: typeof advge === 'object' && advge.important
                        });
                        return <div key={idx} className={cls} style={inlineStyle}>{text}</div>
                    })}
                </div>
                <div className={compStyles.lowerWrapper}>
                    <div className={compStyles.price}>от <span style={{
                        color: 'white', textShadow:
                            '2px 2px 0px #F05018'
                    }}>{texts.promo.packages.p3.price}</span> руб
                    </div>
                    <div className={promoStyles.gradientBorder} style={{color: 'white'}}>
                        <div className={promoStyles.cardContent} data-name={'vip'} onClick={slideTo}>Выбрать пакет</div>
                    </div>
                </div>

            </div>
        </div>
        <h3 className={compStyles.prebtn}>{texts.promo.packages.preBtn}</h3>
        <div className={promoStyles.gradientBorderBlockEnd} onClick={slideTo}>
            <div className={promoStyles.cardContentBlockEnd}>{texts.promo.packages.btn}</div>
        </div>
    </div>
}