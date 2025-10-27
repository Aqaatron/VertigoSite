import globals from '../../globals.module.scss'
import line from '../../../public/Vector7.png'
import Image from "next/image";
import compStyles from './faq.module.scss'
import {QuestionElement} from "@/widgets/faq/QuestionElement";

import promoStyles from '../promo/promoCommon.module.scss'
import {texts} from "@/texts";
import React from "react";
import {anchorTo} from "@/helpers/helpers";

export const Faq = ({showP, questions, isPromo}: {
    showP: Function,
    questions: Array<{ title: String, body: String }>,
    isPromo: Boolean
}) => {
    const show = () => {
        showP()
    }
    return <div id={'faq'} className={globals.contentBlock}>
        {isPromo && <h1 className={promoStyles.title}>FAQ - часто задаваемые
            вопросы</h1> || <h1 style={{fontSize: '60px', margin: '10px'}} className={compStyles.spaceF}>FAQ - часто
            задаваемые вопросы</h1>}
        <Image src={line} alt={'line'} style={{margin: '0 0 20px 0', width: '1200px'}}/>
        {
            questions.map((question) => <QuestionElement key={question.title.split(' ')[3]} data={question}/>)}
        <Image src={line} alt={'line'} style={{margin: '40px 0', width: '1200px'}}/>
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
        {isPromo && <div className={promoStyles.gradientBorder} onClick={() => anchorTo('form')}>
                <div className={promoStyles.cardContent} onClick={() => anchorTo('form')}>Остались вопросы? Задайте их
                    нам!
                </div>
            </div> ||
            <div className={compStyles.Btn} onClick={show}>Связаться со мной</div>}
    </div>
}