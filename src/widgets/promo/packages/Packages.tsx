import {texts} from "@/texts";
import React from "react";
import globals from "@/globals.module.scss";
import compStyles from './packages.module.scss'
import promoStyles from '../promoCommon.module.scss'
import {anchorTo} from "@/helpers/helpers";
import Image from "next/image";
import line from '../../../../public/lineHeader.png'
import classNames from "classnames";

export const Packages = ({action}: { action: any }) => {
    const slideTo = (event:any) => {
        anchorTo('form')
        action(event)
    }

    return <div className={promoStyles.contentBlock} style={{backgroundColor: '#685BC7'}}>
        <h1 className={promoStyles.title}>{texts.promo.packages.title}</h1>
        <h2 className={classNames(promoStyles.subtitle, compStyles.subtitleLocal)}>{texts.promo.packages.subtitle}</h2>
        <div className={classNames(promoStyles.cardsWrapper)}>
            <div className={compStyles.card}>
                <h3 className={compStyles.cardTitle}>{texts.promo.packages.p1.title}</h3>
                <Image src={line} className={compStyles.line} alt={'pic'}/>
                <div className={compStyles.wrapper}>
                    {texts.promo.packages.p1.advgs.map((advge) => <div className={compStyles.advge}>{advge}</div>)}
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
                <Image src={line} className={compStyles.line} alt={'pic'}/>
                <div className={compStyles.wrapper}>
                    {texts.promo.packages.p2.advgs.map((advge) => <div className={compStyles.advge}>{advge}</div>)}
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
                <Image src={line} className={compStyles.line} alt={'pic'}/>
                <div className={compStyles.wrapper}>
                    {texts.promo.packages.p3.advgs.map((advge) => <div className={compStyles.advge}>{advge}</div>)}
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