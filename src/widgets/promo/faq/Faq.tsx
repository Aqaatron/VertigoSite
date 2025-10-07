import globals from '../../../globals.module.scss'
import line from '../../../../public/Vector7.png'
import Image from "next/image";
import compStyles from './faq.module.scss'
import {QuestionElement} from "@/widgets/faq/QuestionElement";
import {texts} from "@/texts";
import promoStyles from '../promoCommon.module.scss'
import React from "react";

const questions = texts.promo.faq
export const Faq = () => {

    return <div id={'faq'} className={globals.contentBlock}>
        <h1 className={promoStyles.title}>FAQ - часто задаваемые вопросы</h1>
        <Image src={line} alt={'line'} style={{margin: '0 0 20px 0', width: '1200px'}}/>
        {questions.map((question) => <QuestionElement key={question.title} data={question}/>)}
        <Image src={line} alt={'line'} style={{margin: '40px 0 0 0', width: '1200px'}}/>
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
        <div className={promoStyles.gradientBorder} style={{marginTop:'80px'}}>
            <div className={promoStyles.cardContent}>Связаться со мной</div>
        </div>
    </div>
}